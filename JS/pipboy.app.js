function play()
{
    document.getElementById('r-audio').play();
    document.getElementsByClassName("preloader")[0].setAttribute("id", "preloader_1");
}

function pause()
{
    document.getElementById('r-audio').pause();
    document.getElementsByClassName("preloader")[0].setAttribute("id", "");
}



$(document).ready(function(){

    var weapons = [
        {
            "name": "44_pistol",
            "damage": 48,
            "ammo": 6,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99,
            "img": "IAMGES/44_pistol.png"
        },
        {
            "name": "10mm_pistol",
            "damage": 18,
            "ammo": 12,
            "fire_rate": 46,
            "range": 100,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53,
            "img": "IAMGES/10mm_pistol.png"
        },
        {
            "name": "assault_rifle",
            "damage": 30,
            "ammo": 35,
            "fire_rate": 40,
            "range": 135,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144,
            "img": "IAMGES/Assaultrifle.png"
        }
    ];

    var ammo = [
        {
            "name": ".308_round",
            "weapon": "Pipe bolt-action",
            "type": "Standarad",
            "weight": 0.041,
            "value": 3,
            "img": "IAMGES/.308_round.png"
        },
        {
            "name": "5.56mm",
            "weapon": "Assault rifle",
            "type": "Standarad",
            "weight": 0.035,
            "value": 2,
            "img": "IAMGES/5.56mm_round.png"
        },
        {
            "name": "shotgun_shell",
            "weapon": "Barrel shotgun",
            "type": "Standarad",
            "weight": 0.1,
            "value": 3,
            "img": "IAMGES/shotgun_shell.png"
        }
    ];

    var granade = [
        {
            "name": "fragmentation_grenade",
            "damage": 151,
            "weight": 0.5,
            "value": 50,
            "img": "IAMGES/Fragmentation_grenade.png"
        },
        {
            "name": "hallucigen_gas_grenade",
            "damage": 1,
            "weight": 1,
            "value": 35,
            "img": "IAMGES/HalluciGen_gas_grenade.png"
        },
        {
            "name": "molotov_cocktail",
            "damage": 51,
            "weight": 0.5,
            "value": 20,
            "img": "IAMGES/Molotov_cocktail.png"
        }
    ];

    var radio_msg = [
        {
            "name": "radio_msg_1",
            "display":"RADIO MESSAGE 1",
            "mp3": "MUSIC/radio1.mp3"
        },
        {
            "name": "radio_msg_2",
            "display":"RADIO MESSAGE 2",
            "mp3": "MUSIC/radio2.mp3"
        },
        {
            "name": "radio_msg_3",
            "display":"RADIO MESSAGE 3",
            "mp3": "MUSIC/radio3.mp3"
        }
    ];

    var data = [

        {
            "name": "file_1",
            "text": "Bradlee,<br>Look, I know you've doubted me since we killed that guy who came into our camp, but this is how we do things. I don't have time to try and figure out if a newcomer is trustworthy or if he's gonna slit all our throats the first night. I don't see it as a choice. I see a stranger, I kill them. It's for the good of the group."
        },
        {
            "name": "file_2",
            "text": "Amy,<br>I know it's been a while since I last wrote you. Things are going well here in Goodneighbor and I have been busier than normal with work. So busy, in fact, that I have some great news. I've saved up enough money to rent out a place here big enough for you and the kids to finally come join me! So start packing your bags! I think I can take a week off to come get you guys moved out here. We can finally be a family again!"
        },
        {
            "name": "file_3",
            "text": "Frank,<br>this letter is to show you that I know where you live. So, for the last time, WHERE IS MY FUCKING MONEY?!?<br>You know who this is."
        }

    ];

    $('.item-list a').on('click' , function(e){

        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');

        
        
        var current_item = $(e.currentTarget).attr('value');

        weapons.forEach(el => {
            if(el.name == current_item)
            {
                var container = $('.item-stats');
                var img_container = $('.item-img');

                container.find('.damage').html(el.damage);
                container.find('.ammo').html(el.ammo);
                container.find('.fire_rate').html(el.fire_rate);
                container.find('.range').html(el.range);
                container.find('.accuracy').html(el.accuracy);
                container.find('.weight').html(el.weight);
                container.find('.value').html(el.value);
                img_container.find('.gun-img img').attr('src',el.img);

            }
        });

        ammo.forEach(el => {
            if(el.name == current_item)
            {
                var container = $('.item-stats');
                var img_container = $('.item-img');

                container.find('.weapon').html(el.weapon);
                container.find('.type').html(el.type);
                container.find('.weight').html(el.weight);
                container.find('.value').html(el.value);
                img_container.find('.gun-img img').attr('src',el.img);

            }
        });

        granade.forEach(el => {
            if(el.name == current_item)
            {
                var container = $('.item-stats');
                var img_container = $('.item-img');

                container.find('.damage').html(el.damage);
                container.find('.type').html(el.type);
                container.find('.weight').html(el.weight);
                container.find('.value').html(el.value);
                img_container.find('.gun-img img').attr('src',el.img);

            }
        });

        radio_msg.forEach(el => {
            if(el.name == current_item)
            {
                var container = $('#waveform');
                $('body .preloader').attr('id','preloader_1');
                container.find('#r-audio')[0].pause();
                container.find('#r-audio').attr('src',el.mp3);
                container.find('#r-audio')[0].load();
                container.find('#r-audio')[0].play();    
            }
        });

        data.forEach(el => {
            if(el.name == current_item)
            {
                var container = $('.item-text');
                container.find('p').html(el.text);  
            }
        });

    });

    $('[href="#ammo"]').on('click', function(){

        var container = $('.item-stats');
        var img_container = $('.item-img');

        container.find('.damage').html(ammo[0].weapon);
        container.find('.type').html(ammo[0].type);
        container.find('.weight').html(ammo[0].weight);
        container.find('.value').html(ammo[0].value);
        img_container.find('.gun-img img').attr('src',ammo[0].img);
    
        $('[href="#weapons"]').removeClass('child2 child3');
        $('[href="#ammo"]').removeClass('child2 child3');
        $('[href="#granade"]').removeClass('child2 child3');

        $('[href="#weapons"]').addClass('child2');
        $('[href="#granade"]').addClass('child3');

    });

    $('[href="#granade"').on('click', function(){

        var container = $('.item-stats');
        var img_container = $('.item-img');

        container.find('.weapon').html(granade[0].weapon);
        container.find('.type').html(granade[0].type);
        container.find('.weight').html(granade[0].weight);
        container.find('.value').html(granade[0].value);
        img_container.find('.gun-img img').attr('src',granade[0].img);

        $('[href="#weapons"]').removeClass('child2 child3');
        $('[href="#ammo"]').removeClass('child2 child3');
        $('[href="#granade"]').removeClass('child2 child3');

        $('[href="#weapons"]').addClass('child3');
        $('[href="#ammo"]').addClass('child2');

    });

    $('[href="#weapons"]').on('click', function(){

        var container = $('.item-stats');
        var img_container = $('.item-img');

        container.find('.damage').html(weapons[0].damage);
        container.find('.ammo').html(weapons[0].ammo);
        container.find('.fire_rate').html(weapons[0].fire_rate);
        container.find('.range').html(weapons[0].range);
        container.find('.accuracy').html(weapons[0].accuracy);
        container.find('.weight').html(weapons[0].weight);
        container.find('.value').html(weapons[0].value);
        img_container.find('.gun-img img').attr('src',weapons[0].img);

        $('[href="#weapons"]').removeClass('child2 child3');
        $('[href="#ammo"]').removeClass('child2 child3');
        $('[href="#granade"]').removeClass('child2 child3');

        $('[href="#ammo"]').addClass('child2');
        $('[href="#granade"]').addClass('child3');

    });


    $('[href="#special"]').on('click', function(){
    
        $('[href="#status"]').removeClass('child2 child3');
        $('[href="#special"]').removeClass('child2 child3');
        $('[href="#perks"]').removeClass('child2 child3');

        $('[href="#status"]').addClass('child2');
        $('[href="#perks"]').addClass('child3');

    });

    $('[href="#perks"]').on('click', function(){

        $('[href="#status"]').removeClass('child2 child3');
        $('[href="#special"]').removeClass('child2 child3');
        $('[href="#perks"]').removeClass('child2 child3');

        $('[href="#special"]').addClass('child2');
        $('[href="#status"]').addClass('child3');

    });

    $('[href="#status"]').on('click', function(){
    
        $('[href="#status"]').removeClass('child2 child3');
        $('[href="#special"]').removeClass('child2 child3');
        $('[href="#perks"]').removeClass('child2 child3');

        $('[href="#special"]').addClass('child2');
        $('[href="#perks"]').addClass('child3');


    });
















    // $('.item-list a').hover(function(e){

    //     var current_item = $(e.currentTarget).attr('class');

    //     weapons.forEach(el => {
    //         if(el.name == current_item)
    //         {
    //             var container = $('.item-stats');
    //             container.find('.damage').html(el.damage);
    //             container.find('.ammo').html(el.ammo);
    //             container.find('.fire_rate').html(el.fire_rate);
    //             container.find('.range').html(el.range);
    //             container.find('.accuracy').html(el.accuracy);
    //             container.find('.weight').html(el.weight);
    //             container.find('.value').html(el.value);
    //         }
    //     });

    // });











});