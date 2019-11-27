'use strict';

const SOCIAL_NETWORKS = Object.freeze({

    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    SKYPE: "SKYPE",
    GOOGLE_PLUS: "GOOGLE_PLUS",

});


const  users = [
    {   id:1,
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

    {   id:2,
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

    {   id:3,
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
    {   id:4,
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
    {   id:5,
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

];

const userListElem = document.getElementById("usersList");

appendUsersListItems(userListElem, users);



function appendUsersListItems(usersListElem, users) {
    users.forEach(
        user => {
            usersListElem.append(createUserListItemElem(user));
        }
    );
}











function createUserListItemElem (user) {

    const userListItemElem = document.createElement("li");

    userListItemElem.setAttribute("id" , user.id);

    userListItemElem.append(createUserCardElem(user));

    return userListItemElem;

    
};


function createUserCardElem (user) {

    const  userCardWrapperElem = document.createElement("div");

    userCardWrapperElem.classList.add('userCardWrapper' );
    userCardWrapperElem.classList.add('flexContainer');
    userCardWrapperElem.classList.add('flexWrap');
    userCardWrapperElem.classList.add('justifyContentEvenly');


    userCardWrapperElem.append(createUserPictureElem (user));
    userCardWrapperElem.append(createUserFullNameElem(user));
    userCardWrapperElem.append(createUserDescription(user));
    userCardWrapperElem.append(createUserRemoveButton(user));
    userCardWrapperElem.append(createUserContactsContainerElem(user));

    return userCardWrapperElem;

};


function getUserPictureElem({avatarSrc}) {
    const userPictureElem = document.createElement('img');

    userPictureElem.setAttribute('src',avatarSrc ? avatarSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMyuYBEDqYuRa-gmvIRmrutlhaSDB9pUo9hiP8mObafaeeEPQw");
    userPictureElem.setAttribute("alt" , "user picture");

    return userPictureElem;


};

function createUserPictureElem(user) {
    const userPictureContainerElem = document.createElement("div");
    userPictureContainerElem.classList.add('userPictureContainer');

    userPictureContainerElem.append( getUserPictureElem(user) );
    return userPictureContainerElem;
}

function createUserFullNameElem({name , surname}) {

    const userFullNameElem = document.createElement("h3");
    userFullNameElem.classList.add('userFullName');
    userFullNameElem.classList.add('userFullNameMargin');
    userFullNameElem.innerText = `${name} ${surname}`;

    return userFullNameElem;

};

function createUserDescription({description}) {

    const userDescriptionElem = document.createElement('p');

    userDescriptionElem.classList.add("userDescription");

    userDescriptionElem.innerText = `${description}`;

    return userDescriptionElem;

};


function createUserContactsContainerElem(user) {

    const userContactsContainerElem = document.createElement('div');
    userContactsContainerElem.classList.add("userContactsContainer");




    return userContactsContainerElem;

};

function createUserRemoveButton(user) {

    const userRemoveButton = document.createElement("div");

    userRemoveButton.classList.add("remove");
    userRemoveButton.innerText = "Remove";

    userRemoveButton.addEventListener('click' , (e) =>{
        e.stopPropagation();
        const userListItemElem = document.getElementById(user.id);
        userListItemElem.remove();
    });

    return userRemoveButton;

    
}



