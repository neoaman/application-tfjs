export const setValue = (value, key, func, obj, type = "obj") => {
  var conv;
  
  if (type == "arr") {
    conv = [...obj];
  } else {
    conv = {...obj};
  }
  const k = key.split(".");
  

  switch (k.length) {
    case 1:
      conv[k[0]] = value;
      break;
    case 2:
      conv[k[0]][k[1]] = value;
      break;
    case 3:
      conv[k[0]][k[1]][k[2]] = value;
      break;
    case 4:
      conv[k[0]][k[1]][k[2]][k[3]] = value;
      break;
    case 5:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]] = value;
      break;
    case 6:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]] = value;
      break;
    case 7:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]] = value;
      break;
    case 8:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]][k[7]] = value;
      break;
    case 9:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]][k[7]][k[8]] = value;
      break;
    case 10:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]][k[7]][k[8]][k[9]] = value;
      break;
    case 11:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]][k[7]][k[8]][k[9]][k[10]] = value;
      break;
    case 12:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]][k[7]][k[8]][k[9]][k[10]][k[11]] = value;
      break;
    case 13:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]][k[7]][k[8]][k[9]][k[10]][k[11]][k[12]] = value;
      break;
    case 14:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]][k[7]][k[8]][k[9]][k[10]][k[11]][k[12]][k[13]] = value;
      break;
    case 15:
      conv[k[0]][k[1]][k[2]][k[3]][k[4]][k[5]][k[6]][k[7]][k[8]][k[9]][k[10]][k[11]][k[12]][k[13]][k[14]] = value;
      break;
    default:
      console.log("Cant update", key);
  }
  func(conv);
};

export function moveArray(arr, old_index, new_index) {
  if (new_index >= arr.length && new_index >= 0) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}