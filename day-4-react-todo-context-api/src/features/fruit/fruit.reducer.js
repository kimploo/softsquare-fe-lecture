import { createSlice } from '@reduxjs/toolkit';
import { createFruitAPI } from './api/createOneFruit.mjs';
import { deleteFruitAPI } from './api/deleteOneFruit.mjs';
import { getAllFruitsAPI } from './api/getAllFruits.mjs';
import { getOneFruitAPI } from './api/getOneFruit.mjs';
import { updateOneFruitAPI } from './api/updateOneFruit.mjs';

/**
 * Redux 저장소 내의 과일 컬렉션 상태를 나타냅니다.
 * 
 * @typedef {Object} ReduxState
 * @property {Array<Fruit>} fruits - 과일 객체의 배열입니다.
 * 
 * @typedef {Object} Fruit
 * @property {string} id - 과일의 고유 식별자입니다.
 * @property {string} name - 과일의 이름입니다.
 * @property {number} price - 과일의 가격입니다. 한국 원(₩)으로 표시되며, 단위당 비용을 나타냅니다.
 * @property {number} quantity - 현재 재고 또는 카트에 있는 과일의 수량입니다. 모든 과일은 초기값으로 0이 설정됩니다.
 * 
 * 예시 Redux 상태:
 * {
 *   "fruits": [
 *     { "id": "1", "name": "사과", "price": 5000, "quantity": 0 },
 *     { "id": "2", "name": "바나나", "price": 3000, "quantity": 0 },
 *     { "id": "3", "name": "체리", "price": 12000, "quantity": 0 },
 *     { "id": 4, "name": "딸기", "price": 9000, "quantity": 0 },
 *     { "id": 5, "name": "포도", "price": 4000, "quantity": 0 }
 *   ]
 * }
 */
export const initialState = {
  fruits: []
};

// 하나의 거대한 전역 상태에서 필요한 부분만 잘라서 사용할 수 있게 만든 도구
export const cardSlice = createSlice({
  name: 'fruit',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllFruitsAPI.fulfilled, (state, action) => {
        // export const getAllFruitsAPI = createAsyncThunk('fruit/getAll', getAllFruits)
        state.fruits = action.payload
      })
      .addCase(getAllFruitsAPI.rejected, (state, action) => {
        // 과일 조회 에러 시 에러 처리
        // 과일 조회 실패했습니다. -> 고객에게 보여줄 수도 있고
        // 에러 수집하는 서버나 CloudWatch에 요청을 보내주는게 좋다.
      }) 
      .addCase(getOneFruitAPI.fulfilled, (state, action) => {
        state.fruits = [...state.fruits, action.payload];
      })
      .addCase(getOneFruitAPI.rejected, () => {
        // 과일 1개 조회 에러 시 에러 처리
      })
      .addCase(createFruitAPI.fulfilled, () => {
        // 과일 생성 이후에 전체 과일 목록 다시 조회
        // 과일이 생성되었습니다 메시지
      })
      .addCase(createFruitAPI.rejected, () => {
        // 과일 생성 실패 시 에러 처리
      })
      .addCase(deleteFruitAPI.fulfilled, () => {
        // 과일이 삭제되었습니다 메시지
      })
      .addCase(deleteFruitAPI.rejected, () => {
        // 과일 삭제 실패 시 에러 처리
      })
      .addCase(updateOneFruitAPI.fulfilled, () => {
        // 과일 내용이 수정되었습니다 메시지  
      })
      .addCase(updateOneFruitAPI.rejected, () => {
        // 과일 내용 수정 실패시 메시지
      })
  },
});

// export const { updateCardState, resetCardState } = cardSlice.actions;
export default cardSlice.reducer;
