const data = require('./codeset.json');
const keys = data.keys;
let func_list = [];
let power_set_list = [];
let mode_set_list = [];
let temp_set_list = [];
let swing_set_list = [];
let fan_set_list = [];

for(let key of keys){
        if(func_list.indexOf(key.func) < 0 ){
                func_list.push(key.func);       
        }
        if(power_set_list.indexOf(key.power_set) < 0 ){
                power_set_list.push(key.power_set);       
        }
        if(mode_set_list.indexOf(key.mode_set) < 0 ){
                mode_set_list.push(key.mode_set);       
        }
        if(temp_set_list.indexOf(key.temp_set) < 0 ){
                temp_set_list.push(key.temp_set);       
        }
        if(swing_set_list.indexOf(key.swing_set) < 0 ){
                swing_set_list.push(key.swing_set);       
        }
        if(fan_set_list.indexOf(key.fan_set) < 0 ){
                fan_set_list.push(key.fan_set);       
        }
}

console.log("Func Set : ", func_list );
console.log("Power Set : ", power_set_list );
console.log("Mode Set : ", mode_set_list );
console.log("Temp Set : ", temp_set_list );
console.log("Swing Set : ", swing_set_list );
console.log("Fan Set : ", fan_set_list );
