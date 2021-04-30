//text array with lorem ipsums
const paragraphs = [
    'At lectus urna duis convallis convallis tellus id. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet purus gravida quis blandit turpis cursus in. Turpis massa tincidunt dui ut ornare lectus sit amet. Odio tempor orci dapibus ultrices in. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Mauris in aliquam sem fringilla ut morbi. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Nunc sed id semper risus. Erat velit scelerisque in dictum non. Etiam tempor orci eu lobortis elementum nibh tellus molestie.',
    'Dignissim convallis aenean et tortor at risus viverra adipiscing at. Mus mauris vitae ultricies leo integer. At volutpat diam ut venenatis. Suspendisse faucibus interdum posuere lorem ipsum. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Quam pellentesque nec nam aliquam sem et tortor consequat id. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Neque vitae tempus quam pellentesque nec nam aliquam sem. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Et malesuada fames ac turpis egestas sed tempus urna. Tortor at auctor urna nunc id cursus. Enim ut sem viverra aliquet. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt. Ut ornare lectus sit amet est placerat in egestas erat. Orci sagittis eu volutpat odio. Scelerisque fermentum dui faucibus in ornare. Integer quis auctor elit sed vulputate mi. Non diam phasellus vestibulum lorem. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. In mollis nunc sed id semper risus in. Nullam ac tortor vitae purus faucibus ornare.',
    'Pellentesque nec nam aliquam sem et. Erat nam at lectus urna duis convallis convallis. Congue mauris rhoncus aenean vel elit. Diam maecenas sed enim ut sem viverra aliquet. Tortor at auctor urna nunc id. Ut enim blandit volutpat maecenas volutpat. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Mattis nunc sed blandit libero volutpat sed cras. Hendrerit dolor magna eget est lorem ipsum dolor sit. Interdum velit laoreet id donec ultrices tincidunt arcu.',
    'Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Sed vulputate odio ut enim. Facilisis magna etiam tempor orci eu. Velit laoreet id donec ultrices tincidunt arcu. Dui vivamus arcu felis bibendum ut tristique et. Dui faucibus in ornare quam viverra orci sagittis eu. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Elit ut aliquam purus sit amet luctus. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Rutrum tellus pellentesque eu tincidunt. Mauris nunc congue nisi vitae suscipit tellus mauris. Enim tortor at auctor urna nunc id cursus metus aliquam. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Nunc lobortis mattis aliquam faucibus. Pulvinar elementum integer enim neque volutpat. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Gravida arcu ac tortor dignissim. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Id porta nibh venenatis cras.',
    'Erat pellentesque adipiscing commodo elit at imperdiet. Orci ac auctor augue mauris. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Varius vel pharetra vel turpis nunc. Morbi tristique senectus et netus et malesuada fames. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Risus pretium quam vulputate dignissim. Est ultricies integer quis auctor elit sed vulputate mi sit. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Nisi porta lorem mollis aliquam ut porttitor. Blandit turpis cursus in hac habitasse. Massa massa ultricies mi quis hendrerit dolor magna. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Egestas congue quisque egestas diam in arcu cursus euismod. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Curabitur gravida arcu ac tortor. Nibh venenatis cras sed felis eget velit aliquet. Consequat interdum varius sit amet mattis vulputate. Vulputate enim nulla aliquet porttitor lacus luctus. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.',
    'Quam vulputate dignissim suspendisse in est ante in nibh mauris. Feugiat in fermentum posuere urna nec tincidunt praesent. Mauris vitae ultricies leo integer malesuada nunc vel. Dolor morbi non arcu risus. Semper eget duis at tellus at urna. Fringilla ut morbi tincidunt augue. Nunc eget lorem dolor sed viverra ipsum. Tortor condimentum lacinia quis vel. Netus et malesuada fames ac turpis egestas maecenas. Morbi non arcu risus quis varius quam quisque id. Felis donec et odio pellentesque diam volutpat commodo sed egestas.',
    'Massa tempor nec feugiat nisl pretium fusce id. In hendrerit gravida rutrum quisque non tellus orci ac. Non curabitur gravida arcu ac tortor dignissim convallis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Dolor sit amet consectetur adipiscing elit. Augue lacus viverra vitae congue eu consequat. Vitae nunc sed velit dignissim sodales ut eu sem. Quis auctor elit sed vulputate mi sit. At urna condimentum mattis pellentesque id nibh tortor id. Consequat nisl vel pretium lectus quam id leo in vitae. Tincidunt augue interdum velit euismod. Amet mauris commodo quis imperdiet massa tincidunt. Sit amet porttitor eget dolor morbi non arcu risus. Pellentesque id nibh tortor id aliquet lectus proin. Eu sem integer vitae justo eget magna fermentum iaculis. In metus vulputate eu scelerisque felis imperdiet proin. Vitae ultricies leo integer malesuada. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt.',
    'At imperdiet dui accumsan sit amet. Non arcu risus quis varius quam. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Ullamcorper morbi tincidunt ornare massa eget egestas. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Lectus quam id leo in vitae turpis massa sed. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Odio morbi quis commodo odio aenean sed adipiscing diam. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Viverra vitae congue eu consequat ac felis donec. Orci dapibus ultrices in iaculis nunc.',
    'Urna condimentum mattis pellentesque id. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Urna nunc id cursus metus aliquam eleifend mi. Bibendum est ultricies integer quis auctor. Risus ultricies tristique nulla aliquet enim tortor. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Dolor purus non enim praesent elementum. Purus sit amet volutpat consequat mauris nunc congue nisi. Proin sagittis nisl rhoncus mattis. Adipiscing commodo elit at imperdiet dui accumsan. Phasellus vestibulum lorem sed risus ultricies. Facilisi morbi tempus iaculis urna id volutpat. Eu mi bibendum neque egestas congue quisque. A lacus vestibulum sed arcu non odio euismod lacinia.'
]


window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.lorem__form'),
          input = document.querySelector('.lorem__form-input'),
          article = document.querySelector('.lorem__text');

    //handle submit button
    form.addEventListener('submit', (e) => {
        //prevent default form submit
        e.preventDefault();
        let value = input.value;
        //check if user not entered input, then we add 1 to value by default
        if (!input.value) {
            value  = 1;
            input.value = "1";
        } else {
             //transform input value from string to number
            value = Number(input.value);
        }
       
        //prevent from continuosly add paragraphs 
        //by clearing article every time we submit
        article.innerHTML = ''
        
        for (let i = 0; i < value; i++) {
            //generate random number from 0 to 10, to take random paragraph from our array
            const random = Math.floor(Math.random() * (paragraphs.length));
            console.log(random);
            //continue to add random paragraphs to article
            article.innerHTML += `<p class="paragraph">${paragraphs[random]}</p>`
        }
    })
})