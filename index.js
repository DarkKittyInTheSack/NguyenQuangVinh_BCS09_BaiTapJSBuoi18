var array = []
var secondArray = []

document.querySelector('.add').addEventListener('click',function(){
    var inputData = document.getElementById('numberK').value*1

    array.push(inputData)

    document.getElementById('result').innerHTML = `Mảng sau khi nhập là : ${array}`
})

document.querySelector('.view').addEventListener('click',function(){

    document.getElementById('result').innerHTML = `Mảng sau khi nhập là : ${array}`
})

document.querySelector('.sum').addEventListener('click',function(){

    var sum = 0
    for(i = 0; i < array.length ; i++){
        if(array[i] > 0){
            sum+= array[i]
        }
    }

    document.getElementById('result2').innerHTML = `Tổng các số dương trong mảng là : ${sum}`
})

document.querySelector('.count').addEventListener('click',function(){

    var count = 0
    for(i = 0; i < array.length ; i++){
        if(array[i] > 0){
            count++
        }
    }

    document.getElementById('result3').innerHTML = `Số lượng các số dương trong mảng là : ${count}`
})

document.querySelector('.min').addEventListener('click',function(){

    var min = array[0]
    for(i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
        }
    }

    document.getElementById('result4').innerHTML = `Số nhỏ nhất trong mảng là : ${min}`
})

document.querySelector('.minPlus').addEventListener('click',function(){

    var min = array[0];
    for(i = 0;  i< array.length; i++){
        if(array[i] < min && array[i] > 0){
            min = array[i]
        }
    }

    document.getElementById('result5').innerHTML = `Số dương nhỏ nhất trong mảng là : ${min}`
})

document.querySelector('.lastEven').addEventListener('click',function(){

    var even = -1;
    for(i = 0;  i< array.length; i++){
        if(array[i]%2 == 0){
            even = array[i]
        }
    }

    document.getElementById('result6').innerHTML = `Số chẵn cuối cùng trong mảng là : ${even}`
})

document.querySelector('.swap').addEventListener('click',function(){

    var position = document.getElementById('position').value*1
    var switchPosition = document.getElementById('switchPosition').value*1

    var temp = array[switchPosition]
    array[switchPosition] = array[position]
    array[position] = temp

    document.getElementById('result7').innerHTML = `Mảng sau khi đổi vị trí các phần tử là : ${array}`
})

document.querySelector('.sortIncrease').addEventListener('click',function(){

    document.getElementById('result8').innerHTML = `Mảng sau khi sắp xếp tăng dần là : ${array.sort(function(a,b){return a-b})}`
})

function checkElement(input){
    if(input < 2){
        return false
    }else{

        if(input == 2){
            return true
        }
        else{
            for(i = 2; i < input-1;i++){
                if(input%i == 0){
                    return false
                }
            }
            return true;
        }
        
    }
}

document.querySelector('.firstElementNumber').addEventListener('click',function(){

    var elementNumber = -1;
    for(i = 0;  i< array.length; i++){
        if(checkElement(array[i])){
            elementNumber = array[i]
            break
        }
        
    }

    document.getElementById('result9').innerHTML = `Số nguyên tố đầu tiên trong mảng là : ${elementNumber}`
})

document.querySelector('.add2').addEventListener('click',function(){

    secondArray.push(document.getElementById('newValue').value*1)

    document.getElementById('newArray').innerHTML = secondArray
})

document.querySelector('.integerCount').addEventListener('click',function(){

    var count = 0;
    for(i = 0; i < secondArray.length ; i++){
        if(Number.isInteger(secondArray[i])){
            count++
        }
    }

    document.getElementById('result10').innerHTML = `Số lượng số nguyên có trong mảng là: ${count}`
})

document.querySelector('.compareNumber').addEventListener('click',function(){

    var count = 0;
    var str = ''
    array.sort(function(a,b){return a-b})

    for(i = 0; i < array.length; i++){
        if(array[i] < 0){
            count++
        }else{
            break
        }
    }

    if(count < (array.length - count)){
        str = "Số dương nhiều hơn số âm"
    }else if(count == (array.length - count)){
        str = "Số dương bằng số âm"
    }else{
        str = "Số âm nhiều hơn số dương"
    }

    document.getElementById('result11').innerHTML = str
})