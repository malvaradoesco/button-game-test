

messages = [];
current_message = -1;
current_char = 0;
draw_message = "";

char_speed = 0.5;
input_key = vk_space;

gui_w = dispaly_get_gui_width();
gui_h = display_get_gui_height();

if (current_message < 0) exit;
var _str = messages[current_message].msg;
if (current_char < string_length(_str))
{
    current_char += char_speed * (1 + real(keyboard_check(input_key)));
    draw_message = string_copy(_str, 0, current_char);

}
else if (keyboard_check_pressed(input_key))
{
    current_message++;
    if(current_message >= array_length(messages))
    {
        instance_destroy();
    }
    else
    {
        current_char = 0;
    }
}

var _dx = 0;
var _dy = gui_h * 0.7;
var _boxw = gui_w;
var _boxh = gui_h - _dy;

draw_sprite_stretched(spr_box, 0, _dx, _dy, _boxw, _boxh);

_dx += 16;
_dy += 16;

draw_set_font(Font1);

var _name = messages[current_message].name;
draw_text(_dx, _dy, _name);

_dy += 40;

draw_text_ext(_dx, _dy, draw_message, -1, _boxw - _dx * 2);


function create_dialog(_messages){
    if (instance_exists(obj_dialog)) return;

    var _inst = instance_create_depth(0, 0, 0, obj_dialog);
    _inst.messages = _messages;
    _inst.current_message = 0;
}

if (keyboard_check_pressed(vk_space))
{
    create_dialog([
        {
            name:"Mother",
            msg: "Ribbit"
        }
    ])
}