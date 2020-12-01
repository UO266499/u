class Fotos{
    constructor(){
        this.flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        this.tag="";
    }
    cargarFotos() {
        this.tag = $('#tag').val();

        if(this.tag === ""){
            return;
        }

        $("img").remove();

        $.getJSON(this.flickrAPI, 
                {
                    tags: this.tag,
                    tagmode: "any",
                    format: "json"
                })
            .done(function(data) {

                    $.each(data.items, function(i,item ) {
                        if (i%5 === 0){
                            $("<br><img>").attr( "src", item.media.m).appendTo( "#fotos" );
                        }else{
                        $("<img>").attr( "src", item.media.m).appendTo( "#fotos" );
                        }
                        if ( i === 21 ) {
                            return false;
                            }
                    });
        }) ;
        
    }

}
var fotos = new Fotos();
