module.exports = function check(str, bracketsConfig) {
  let valid = true;
  let temp_str = "";
    for (i = 0; i != str.length; i++) {
      same_brackets = false ;  
      for (aa = 0; aa != bracketsConfig.length; aa++) {
        if (str[i] == bracketsConfig[aa][0]) {
          open_bracket = true;
          bb = aa;
          if (bracketsConfig[aa][0] == bracketsConfig[aa][1]) { same_brackets = true;}
          break;
        } 
        if (str[i] == bracketsConfig[aa][1]) {
          open_bracket = false;
          bb = aa;
          break;
        }
      }

        if (open_bracket == true) {            
          temp_str = temp_str + str[i];
          index = temp_str.length - 1;
          if (temp_str[index] == temp_str[index-1] && same_brackets == true) {
            temp_str = temp_str.slice(0, index - 1);
          }
        } else { 
            index = temp_str.length - 1;
            if (temp_str[index] == bracketsConfig[bb][0]) {
              temp_str = temp_str.slice(0, index);
            } else {
                valid = false;
                break;
              }
          }
    } 
    
    if (temp_str.length !="") {valid = false}
    return valid;
}