const DATA = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry",
    "Fig", "Grapes", "Honeydew", "Indian Fig", "Jackfruit",
    "Kiwi", "Lemon", "Mango", "Nectarine", "Orange"
]

export default DATA
  

export const LARGE_DATA = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
}));
  