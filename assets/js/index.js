
'use strick';

const SOCIAL_NETWORKS = Object.freeze({

    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    SKYPE: "SKYPE",
    GOOGLE_PLUS: "GOOGLE_PLUS",

});


const  users = [
    {
        name:"Dart",
        surname:"Waider",
        description: "extemely large text ...",
        avatarSrc: "http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png",
        contacts : [
            {
                name:SOCIAL_NETWORKS.FACEBOOK,
                href:'#'
            },
            {
                name:SOCIAL_NETWORKS.TWITTER,
                href:'#'
            },
            {
                name:SOCIAL_NETWORKS.SKYPE,
                href:'#'
            },

            ]

    },

    {
        name:"Dart",
        surname:"Waider",
        description: "extemely large text ...",
        avatarSrc: "http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png",
        contacts : [
            {
                name:SOCIAL_NETWORKS.FACEBOOK,
                href:'#'
            },
            {
                name:SOCIAL_NETWORKS.TWITTER,
                href:'#'
            },
            {
                name:SOCIAL_NETWORKS.SKYPE,
                href:'#'
            },

        ]

    },

    {
        name:"Dart",
        surname:"Waider",
        description: "extemely large text ...",
        avatarSrc: "http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png",
        contacts : [
            {
                name:SOCIAL_NETWORKS.FACEBOOK,
                href:'#'
            },
            {
                name:SOCIAL_NETWORKS.TWITTER,
                href:'#'
            },
            {
                name:SOCIAL_NETWORKS.SKYPE,
                href:'#'
            },

        ]

    }

];



function createUserListItemElem (user) {

    const userListItemElem = document.createElement("li");

    userListItemElem.append(createUserListItemElem(user));
    return userListItemElem;

    
};


function createUserCardElem(user) {

    const  userCardWrapperElem = document.createElement("div");

    userCardWrapperElem.classList.add('userCardWrapper');
    userCardWrapperElem.classList.add('flexConteiner');
    userCardWrapperElem.classList.add('flexWrap');
    userCardWrapperElem.classList.add('justifyContaintEvently');


    userCardWrapperElem.append(createUserPictureElemnt(user));




};


function createUserPictureElem(user) {

    const userPictureContainerElem = document.createElement("div");
    userPictureContainerElem.classList.add('userPictureConteiner');

    userPictureContainerElem.append( getUserPictureElem(user) );

    return userPictureContainerElem;




}


function getUserPictureElem({avatarSrc}) {
    const userPictureElem = document.createElement('img');

    userPictureElem.setAttribute('src',avatarSrc ? avatarSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMyuYBEDqYuRa-gmvIRmrutlhaSDB9pUo9hiP8mObafaeeEPQw");
    userPictureElem.setAttribute("alt" , "user picture");

    return userPictureElem;


};


function createUserFullNameElem([{name , surname}) {

    const userFullName = doc

};