var i = 1;
function addelement(type) {
    let output;
    switch (type) {

        case 'email': {
            output = ('<div id="grp-' + i + '" class="card"> <div class="card-header ">    <span id="hidefa-' + i + '" class="hide" >*</span><h3 class="card-title" id="h3input-' + i + '" >Email Address  </h3><div class="card-tools"> <button  class="btn btn-tool btn-sm" onclick="openNav(' + i + ')"> <i class="fas fa-edit"></i> </button> <button  onclick="remove_grp(' + i + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div></div><div class="card-body table-responsive "> <div class="form-group"> <input type="email" class="form-control" disabled id="InputEmailq-' + i + '" placeholder="Enter email"> </div>example@example.com</div></div><div id="mySidebar-' + i + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + i + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + i + '" onkeyup="inpute(' + i + ', this.value)" placeholder="Name"> <div class="form-check padd"> <input class="form-check-input " type="checkbox" onclick="requiredfun(' + i + ')" id="check12-' + i + '" > <label class="form-check-label" >Required</label></div></div>   </div>');

            break;
        }
        case 'fullname': {
            output = ('<div id="grp-' + i + '" class="card"> <div class="card-header "> <h3 class="card-title" id="h3input-' + i + '">Full Name</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + i + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + i + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group row"> <div class="col-6"> <input type="text" disabled class="form-control" id="InputEmail1" placeholder="First Name"> </div> <div class="col-6"> <input type="text" disabled class="form-control" id="exampleInputEmail1" placeholder="Last Name"> </div> </div> </div><div id="mySidebar-' + i + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + i + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + i + '" onkeyup="inpute(' + i + ', this.value)" placeholder="Name"> <div class="form-check padd"> <input class="form-check-input " type="checkbox" onclick="requiredfun(' + i + ')" id="check12-' + i + '" > <label class="form-check-label" >Required</label></div></div> </div> ');

            break;
        }
        case 'phone': {
            output = ('<div id="grp-' + i + '" class="card"> <div class="card-header "> <span id="hidefa-' + i + '" class="hide" >*</span> <h3 class="card-title" id="h3input-' + i + '">Phone Number</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + i + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + i + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"> <input disabled type="number" class="form-control" placeholder="(000)000-0000)"> </div> Please enter a valid phone number. </div> </div> <div id="mySidebar-' + i + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + i + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + i + '" onkeyup="inpute(' + i + ', this.value)" placeholder="Name"> <div class="form-check padd"> <input class="form-check-input " type="checkbox" onclick="requiredfun(' + i + ')" id="check12-' + i + '" > <label class="form-check-label" >Required</label></div></div> </div>');

            break;
        }

        case 'textarea': {
            output = ('<div id="grp-' + i + '" class="card"> <div class="card-header "> <span id="hidefa-' + i + '" class="hide" >*</span> <h3 class="card-title" id="h3input-' + i + '">Textarea</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + i + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + i + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"> <textarea disabled class="form-control"> </textarea> </div> </div> <div id="mySidebar-' + i + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + i + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + i + '" onkeyup="inpute(' + i + ', this.value)" placeholder="Name"> <div class="form-check padd"> <input class="form-check-input " type="checkbox" onclick="requiredfun(' + i + ')" id="check12-' + i + '" > <label class="form-check-label" >Required</label></div></div> </div>');
            break;
        }
        case 'radiobutton': {
            output = ('<div id="grp-' + i + '" class="card"> <div class="card-header "> <span id="hidefa-' + i + '" class="hide" >*</span> <h3 class="card-title" id="h3input-' + i + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + i + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + i + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group" id="option-group-' + i + '"> <div class="form-check"> <input disabled class="form-check-input" type="radio" name="radio-' + i + '"  checked=""> <label class="form-check-label">Type option 1</label> </div> <div class="form-check"> <input disabled class="form-check-input" type="radio" name="radio-' + i + '"> <label class="form-check-label">Type option 2</label> </div> <div class="form-check"> <input class="form-check-input" name="radio-' + i + '"  disabled type="radio"> <label class="form-check-label">Type option 3</label> </div> <div class="form-check"> <input name="radio-' + i + '" class="form-check-input" disabled type="radio"> <label class="form-check-label">Type option 4</label> </div> </div> </div> </div> <div id="mySidebar-' + i + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + i + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + i + '" onkeyup="inpute(' + i + ', this.value)" placeholder="Name"> <div class="form-check padd"> <input class="form-check-input " type="checkbox" onclick="requiredfun(' + i + ')" id="check12-' + i + '" > <label class="form-check-label" >Required</label></div> <label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + i + ',this.value)" id="options_' + i + '" name="options" class="textBox" onkeyup="update_option(' + i + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div> </div>');

            break;
        }
        case 'checkbox': {
            output = ('<div id="grp-' + i + '" class="card"> <div class="card-header "> <span id="hidefa-' + i + '" class="hide" >*</span> <h3 class="card-title"  id="h3input-' + i + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + i + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + i + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"  id="checkbox-group-' + i + '"> <div class="form-check"> <input class="form-check-input" type="checkbox" disabled checked=""> <label class="form-check-label">Type option 1</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" disabled > <label class="form-check-label">Type option 2</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" disabled> <label class="form-check-label">Type option 3</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" disabled> <label class="form-check-label">Type option 4</label> </div> </div> </div> </div> <div id="mySidebar-' + i + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + i + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + i + '" onkeyup="inpute(' + i + ', this.value)" placeholder="Name"> <div class="form-check padd"> <input class="form-check-input " type="checkbox" onclick="requiredfun(' + i + ')" id="check12-' + i + '" > <label class="form-check-label" >Required</label></div><label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + i + ',this.value)" id="options_' + i + '" name="options" class="textBox" onkeyup="update_checkbox(' + i + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div></div></div>');

            break;
        }
        case 'dropdown': {
            output = (' <div id="grp-' + i + '" class="card"> <div class="card-header "> <span id="hidefa-' + i + '" class="hide" >*</span> <h3 class="card-title" id="h3input-' + i + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + i + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + i + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"  > <label>Please Select</label> <select class="custom-select" id="dropdown-group-' + i + '"> <option>option 1</option> <option>option 2</option> <option>option 3</option> <option>option 4</option> <option>option 5</option> </select> </div> </div> </div> <div id="mySidebar-' + i + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + i + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + i + '" onkeyup="inpute(' + i + ', this.value)" placeholder="Name"> <div class="form-check padd"> <input class="form-check-input " type="checkbox" onclick="requiredfun(' + i + ')" id="check12-' + i + '" > <label class="form-check-label" >Required</label></div><label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + i + ',this.value)" id="options_' + i + '" name="options" class="textBox" onkeyup="update_dropdown(' + i + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div></div></div> </div>');

        }

    }
    i++;
    $(output).hide().appendTo("#element_wrapper").slideDown("slow");
    //$('#element_wrapper').slideDown("slow").append(output);


}

// for email changing value of feild
function inpute(id, value) {

    document.getElementById("h3input-" + id).innerHTML = value;



}




function requiredfun(id) {
    if (document.getElementById("check12-" + id).checked == true) {
        // document.getElementById("InputEmailq-" + id).required = true;
        document.getElementById("hidefa-" + id).style.display = "block";
    }
    else {
        // document.getElementById("InputEmailq-" + id).required = false;
        document.getElementById("hidefa-" + id).style.display = "none";
    }
}

function remove_grp(id) {
    $("#grp-" + id).slideUp(600, function () {
        $(this).remove();
    });
}
var j = 1;
function openNav(id) {
    if (j > 1) {
        return;
    }
    document.getElementById("mySidebar-" + id).style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    j++;
}

function closeNav(id) {

    document.getElementById("mySidebar-" + id).style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    j = 1;
}

// for radiobutton 
function update_option(id, val) {
    var checked = "";
    var retrunOption = "";
    var radio_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {            
            retrunOption += '<div class="form-check"> <input disabled="" class="form-check-input" type="radio" name="radio-' + id + '"  value="' + name + '"> <label class="form-check-label">' + name + '</label> </div>';
        }
    })
    $("#option-group-" + id).html(retrunOption);
}

function get_textarea_val(id, val) {
    var someArray = [];   
    var radio_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })    
    for (var i = 0; i < someArray.length; i++) {
        radio_text += someArray[i];
        radio_text += "\r\n";
    }
    $("#options_" + id).val(radio_text);
}


// for checkbox feild
function update_checkbox(id, val) {
    var checked = "";
    var retrunOption = "";
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {            
            retrunOption += '<div class="form-check"> <input disabled="" class="form-check-input" type="checkbox" name="checkbox-' + id + '"  value="' + name + '"> <label class="form-check-label">' + name + '</label> </div>';
          
        }
    })
    $("#checkbox-group-" + id).html(retrunOption);
}

function get_textarea_val(id, val) {
    var someArray = [];   
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })    
    for (var i = 0; i < someArray.length; i++) {
        checkbox_text += someArray[i];
        checkbox_text += "\r\n";
    }
    $("#options_" + id).val(checkbox_text);
}

// for dropdown feild
function update_dropdown(id, val) {
    var checked = "";
    var retrunOption = "";
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {            
            retrunOption += ' <div class="form-group"><select name="dropdown-' + id + '"  value="' + name + '"class="custom-select"> <option> ' + name + '</option></div>';
          
        }
       
    })
    $("#dropdown-group-" + id).html(retrunOption);
}

function get_textarea_val(id, val) {
    var someArray = [];   
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })    
    for (var i = 0; i < someArray.length; i++) {
        checkbox_text += someArray[i];
        checkbox_text += "\r\n";
    }
    $("#options_" + id).val(checkbox_text);
}