function template(locals) {
var jade_debug = [ new jade.DebugItem( 1, "index.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title) {
jade_debug.unshift(new jade.DebugItem( 0, "layout.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "layout.jade" ));
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "layout.jade" ));
buf.push("<html>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "layout.jade" ));
jade_debug.unshift(new jade.DebugItem( 4, "layout.jade" ));
buf.push("<title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "layout.jade" ));
buf.push("<link rel=\"stylesheet\" href=\"/stylesheets/style.css\">");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "layout.jade" ));
buf.push("<body>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "layout.jade" ));
buf.push("<header id=\"banner\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "layout.jade" ));
buf.push("<h1>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("Socket IO Tutorial");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("</header>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "layout.jade" ));
jade_debug.unshift(new jade.DebugItem( 4, "index.jade" ));
buf.push("<section id=\"chatroom\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "index.jade" ));
buf.push("<div id=\"messages\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "index.jade" ));
buf.push("<input id=\"message\" type=\"text\" placeholder=\"Enter your message here\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "index.jade" ));
buf.push("<input id=\"send\" type=\"button\" value=\"Send\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</section>");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "layout.jade" ));
buf.push("<footer>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
buf.push("Hope you enjoy your stay here");
jade_debug.shift();
jade_debug.shift();
buf.push("</footer>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends layout\n\nblock content\n\tsection#chatroom\n\t\tdiv#messages\n\t\tinput#message(type='text', placeholder='Enter your message here')\n\t\tinput#send(type='button', value='Send')\n\n\n");
}
}