/*!CK:591365748!*//*1441681556,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["unlW5"]); }

__d('AdsCFPlaceEditor.react',['ActionList.react','AdsCallToActionUtils','AdsCFGetDirectionsStrings','AdsLabeledField.react','BoostedComponentConstants','BootloadedComponent.react','JSResource','Link.react','React','XUICard.react','XUIDialog.react','XUIError.react','XUIGrayText.react','XUISpinner.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();'use strict';var x=p.PropTypes,y=p.createClass({displayName:'LoadingDialog',render:function(){return (p.createElement(r,{onToggle:this.props.onToggle,shown:true,width:l.LOADING_DIALOG_WIDTH},p.createElement(q,null,p.createElement('div',{className:"_238c"},p.createElement(u,{background:'light',size:'large'})))));}}),z=p.createClass({displayName:'AdsCFPlaceEditor',propTypes:{ctaLink:x.string,onCTALinkChange:x.func.isRequired},getInitialState:function(){return {dialogShown:false};},render:function(){return (p.createElement('div',null,p.createElement('div',{className:"_3-8o"},j.CALL_TO_ACTION_ADDRESS_INSTRUCTION),p.createElement(k,{label:j.CALL_TO_ACTION_ADDRESS_LABEL,labelSize:'small',helpText:j.CALL_TO_ACTION_ADDRESS_TOOLTIP}),p.createElement(h,null,this._renderLabel(),p.createElement(o,{onClick:this._onToggle.bind(this,true)},j.CALL_TO_ACTION_ADDRESS_EDIT)),this._renderDialog()));},_renderLabel:function(){var aa=i.parseGeoLink(this.props.ctaLink||'');if(aa)return (p.createElement(t,{shade:'dark'},aa.toString()));return (p.createElement(s,{xuiError:j.CALL_TO_ACTION_ADDRESS_INVALID},p.createElement('span',null,w._("None"))));},_renderDialog:function(){if(!this.state.dialogShown)return null;return (p.createElement(m,{bootloadLoader:n('AdsPagePlaceDialogContainer.react'),bootloadPlaceholder:p.createElement(y,{onToggle:this._onToggle}),enableSaveToPage:false,onSubmit:this._onSubmit,onToggle:this._onToggle,shown:true}));},_onSubmit:function(aa){this.setState({dialogShown:false});if(aa.place)this.props.onCTALinkChange(i.makeGeoLink(aa.place));},_onToggle:function(aa){this.setState({dialogShown:aa});}});f.exports=z;},null);