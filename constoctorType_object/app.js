var elementIndex = 1;
var collectedData = []
function Object1(fname, lname, age, gender) {
    this.id = elementIndex
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.gender = gender;
}

function createObj() {

    var fname = document.getElementById('fnamefield').value;
    var lname = document.getElementById('lnamefield').value;
    var age = document.getElementById('agefield').value;
    var gender = document.getElementById('genderfield').value;
    var x = new Object1(fname, lname, age, gender);
    collectedData.push(x);
    randerData()
    elementIndex++;
    
}

function randerData() {
    document.getElementsByTagName('tbody')[0].innerHTML = " "
    collectedData.forEach(function (val, index) {
        let tr = `<tr>
        <td>${index + 1}</td>`
            + `<td>` + val.firstName + `</td>`
            + `<td>` + val.lastName + `</td>`
            + `<td>` + val.age + `</td>`
            + `<td>` + val.gender + `</td>`
            + `<td> <input data-id="${val.id}"id=${index + 1} chek="checkbox" type='checkbox'></td>

        </tr>`
        let add = document.querySelector(`tr[data-id="${val.name}"]`);
        if (!add) {
            document.getElementsByTagName('tbody')[0].innerHTML += tr

        }
    })

}
function removeRecord() {
    var checked = document.querySelectorAll('input[type="checkbox"]:checked');

    checked.forEach(function (checkbox) {
        var id = parseInt(checkbox.getAttribute('data-id'));
        collectedData = collectedData.filter(val => val.id !== id);
        randerData();
    });
}
function openudateForm() {
    var grid = document.getElementById('table');
    var check = grid.querySelectorAll('input[type="checkbox"]:checked');

    if (check.length === 1) {
        var index = check[0].getAttribute('data-id');
        var data = collectedData.find(x => x.id === parseInt(index));

        document.getElementById('updatefirstName').value = data.firstName;
        document.getElementById('updateLastName').value = data.lastName;
        document.getElementById('updateAge').value = data.age;
        document.getElementById('updateGender').value = data.gender;
        document.getElementById('updateForm').style.display = 'block';

    } else {
        alert('please check the one box');
    }

}
function updateform() {
    var fname = document.getElementById('updatefirstName').value;
    var lname = document.getElementById('updateLastName').value;
    var age = document.getElementById('updateAge').value;
    var gender = document.getElementById('updateGender').value;

    var grid = document.getElementById('table');
    var check = grid.querySelectorAll('input[type="checkbox"]:checked');

    if (check.length === 1) {
        var index = check[0].id - 1;
        var data = collectedData[index];

        data.firstName = fname;
        data.lastName = lname;
        data.age = age;
        data.gender = gender;

        closeUpdateForm();
        randerData();

    } else {
        alert('please check the one box');
    }

}
function closeUpdateForm() {
    document.getElementById('updateForm').style.display = 'none';
}

function compareData() {
    var grid = document.getElementById('table');
    var check = grid.querySelectorAll('input[type="checkbox"]:checked');

    if (check.length === 2) {
        var index1 = check[0].id - 1;
        var index2 = check[1].id - 1;

        var record1 = collectedData[index1];
        var record2 = collectedData[index2];
        if (record1 && record2) {

            const key1 = Object.values(record1);
            const key2 = Object.values(record2)
            if (key1.length !== key2.length) {
                alert('Selected records are diffrent')
            }
            else if (key1[1] === key2[1]&&key1[2]===key2[2]&&key1[3]===key2[3]&&key1[4]===key2[4]) {
                alert('Selected datas are same')
            }

            else {
                alert('Selected datas are different ')
            }
        }
    } else {
        alert("Please check two box.");
    }

}
