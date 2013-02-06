/*
http://confluence.mbusa.corpintra.net/pages/editpage.action?pageId=
http://confluence.mbusa.corpintra.net/pages/viewpageattachments.action?pageId=
http://confluence.mbusa.corpintra.net/pages/viewpreviousversions.action?pageId=
*/

// conf.attachments
if(window.location.host == "confluence.mbusa.corpintra.net"){
    var pageId = $('meta[name="ajs-page-id"]').attr('content');
    window.location.href = window.location.origin + "/pages/viewpageattachments.action?pageId=" + pageId;
}

// conf.editPage
if(window.location.host == "confluence.mbusa.corpintra.net"){
    var pageId = $('meta[name="ajs-page-id"]').attr('content');
    window.location.href = window.location.origin + "/pages/editpage.action?pageId=" + pageId;
}

// conf.prevVer
if(window.location.host == "confluence.mbusa.corpintra.net"){
    var pageId = $('meta[name="ajs-page-id"]').attr('content');
    window.location.href = window.location.origin + "/pages/viewpreviousversions.action?pageId=" + pageId;
}




/*
# POST
http://confluence.mbusa.corpintra.net/rest/tinymce/1/wikixhtmlconverter
    Request Payload
    {"wiki":"h1. Rick","entityId":"33883854","spaceKey":"MBUSACOM"}

http://confluence.mbusa.corpintra.net/pages/createpage.action?spaceKey=MBUSACOM&fromPageId=33883810
spaceKey:MBUSACOM
fromPageId:33883810

# POST
http://confluence.mbusa.corpintra.net/pages/doeditpage.action?pageId=33883810
    atl_token:8225fba2dd94af7a32f3ea59fad1a6832ebae45e
    originalVersion:1
    originalContent:
    conflictingVersion:1
    title:BuildPages
    wysiwygContent:<h1>Build</h1>
    versionComment:
    notifyWatchers:true
    confirm:Save
    viewPermissionsUsers:
    editPermissionsUsers:
    viewPermissionsGroups:
    editPermissionsGroups:
    parentPageString:New MYCO
    moveHierarchy:true
    position:
    targetId:
    draftId:0
    entityId:33883810
newSpaceKey:MBUSACOM
*/
