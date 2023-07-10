export function getLocalStorage(key) {
  try {
    const contacts = localStorage.getItem(key);
    return contacts === null ? undefined : JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
}

export function saveLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

// export function recordLocalStorage(key, data) {
//   const currentState = getLocalStorage(key);

//   if (!currentState) {
//     saveLocalStorage(key, [data]);
//   } else {
//     currentState.push(data);
//     saveLocalStorage(key, currentState);
//   }
// }

// export function deleteLocalStorage(key, id) {
//   const currentState = getLocalStorage(key);
//   if (currentState.length === 1) {
//     localStorage.removeItem(key);
//     return;
//   }
//   const index = currentState.findIndex(obj => obj.id === id);
//   currentState.splice(index, 1);
//   saveLocalStorage(key, currentState);
// }
