(function () {

//The query option itself.
function $(query){
    return new ofekQuery(query);
}

var ofekQuery = function(query) {
    this.resultsFromQuery = [] ;
    addClass(className);
    removeClass(className);
    var splitedElm = query.split(' ');
    this.resultsFromQuery = checkQuery(splitedElm[0]);

    for(var i=1;i<splitedElm.length;i++){
        this.resultsFromQuery = checkQueryResult(splitedElm[i],this.resultsFromQuery);
    }
};

function checkQueryResult(elm,result){
    result = Array.prototype.slice.call(results);
    if(elm.substring(0,1) === '#')
    {
        return filterID(result,elm);
    }
    else if(elm.substring(0,1) === '.') {
        return filterClass(result,elm);
    }
    else
    {
        return filterTag(result,elm);
    }

}
function filterID(result,elm){
    var array = [];
    array = Array.prototype.slice.call(array); //makes the array a real array
    array[0] = result.filter(function (result) {
        return result.id == operator.substring(1,result.length);
    });
}

function filterClass(result,elm){
        return result.filter(function (result) {
            return result.classList.contains(elm.substring(1,result.length));
        });
}

function filterTag(result,elm){
    var array = [];
    array =  Array.prototype.slice.call(array); //makes the array a real array
    for(var j = 0 ;j<result.length;j++)
    {
        if(result[j].childNodes.length>0)
        {
            for(var i=0;i<result[j].childNodes.length;i++){
                if(result[j].childNodes[i].tagName == elm)
                    array.push(result[j].childNodes[i]);
            }
        }
        else if(result[j].tagName == operator){
            array.push(results[j]);
        }
    }
    return array;
}

function addClass(className){
    for(var i = 0 ; i< this.resultsFromQuery.length; i++){
        this.resultsFromQuery[i].classList.add(className);
    }
}

function removeClass(className){
    for(var i = 1 ; i< this.resultsFromQuery.length; i++){
        this.resultsFromQuery[i].classList.remove(className);
    }
}


function checkQuery(query) {
    if(query.substring(0,1) === '.'){
        return document.getElementById(query.substring(1,query.length))
    }
    else if(query.substring(0,1) === '#'){
        return document.getElementById(query.substring(1,query.length))
    }
    else {
        return document.getElementsByTagName(query);
    }
}

})();