ChatInterface = {
    addUser : function(idUser, name, img, date, lastMessage){

        var html = '<li class="person" data-chat="person' + idUser + '">' +
                    '<img src="' + img + '" alt="">' +
                    '<span class="name">' + name + '</span>' +
                    '<span class="time">' + date + '</span>' +
                    '<span class="preview">' + lastMessage + '</span>' +
                    '</li>';
        $(html).appendTo('.people');

        this.activeClick();
    },
    addBoxConversation : function(idUser){
        console.log('Criando box com usuario ' + idUser);
        
        var html = 
            '<div class="chat" data-chat="person' + idUser + '" id="conversation' + idUser + '">' +
                '<div class="conversation-start">' +
                    '<span>Today, 6:48 AM</span>' +
                '</div>' +
            '</div>';
        $(html).appendTo('#messages');
        
    },
    addMessage : function(idUser, me, message){

        me = me ? "me" : "you";

        var html =  '<div class="bubble ' + me + '">' +
                        '' + message + '' +
                    '</div>';
        $(html).appendTo("#conversation" + idUser);
    },
    openConversation: function(idUser){

        if( ! $('[data-chat="person' + idUser + '"].chat').size() ){
            this.addBoxConversation(idUser);
        }

        $('.chat[data-chat=person' + idUser + ']').addClass('active-chat');
        $('.person[data-chat=person' + idUser + ']').addClass('active');

        var person = $('.person[data-chat=person' + idUser + ']');
            var personName = person.find('.name').text();
            $('.right .top .name').html(personName);
            $('.chat').removeClass('active-chat');
            $('.person').removeClass('active');
            person.addClass('active');
            $('.chat[data-chat=person' + idUser + ']').addClass('active-chat');
    },
    activeClick : function(){

        $('.person').mousedown(function(){
            if ($(this).hasClass('active')) {
                return false;
            } else {
                ChatInterface.openConversation($(this).attr('data-chat').replace('person', ''));
            }
        });
    }
}