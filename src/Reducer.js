import { v4 as uid } from 'uuid';

const initialState = [
  {
    id: 0,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, nobis.",
    comments: 6,
  },
  {
    id: 0,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, nobis.",
    comments: 6,
  },
];


const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "NEW_BUG":
            return [...state, { id : uid() ,  description: payload.desc, comments: 0 }]
        case "REOLVED":
            return state.filter((val, id) => val.id !== payload.id)
        default:
            return state
    }
    
}
    
export default Reducer