/*module.exports = {
	getNestedChildren : function (arr, primKey, ParKey, parent? : any) {
        var out = [];
        for(var i in arr) {
            if(arr[i][ParKey] == parent) {
                var children = this.getNestedChildren(arr, primKey, ParKey, arr[i][primKey]);
                children.length && (arr[i].children = children);
                out.push(arr[i])
            }
        }
        return out;
    }
}*/

export class ReusableFunctionsService {

	// Convert Linear to Multi Level
	getNestedChildren(arr, primKey, ParKey, parent? : any) {
        var out = [];
        for(var i in arr) {
            if(arr[i][ParKey] == parent) {
                var children = this.getNestedChildren(arr, primKey, ParKey, arr[i][primKey]);
                children.length && (arr[i].children = children);
                out.push(arr[i])
            }
        }
        return out;
    }
}