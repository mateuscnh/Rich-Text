let cont = 0;

function RichText() {
    let tools = document.getElementById('tools');
    let richText = document.getElementById('richTextField');
    richTextField.document.designMode = "on";

    let newSelect;
    let newOption;
    let newButton;

    createSelectFonts();
    createSelectFontSize();
    createButtonIcons();

    function createSelectFonts() {
        let fontNames = ['Arial', 'Courier', 'Tahoma', 'Times New Roman', 'Verdana'];
        newSelect = document.createElement('select');
        newSelect.setAttribute('onchange', "execCmd('fontName', this.value)");
        for (let i = 0; i < fontNames.length; i++) {
            newOption = document.createElement('option');
            newOption.setAttribute('value', fontNames[i]);
            newOption.setAttribute('style', "font-family: '" + fontNames[i] + "'");
            newOption.innerHTML = fontNames[i];
            newSelect.appendChild(newOption);
        }
        tools.appendChild(newSelect);
    }

    function createSelectFontSize() {
        newSelect = document.createElement('select');
        newSelect.setAttribute('onchange', "execCmd('fontSize', this.value)");
        for (let i = 1; i < 8; i++) {
            newOption = document.createElement('option');
            newOption.setAttribute('value', i);
            newOption.innerHTML = i;
            newSelect.appendChild(newOption);
        }
        tools.appendChild(newSelect);
    }

    function createButtonIcons() {
        let btnIcon = ['bold', 'italic', 'underline', 'align-right', 'align-justify', 'align-left', 'list-ul', 'list-ol'];
        for (let i = 0; i < btnIcon.length; i++) {
            if (i == 0 || i == 3 || i == 6) {
                createButtonPartition()
            }
            newButton = document.createElement('button');
            newButton.setAttribute('class', 'btn');
            createOnClickButtons(btnIcon[i]);
            newButton.innerHTML = "<i class='fas fa-" + btnIcon[i] + "'></i>";
            tools.appendChild(newButton);
            if (i == 7) {
                createButtonPartition()
            }
        }
    }

    function createButtonPartition() {
        newButton = document.createElement('button');
        newButton.setAttribute('class', 'partition');
        newButton.innerHTML = "<i class='fas fa-grip-lines-vertical'></i>";
        tools.appendChild(newButton);
    }

 
    function createOnClickButtons(btnCommand) {
        if (btnCommand === 'align-right') btnCommand = 'justifyRight';
        else if (btnCommand === 'align-justify') btnCommand = 'justifyCenter';
        else if (btnCommand === 'align-left') btnCommand = 'justifyLeft';
        else if (btnCommand === 'list-ul') btnCommand = 'insertUnorderedList';
        else if (btnCommand === 'list-ol') btnCommand = 'insertOrderedList';

        newButton.setAttribute('onclick', "execCmd('" + btnCommand + "')");
    }

    newButton = document.createElement('button');
    newButton.setAttribute('class', 'btn');
    newButton.innerHTML = "<i class='fas fa-images'></i>";
    newButton.setAttribute('onclick', "execCmd('insertImage', prompt('Insira o URL da imagem'))");
    tools.appendChild(newButton);
}

function execCmd(command, arg) {
    richTextField.document.execCommand(command, false, arg);
}

function themeDark() {
    if (cont % 2 === 0) {
        document.body.style.background = '#222';
        execCmd('selectAll');
        richTextField.document.execCommand('hiliteColor', false, '#333');
        execCmd('foreColor', '#fff');
        document.getElementById('richTextField').style.background = '#333';
        document.getElementById('richTextField').style.sele = '#333';
    } else {
        document.body.style.background = '#fff';
        execCmd('selectAll');
        richTextField.document.execCommand('hiliteColor', false, '#fff');
        execCmd('foreColor', '#000');
        document.getElementById('richTextField').style.background = '#fff';
    }
    cont++;
}


