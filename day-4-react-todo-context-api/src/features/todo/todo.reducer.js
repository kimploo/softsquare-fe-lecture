import { createSlice } from '@reduxjs/toolkit';
import { createTodoAPI } from './api/createOneTodo.mjs';
import { deleteTodoAPI } from './api/deleteOneTodo.mjs';
import { getAllTodosAPI } from './api/getAllTodos.mjs';
import { getOneTodoAPI } from './api/getOneTodo.mjs';
import { updateOneTodoAPI } from './api/updateOneTodo.mjs';

export const initialState = {
  todo: []
};

// 하나의 거대한 전역 상태에서 필요한 부분만 잘라서 사용할 수 있게 만든 도구
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllTodosAPI.fulfilled, (state, action) => {
        state.todo = action.payload.data
      })
      .addCase(getAllTodosAPI.rejected, (state, action) => {
        // 과일 조회 에러 시 에러 처리
        // 과일 조회 실패했습니다. -> 고객에게 보여줄 수도 있고
        // 에러 수집하는 서버나 CloudWatch에 요청을 보내주는게 좋다.
      }) 
      .addCase(getOneTodoAPI.fulfilled, (state, action) => {
        state.todo = [...state.fruits, action.payload.data];
      })
      .addCase(getOneTodoAPI.rejected, () => {
        // 과일 1개 조회 에러 시 에러 처리
      })
      .addCase(createTodoAPI.fulfilled, () => {
        // 과일 생성 이후에 전체 과일 목록 다시 조회
        // 과일이 생성되었습니다 메시지
      })
      .addCase(createTodoAPI.rejected, () => {
        // 과일 생성 실패 시 에러 처리
      })
      .addCase(deleteTodoAPI.fulfilled, () => {
        // 과일이 삭제되었습니다 메시지
      })
      .addCase(deleteTodoAPI.rejected, () => {
        // 과일 삭제 실패 시 에러 처리
      })
      .addCase(updateOneTodoAPI.fulfilled, () => {
        // 과일 내용이 수정되었습니다 메시지  
      })
      .addCase(updateOneTodoAPI.rejected, () => {
        // 과일 내용 수정 실패시 메시지
      })
  },
});

// export const { updateCardState, resetCardState } = cardSlice.actions;
export default todoSlice.reducer;
