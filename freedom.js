var textelements = $('p, h1, h2, h3, h4, ul, li');
textelements.each(function() {
var text = $(this).text().split('');
for ( var i = 0; i < text.length; i+=3 ) {
    text[i] = '<span class="red">'+text[i]+'</span>';} 
for ( var i = 1; i < text.length; i+=3 ) {
    text[i] = '<span class="white">'+text[i]+'</span>';}     
for ( var i = 2; i < text.length; i+=3 ) {
    text[i] = '<span class="blue">'+text[i]+'</span>';}        
$(this).html(text.join(''));
});