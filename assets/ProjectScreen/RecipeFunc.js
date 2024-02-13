// recipeFunctions.js 수정 필요!!

import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import firestore from "@react-native-firebase/firestore";

// 냉장고 재료 가져오기 (말 그대로 디비에 map으로 저장된 정보를 가져오는거)
const getRefrigeratorIngredients = async () => {
  const ingredientArray = await getDocs(collection(db, 'ingredients'));
  return ingredientArray.docs.map((doc) => doc.data());
};

//냉장고에서 재료 추가버튼 눌렀을때 그 선택된 재료가 들어가는 펑션
// 선택한 재료를 저장하거나 업데이트
//맵에서 정보 가져오기 (정확하게 한지는 헷갈)
const addToUsersRefrigerator = async (inputName, inputGram, current_unit, category) => {
  try {
    console.log(inputName, inputGram, current_unit);

    // Fetch ingredient data
    const ingredientData = await fetchIngredient(category);
    const ingreidentName = ingredientData[inputName]?.ingredient_name;

    // Fetch user refrigerator data
    const userRefrigeratorData = await fetchUserRefrigerator();
    const userRefrigeratorName = userRefrigeratorData[inputName]?.user_ingredient_name;

    console.log(userRefrigeratorName);
    console.log(ingreidentName);

    if (userRefrigeratorName === inputName) {
      userRefrigeratorData[inputName].user_ingredient_gram += parseFloat(inputGram);
      userRefrigeratorData[inputName].user_ingredient_current_unit = current_unit;
      // console.log(userRefrigeratorData);
      return userRefrigeratorData;
    } else {
      const newIngredient = {
        user_ingredient_id: ingredientData[inputName].ingredient_id,
        user_ingredient_name: inputName,
        user_ingredient_gram: parseFloat(inputGram),
        user_ingredient_image: ingredientData[inputName].ingredient_image,
        user_ingredient_category: ingredientData[inputName].ingredient_category,
        user_ingredient_current_unit: current_unit
      };

      // userRefrigeratorData.push(newIngredient);
      console.log(newIngredient);
      return newIngredient;
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle or rethrow the error as needed
    throw error;
  }
};

//재료 검색기능
// 검색 시 비슷한 재료 카테고리 나오게하는 함수 (필터써서 서치기능)
const ingredientSearchFilter = (searchInput) => { //searchInput=입력값
  return ingredientMap.filter((ingredient) =>
    ingredient.ingredient_name.includes(searchInput)
  );
};

//디비에 gram으로만 저장되어 있는데 레시피나 다른곳에 단위를 변환해서 보여줘야할때
// 다른 unit으로 변환하기
//디비에서 가져오고                   그램      재료   어떤 유닛 전환인지 현제 유닛
const switchUnitConversion = async (weight, ingredient, conversionType, category) => {
  const ingredientData = await fetchIngredient(category);
  const ratio = ingredientData[ingredient].ingredient_ratio[conversionType];//이거 맞는지 확인
   console.log(ratio + ' ratio_switchUnitConversion');
   let weightConversion = 0; //바뀐 숫자 담는곳
   let unit = ' '; //바뀐 유닛 담는곳
   //switch/case구문으로 각 케이스에 걸리면 그거에 맞는값을 리턴 예) conversionType=gram_to_unit; --> return (weight * conversionType2[conversionType]).toFixed(0); 으로 단위를 바꿔주는 함수
   if (ratio == 0){
       unit = 'g';
         return [weightConversion, unit];
       } else {
   switch (conversionType) {
     case 'gram_to_gram':
       weightConversion = weight;
       return [weightConversion, unit];
     case 'gram_to_unit':
       weightConversion = (weight * ratio).toFixed(2);
       unit = '개';
       return [weightConversion, unit];
     case 'unit_to_gram':
       weightConversion = (weight / ratio).toFixed(2);
       unit = 'g';
       return [weightConversion, unit];
     case 'gram_to_spoon':
       weightConversion = (weight * ratio).toFixed(2);
       unit = '스푼';
       console.log(weightConversion + ' weightConversion_switchUnitConversion');
       console.log(unit + ' unit_switchUnitConversion');
       return [weightConversion, unit];
     case 'spoon_to_gram':
       weightConversion = (weight / ratio).toFixed(2);
       unit = 'g'
       return [weightConversion, unit];
     case 'gram_to_ml':
       weightConversion = (weight * ratio).toFixed(2);
       unit = 'ml';
       return [weightConversion, unit];
     case 'ml_to_gram':
       weightConversion = (weight / ratio).toFixed(2);
       unit = 'g';
       return [weightConversion, unit];
     default:
       return [weightConversion, unit];
   }
 }
 };


// 레시피에서 조리 완료시 냉장고의 재료가 줄어들도록하는 함수
const subtractIngredient = async (weight, kind, name) => {
  //ogGram은 원래 디비에서 받은값
  const ogGram = (await collection(db, 'ingredients').doc(kind).get()).data().ingredient_gram;
  const updateValue = ogGram - weight; //차감되는 함수니깐 차감

  await collection(db, 'users').doc(kind).update({ [name]: { ingredient_gram: Math.max(0, updateValue) } });
};//차감된 값을 다시 db에 넣어주는데 만약 넣어주는 값 (updateValue)가 마이너스이면 updateValue=0으로 만들어버리는 함수

// recipe 컬렉션에 레시피 추가하는 함수 (수정필요)
const addRecipeToCollection = async (recipeData) => {
  try {
    const recipeRef = await addDoc(collection(db, 'recipe'), recipeData);
    console.log('Recipe added with ID: ', recipeRef.id);
    return recipeRef.id;
  } catch (error) {
    console.error('Error adding recipe: ', error);
  }
};

// bookmark 컬렉션에 북마크 추가하는 함수
const addBookmark = async (userId, recipeId) => {
  try {
    const bookmarkRef = doc(db, 'bookmark', userId);
    await updateDoc(bookmarkRef, { [recipeId]: true });
    await addBookmarkToUser(userId, recipeId);
    console.log('Bookmark added successfully.');
  } catch (error) {
    console.error('Error adding bookmark: ', error);
  }
};

// recipeLack 컬렉션에 부족한 재료 추가하는 함수 (수정필요)
const addLackToCollection = async (lackData) => {
  try {
    const lackRef = await addDoc(collection(db, 'recipeLack'), lackData);
    console.log('Lack added with ID: ', lackRef.id);
    return lackRef.id;
  } catch (error) {
    console.error('Error adding lack: ', error);
  }
};

// 가나다순으로 정렬하는 함수
const orderByKorean = async () => {
  const koreanOrder = await db.collection('recipe').orderBy('recipeName').get();
  return koreanOrder.docs.map((doc) => doc.data());
};

// 부족한 재료 갯수가 적은 순으로 정렬하는 함수
const refrigeratorOrderByLack = async (refrigeratorIngredients) => {
  const lackOrder = await db.collection('recipe').get();

  const sortedRecipe = lackOrder.docs
    .map((recipeDoc) => {
      const recipeDocData = recipeDoc.data();
      const lack = compareIngredients(refrigeratorIngredients, recipeDocData.recipe_ingredients);

      return {
        recipeId: recipeDoc.recipeId,
        lackCount: lack.length,
      };
    })
    .sort((a, b) => a.lackCount - b.lackCount);

  return sortedRecipe.map((recipeDocData) => ({
    recipeId: recipeDocData.recipeId,
    lackCount: recipeDocData.lackCount,
  }));
};

// 북마크된 레시피의 아이디 가져오는 함수
const getBookmarkedRecipes = async (userId) => {
  const bookmarkData = await db.collection('bookmark').doc(userId).get();
  const bookmarkedRecipeIds = [];

  for (const id in bookmarkData.data() || {}) {
    if (bookmarkData.data()[id] === true) {
      bookmarkedRecipeIds.push(id);
    }
  }

  return bookmarkedRecipeIds;
};

// 레시피 추가 시 recipeCounter를 증가시켜서 레시피 아이디 생성하는 함수
let recipeCounter = 0;
const recipeIdGenerator = () => {
  recipeCounter += 1;
  return 'recipe' + recipeCounter;
};


// 레시피와 냉장고에 있는 재료 비교하는 함수
const compareIngredients = (refrigeratorIngredients, recipeIngredients) => {
  const notInRef = [];
  for (let i = 0; i < recipeIngredients.length; i++) {
    const component = recipeIngredients[i];

    if (!refrigeratorIngredients.includes(component)) {
      notInRef.push(component);
    }
  }

  return notInRef;
};

// 북마크된 레시피의 아이디를 사용자 필드에 추가하는 함수
const addBookmarkToUser = async (userId, recipeId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      const bookmarkedRecipes = userData.bookmarkedRecipes || [];

      if (!bookmarkedRecipes.includes(recipeId)) {
        bookmarkedRecipes.push(recipeId);
        await updateDoc(userRef, { bookmarkedRecipes });
        console.log('Bookmark added to user successfully.');
      } else {
        console.log('Recipe is already bookmarked by the user.');
      }
      
    } else {
      console.error('User not found.');
    }
    
  } catch (error) {
    console.error('Error adding bookmark to user: ', error);
  }
};
//day 1
//냉장고에 재료넣기

//디비에 유저 냉장고가 있는지 없는지 확인
const checkIfUserRefrigeratorExists = async () => {
  const refregerator = getUsersRefrigeratorIngredients();
  try{
    refregerator;
  } catch (error){
    //유저 냉장고 .set 하기
  }
};

//재료 양 설정 받은 값 db에 넣기*
const updateUsersRefrigeratorAddedFromIngredient = async (weight, ingredient_name, conversionType, currentUnit, category) => {
  //1. input값 받고 unit을 switchUnitConversion을 돌려 내보내야됨
  //2. inputIngredient 값을 받고 유저냉장고에 넣는 역할 (나중에 inputIngredient랑 합쳐도 괜찮을듯 (합침 기억해두기))
    console.log(weight, ingredient_name, conversionType, currentUnit, category)
    const switchedUnit = await switchUnitConversion (weight, ingredient_name, conversionType, category);
    const switchedUnitData = switchedUnit.data;
    const storePreviousUserRefrigerator = fetchUserRefrigerator();
    // console.log(switchedUnitData);
    const switchedUnitWeight = switchedUnit[0];
    const switchedUnitCurrentUnit = switchedUnit[1];
    // console.log(switchedUnitWeight);
    // console.log(switchedUnit[1]);
    const updatedRefrigeratorMap = await addToUsersRefrigerator(ingredient_name, switchedUnitWeight, switchedUnitCurrentUnit, category);
    const updatedRefrigeratorMap1 = [storePreviousUserRefrigerator, ...updatedRefrigeratorMap]
    console.log(updatedRefrigeratorMap);
    // firestore().collection('users').doc('user_id').user_refrigerator.update(updatedRefrigeratorMapRef);
    firestore().collection('users').doc('user_id').update({
      user_refrigerator: {ingredient_name: updatedRefrigeratorMap1}
    }); 
    // firestore().collection('users').doc('user_id').update(updatedRefrigeratorMapRef); 
  };
//db에서 가져오기
/*const getUsersRefrigerator = async() => {
//updateUsersRefrigerator에서 db에 업뎃한 내용을 가져온다
//users에 재료마다 단위 뭘로 저장했는지 기억해야됨
  const userIngredientArray = await getDocs(collection(db, 'users'));
  return userIngreditentArray.docs.map((doc) => doc.data());'  
  console.log(userIngreditentArray.docs.map((doc) => doc.data());//확인용
};*/

//보내주는거*
const showOnRefrigerator = async (inputName) => {
  try {
    const refrigerator = await fetchUserRefrigerator();
    const unit = refrigerator[inputName].user_ingredient_current_unit;
    const weight = refrigerator[inputName].user_ingredient_gram;
    const name = refrigerator[inputName].user_ingredient_name;
    const image = refrigerator[inputName].user_ingredient_image;

    let conversionType = '';

    switch (unit) {
      case 'g':
        conversionType = 'gram_to_gram';
        break;
      case '개':
        conversionType = 'gram_to_unit';
        break;
      case '스푼':
        conversionType = 'gram_to_spoon';
        break;
      case 'ml':
        conversionType = 'gram_to_ml';
        break;
      default:
        // Set a default conversion type if necessary
        conversionType = 'default_conversion_type';
        break;
    }
    const convertedUnit = await switchUnitConversion(weight, name, conversionType);
    console.log([name, image, ...convertedUnit] )
    return [name, image, ...convertedUnit]  } 
    catch (error) {
    console.error("Error in fetching refrigerator data:", error);
    return false; // Or handle the error accordingly
  }
};

// 가져온걸로 프런트에서 보여주면 1일차 끗


//day 2
//조리완료 후 차감

//완료된 레시피 재료불러오기 -> 차감 -> 업뎃
const getAndUpdateFinishedRecipesIngredient = async(recipe_id) => {
  const recipeIngredient = await collection(recipes).doc(recipe_id).get(recipe_ingredients);
  for (i = 0; i = recipeIngredient; i++){
    //여기서 인그리언트 이름 빼내고 단위도 통일해야되는데
  }
  //subtractIngredient(recipeIngredient.get([i]); //일케 빼는 펑션에 넣어서 차감 해버려야지
};
/*
//차감및 업뎃
const updateUserRefrigeatorSubtractedFromRecipe = async() => {

};
*/
//보여주는건 getUsersRefrigerator쓰기


//day 3
//영수증에서 냉장고에 추가

//영수증 추가 이름이랑 재료 db에서 이름을 매치해서 냉장고 재료에서 가져오기
const matchIngredientandReceipt = async() => {
//프런트에서 인풋값으로 받아야될지 db에서 가져와야될지 정해야되는데 인풋값이 더 나을것같은게 db는 저장되어있는거고 조금더 다이렉트한 인풋이 더 낮지 않을까?
//인풋값 받는거면 켈린더 디비에 저장할려고 프런트에서 백으로 보낼때 같이 받아오면 될듯
//인풋값으로 받고
//재료db불러오고
//인풋값이랑 재료 db랑 비교
//없으면 break (더 진행할 필요없으니깐)
//있으면 db에 업뎃
};

//day 4

//아직 어케 될지 모르겠음 만약에 2번째 옵션이면 day 1이랑 비슷할듯



//그 외의 코드
//단위 변환 코드

//디비 불러오는 코드
// 냉장고 재료 가져오기 (말 그대로 디비에 map으로 저장된 정보를 가져오는거)
const fetchIngredient = async (category) => {
  try{
  const ingredientDB = firestore().collection('ingredients').doc(category);//카테고리 늘리기
  const ingredientInfo = await ingredientDB.get();
  const ingredientData = ingredientInfo.data();
  return ingredientData;
  
  } catch (error) {
      console.error("ERROR IN Calling Ingredient DB:", error);
    return false;
  }
};


//유저 냉장고 디비 받아오기
const fetchUserRefrigerator = async () => {
  try {
    const userDB = firestore().collection('users').doc('user_id');
    const userInfo = await userDB.get();
    const userInfoData = userInfo.data();
    return userInfoData.user_refrigerator;
  } catch (error){
    console.error("ERROR IN Calling User Refrigerator DB:", error);
  }
};
//래시피 후 빼는거
const subtractIngredient1 = async (weight, kind, name) => {
  //ogGram은 원래 디비에서 받은값
  const ogGram = (await collection(db, 'users').doc().get()).data().user_ingredient_gram;
  const updateValue = ogGram - weight; //차감되는 함수니깐 차감

  await collection(db, 'users').doc(kind).update({ [name]: { user_ingredient_gram: Math.max(0, updateValue) } });
};//차감된 값을 다시 db에 넣어주는데 만약 넣어주는 값 (updateValue)가 마이너스이면 updateValue=0으로 만들어버리는 함수

export {
  addBookmarkToUser,
  getRefrigeratorIngredients,
  addToUsersRefrigerator,
  ingredientSearchFilter,
  switchUnitConversion,
  subtractIngredient,
  addRecipeToCollection,
  addBookmark,
  addLackToCollection,
  orderByKorean,
  refrigeratorOrderByLack,
  getBookmarkedRecipes,
  recipeIdGenerator,
  compareIngredients,
  updateUsersRefrigeratorAddedFromIngredient,
  checkIfUserRefrigeratorExists,
  showOnRefrigerator,
  getAndUpdateFinishedRecipesIngredient,
  matchIngredientandReceipt,
  subtractIngredient1,
  fetchUserRefrigerator,
  fetchIngredient
};