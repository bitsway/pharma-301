$.afui.useOSThemes=false;
    $.afui.loadDefaultHash=true;
    $.afui.autoLaunch=false;

    //check search
    var search=document.location.search.toLowerCase().replace("?","");
    if(search.length>0)
    {

       $.afui.useOSThemes=true;
        if(search=="win8")
            $.os.ie=true;
        else if(search=="firefox")
            $.os.fennec="true"
        $.afui.ready(function(){
            $(document.body).get(0).className=(search);
        });
    }

    $(document).ready(function(){
        $.afui.launch();
		
		$("#wait_image_login").hide();
		$('#menu_lv').empty()
		$('#menu_lv').append(localStorage.menu_list);
		
		$("#wait_image_login").hide();
		$("#loginButton").show();
		
		$("#wait_image_schedule_date").hide();		
		$("#btn_schedule_date").show();
		
		$("#wait_image_schedule_ret").hide();		
		$("#btn_schedule_ret").show();
		
		$("#wait_image_unschedule_market").hide();		
		$("#btn_unschedule_market").show();
		
		$("#wait_image_ret").hide();	
		$("#wait_image_unschedule_market_ret").hide();		
		$("#btn_unschedule_market_ret").show();
		
		$("#wait_image_visit_submit").hide();		
		$("#visit_submit").show();
		
		$("#wait_image_delivery_submit").hide();		
		$("#btn_delivery_submit").show();
		
		$("#wait_image_delivery_dealer").hide();		
		$("#btn_delivery_dealer").show();
		
		$("#wait_image_profile_market").hide();		
		$("#btn_profile_market").show();
		
		$("#wait_image_profile_market_ret").hide();		
		$("#btn_profile_market_ret").show();
		
		$("#wait_image_profile_update").hide();		
		$("#btn_profile_update").show();
		
		$("#wait_image_visit_plan_market").hide();		
		$("#btn_visit_plan_market").show();
		
		$("#wait_image_visit_plan_submit").hide();		
		$("#btn_visit_plan_submit").show();
		
		$("#wait_image_visit_report").hide();
		
		$("#wait_image_complain_submit").hide();
		$("#btn_complain_submit").show();	
		
		$("#wait_image_region_report").hide();
		
		$("#btn_location_doc").show();
		$("#visit_submit_doc").hide();	
		$("#checkLocation_doc").html('');
		$("#wait_image_visit_submit_doc").hide('');
		
		$("#order_load").hide();
		
		
		getLocationInfo_ready();
		first_page();
		$("#se_mpo").val(localStorage.user_id);

		//alert (localStorage.unschedule_market_cmb_id)
		$('#market_combo_id_lv').empty();
		$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
		$('#item_combo_id_lv').empty()
		$('#item_combo_id_lv').append(localStorage.product_tbl_str);
		
		$('#campaign_combo_id_lv').empty();
		$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
		$('#sample_combo_id_lv').empty();
		$('#sample_combo_id_lv').append(localStorage.product_tbl_str_doc_sample);
		$('#gift_combo_id_lv').empty();
		$('#gift_combo_id_lv').append(localStorage.gift_tbl_doc);
		//alert (localStorage.product_tbl_doc_sample)
		$('#ppm_combo_id_lv').empty();
		$('#ppm_combo_id_lv').append(localStorage.ppm_tbl_doc);
		

		$('#visit_submit').hide();
		
		
		
		
		if ((localStorage.doctor_flag==1) && (localStorage.visit_page=="YES")){
		
			campaign_show_1=localStorage.campaign_show_1;
			gift_show_1=localStorage.gift_show_1;
			sample_show_1=localStorage.sample_show_1;
			
			ppm_show_1=localStorage.ppm_show_1;
			
			//alert (localStorage.sample_show_1);
			
			
			if  ((campaign_show_1.length > 0 ) & (campaign_show_1.indexOf('undefined')==-1 )){
				$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+"</br>");
			}
			if  ((gift_show_1.length > 0 ) & (gift_show_1.indexOf('undefined')==-1 )){
				$("#doc_gift").html("</br>"+localStorage.gift_show_1+"</br>");	
			}
			if  ((ppm_show_1.length > 0 ) & (ppm_show_1.indexOf('undefined')==-1 )){
				$("#doc_ppm").html("</br>"+localStorage.ppm_show_1+"</br>");	
			}
			if  ((sample_show_1.length > 0 ) & (sample_show_1.indexOf('undefined')==-1 )){
				$("#doc_sample").html("</br>"+localStorage.sample_show_1+"</br>");
			}
	
			$(".market").html(localStorage.visit_market_show);
			$(".visit_client").html(localStorage.visit_client_show);
		
			//var url = "#page_visit_doc";
	//		$.mobile.navigate(url);	
		}
		
		//================== Redirect to visit page
		if ((localStorage.doctor_flag==0) &&(localStorage.visit_page=="YES")){
			$("#sch_date").val(localStorage.scheduled_date);
			
			$(".market").html(localStorage.visit_market_show);
			$(".visit_distributor").html(localStorage.visit_distributor_nameid);
			$(".visit_type").html(localStorage.visit_type);								
			$(".s_date").html(localStorage.scheduled_date);
			$(".visit_client").html(localStorage.visit_client_show);
			mobile_off_flag=1;
			
			//var url = "#page_visit ";
	//		$.mobile.navigate(url);	
			getOrder_load();	
		}
		
		if (localStorage.visit_location_flag!='YES'){
				//alert (localStorage.visit_location);
				$("#visit_location").hide();
				$("#visit_submit").show();
				
		}
		if (localStorage.delivery_date_flag!='YES'){
			$("#delivery_date_div").hide();
		}
		if (localStorage.collection_date_flag!='YES'){
			$("#collection_date_div").hide();
		}
		if (localStorage.payment_date_flag!='YES'){
			$("#payment_date_div").hide();
		}
		if (localStorage.payment_mode_flag!='YES'){
			$("#payment_mode_div").hide();
		}
		
		//reports();
	
	
	$('#order_report_button').empty();
	$('#order_report_button').append(localStorage.report_button).trigger('create');
	
	$('#doctor_report_button').empty();
	$('#doctor_report_button').append(localStorage.doctor_report_button).trigger('create');
	
	$('#prescription_report_button').empty();
	$('#prescription_report_button').append(localStorage.prescription_report_button).trigger('create');
	
	//set doctor
	$('#doctor_campaign_list_tbl').html(localStorage.product_tbl_str_doc_campaign);
	$("#doctor_sample_list_tbl").html(localStorage.product_tbl_str_doc_sample);
	$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
	$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
		
	$("#product_total_cart").html(localStorage.show_total);
	$("#product_total_last").html(localStorage.show_total);	
		
		
		
    });

    //if($.os.ios)
        $.afui.animateHeader(true);
		getLocation()









var mobile_off_flag=0;

function homePage() {
	
	$.afui.loadContent("#pageHome",true,true,'right');
}
function page_market() {
	
	$.afui.loadContent("#page_market",true,true,'right');
}
function page_market_ret() {
	
	$.afui.loadContent("#page_market_ret",true,true,'right');
}
function page_visit() {
	$("#order_load").hide();
	$.afui.loadContent("#page_visit",true,true,'right');
}





function reload_function() {
	location.reload();
}
function getLocationInfo() { //location
	$("#wait_image_visit_submit").show()
	$("#visit_submit").hide();
	$("#btn_location").hide();
	
	
	
	
	$("#wait_image_visit_submit_doc").show()
	$("#visit_submit_doc").hide();
	$("#btn_location_doc").hide();
	$("#checkLocation_doc").html('');
	
	
	
	$("#errorChkVSubmit").html('');
	$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	var options = { enableHighAccuracy: true, timeout:15000};
	//var options = { enableHighAccuracy: true, timeout:1000};
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
}

function onSuccess(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	$("#lat_p").val(position.coords.latitude);
	$("#long_p").val(position.coords.longitude);
	
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude
	
	
	
	
	
	
	$("#checkLocation").html('Location Confirmed'); 
	$("#checkLocationProfileUpdate").html('Location Confirmed');
		
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#btn_location_doc").hide();
	
	codeLatLng(position.coords.latitude, position.coords.longitude)
	localStorage.location_error=''
	
	
	
	
	
} 
function onError(error) {
	
	//alert("Error while retrieving current position. Error code: " + error.code + ",Message: " + error.message);;
	
	//alert(error.code);;
	localStorage.location_error=error.code
	
	
	
	//alert (localStorage.location_error)
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);

	if (localStorage.location_error==2){
		$("#checkLocation").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
		//$("#checkLocationProfileUpdate").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
		$("#checkLocation_doc").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');

	}else{
		$("#checkLocation").html('Location can not be found. Last Location will be submitted.');
		$("#checkLocationProfileUpdate").html('Location can not be found. Last Location will be submitted.');
		$("#checkLocation_doc").html('Location can not be found. Last Location will be submitted.');
	}
	
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#btn_location").hide();
	
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#btn_location_doc").hide();
}


//==Reload Location
function getLocationInfo_ready() { //location
	$("#wait_image_visit_submit").show()
	$("#visit_submit").show();
	$("#btn_location").hide();
	
	$("#checkLocation").html(''); 
	$("#checkLocationProfileUpdate").html('');
	
	
	$("#wait_image_visit_submit_doc").show()
	$("#visit_submit_doc").show();
	$("#btn_location_doc").hide();
	
	$("#checkLocation_doc").html('');
	
	var options = { enableHighAccuracy: true, timeout:30000};
	navigator.geolocation.getCurrentPosition(onSuccess_ready, onError_ready, options);
}

// onSuccess Geolocationshom

function onSuccess_ready(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	$("#lat_p").val(position.coords.latitude);
	$("#long_p").val(position.coords.longitude);
	
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude
	
	
	
	$("#errorChkVSubmit").html('');
	$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	
	//$("#checkLocation").html('Location Confirmed'); 
	//$("#checkLocationProfileUpdate").html('Location Confirmed');
		
	
	$("#wait_image_visit_submit").hide();
	//$("#visit_submit").show();
	//$("#btn_location").hide();
	
	//$("#checkLocation_doc").html('Location Confirmed'); 

	//$("#wait_image_visit_submit_doc").hide();
	//$("#visit_submit_doc").show();
	//$("#btn_location_doc").hide();
	
	//codeLatLng(position.coords.latitude, position.coords.longitude)
	
	
} 
function onError_ready(error) {
	
	//alert (error);
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	//localStorage.location_detail='';
	
	//$("#checkLocation").html('Location not found. Last Location will submit.');
	//$("#checkLocationProfileUpdate").html('Location not found. Last Location will submit.');
	
	
	
	$("#wait_image_visit_submit").hide();
	//$("#visit_submit").show();
	//$("#btn_location").hide();
	
	//$("#checkLocation_doc").html('Location not found. Last Location will submit.');
	//$("#wait_image_visit_submit_doc").hide();
	//$("#visit_submit_doc").show();
	//$("#btn_location_doc").hide();
}






//========================================
function codeLatLng(lat, lng) {
	
    var geocoder;
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(lat, lng);
	//alert (lat)
	geocoder.geocode(
		{'latLng': latlng}, 
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
					if (results[0]) {
						
						var add= results[0].formatted_address ;
						var add1= results[1].formatted_address ;
						var add2= results[2].formatted_address ;
						//alert (add2)
						//alert (add1)
						var  value=add.split(",");
						var  value1=add1.split(",");
						var  value2=add2.split(",");
						
						state=value2[1];
						city=value2[0];
						area=value1[0];
						road=value[0];
						localStorage.location_detail=state+','+city+','+area+','+road;
						//alert (localStorage.location_detail)
					}
					else  {
						alert("address not found");
					}
			}
			 else {
				alert("Geocoder failed due to: " + status);
			}
		}
	);
  }

//====================================
//set confirm page

function set_confirm_page(){
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#btn_location").show();
	
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	$("#checkLocation").html('');
	
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").hide();
	$("#btn_location_doc").show();
	$("#checkLocation_doc").html('');
	
	
}
// -------------- If Not synced, Show login
function first_page(){
	if ((localStorage.synced!='YES')){
		$.afui.loadContent("#login",true,true,'right');	
	}
	else{	
		$.afui.loadContent("#pageHome",true,true,'right');
	}
}

// -------------- visit page show if mobile off 
function cancelVisitPage(){
	localStorage.visit_page=""
	mobile_off_flag=0;
	
	localStorage.visitMarketStr=""
	localStorage.visit_distributor_nameid=""
	localStorage.visit_type=""
	localStorage.scheduled_date="" 
	localStorage.visit_client=""
	
	localStorage.productListStr='';
	localStorage.product_tbl_cart='';
	cancel_cart();
	
	
	//$("#btn_visit_submit").hide();
	
	
//	============Doctor=========
	localStorage.campaign_show_1="";
	localStorage.gift_show_1="";
	localStorage.ppm_show_1=""
	localStorage.sample_show_1="";
	
	
	
	localStorage.productGiftStr='';
	localStorage.campaign_doc_str=''
	localStorage.productSampleStr=''
	localStorage.productppmStr='';

	$(".visit_client").html('');
	
	
	set_doc_all();
	
	$.afui.loadContent("#pageHome",true,true,'right');


	
}
function set_doc_all(){
	// $('#doctor_campaign_list_tbl :checkbox').each(function () {    
//		 $(this).attr('checked', false);  //This will uncheck the current checkbox            
//	 });
	 $('#doc_campaign').html('');
	$('#doc_gift').html('');
	$('#doc_ppm').html('');
	$('#doc_sample').html('');
	
	 
	 $(".docCampaign").attr('checked', false);
	 $(".docSample").val('');
	 $(".docGift").val('');
	 $(".docPpm").val('');
	 
	 $('#doc_feedback').val('');
	 
	 $('#campaign_combo_id').val('');
	 $('#gift_combo_id').val('');
	 $('#ppm_combo_id').val('');
	 $('#sample_combo_id').val('');
	 
	 
	 
	$("#btn_location_doc").show();
	$("#visit_submit_doc").hide();	
	$("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide('');
	 
}
//================= Clear authorization
function clear_autho(){	
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	
		localStorage.synced=''
		
		localStorage.client_string=''	
		localStorage.visit_client=''
		localStorage.client_string=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		
		localStorage.visit_page=""
		
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		
		localStorage.productppmStr='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		localStorage.productOrder_change=''
		
		
		localStorage.report_button='';	
		localStorage.market_client=''
		localStorage.menu='';
		localStorage.ppm_string='';
		localStorage.user_type='';
		localStorage.market_doctor='';
		
		
		localStorage.saved_data_submit = 0;
		localStorage.visit_save = '';
		localStorage.saved_data_show = '';
		
		localStorage.payment_mode_get='';
		
		localStorage.location_detail=''
		$.afui.loadContent("#login",true,true,'right');

	};
}
function get_login() {
	$.afui.loadContent("#login",true,true,'right');

	}

function check_user() {
	
	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	
	//Main

	
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/mrepbiopharma/syncmobile_ofline_ppm_report_test_live_20150502/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	
	//var apipath_base_photo_dm='http://e2.businesssolutionapps.com/mrepbiopharma/syncmobile_ofline_ppm_report_test/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
  var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_live_20150502/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
	
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	var base_url='';
	var photo_url='';
	
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		

		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	

		
		localStorage.client_string=''	
		localStorage.visit_client=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		localStorage.visit_page=""
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		localStorage.productppmtStr='';
		
		
		localStorage.market_client=''
		
		
		localStorage.menu='';
													
		localStorage.ppm_string='';
		
		localStorage.user_type='';
		localStorage.market_doctor='';
		localStorage.report_button='';
		localStorage.doctorreport_button='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		
		
		
		localStorage.visit_save=''; //Saved visit data
		localStorage.save_visit_limit=0;
		localStorage.saved_data_submit = 0;
		
		
		localStorage.delivery_date='';
		localStorage.payment_date='';
		localStorage.payment_mode='';
		
		localStorage.payment_mode_get='';
		
		localStorage.visit_location_flag='';
													
		localStorage.delivery_date_flag='';
		localStorage.payment_date_flag='';
		localStorage.payment_mode_flag='';
		localStorage.collection_date_flag='';
		
		localStorage.doctor_report_button='';
		localStorage.prescription_report_button='';
		localStorage.location_detail=''
		//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#wait_image_login").show();
		
		$.post(apipath_base_photo_dm,{ },
    	function(data, status){
			if (status=='success'){
				localStorage.base_url='';
				
				var dtaStr=data.replace('<start>','').replace('<end>','')
				var resultArray = dtaStr.split('<fd>');		
					if(resultArray.length==3){
						base_url=resultArray[0];
						photo_url=resultArray[1];
						photo_submit_url=resultArray[2];
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#error_login").html('Base URL not available');	
						}
						else{
//							--------------------------
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
	//$("#error_login").html(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);					
	$.post(localStorage.base_url+'check_user_pharma?',{cid: localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode},
    						 
								
								 function(data, status){
									 if (status!='success'){
										$("#wait_image_login").hide();
										$("#loginButton").show();
										$("#error_login").html('Sorry Network not available');
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#wait_image_login").hide();
											$("#loginButton").show();								
											$("#error_login").html(resultArray[1]);
										}
										else if (resultArray[0]=='SUCCESS'){
													localStorage.synccode=resultArray[1];
													localStorage.marketListStr=resultArray[2];
													//alert (resultArray[2]);
													localStorage.productListStr=resultArray[3];
													localStorage.marchandizingItem=resultArray[4];
													localStorage.distributorListStr=resultArray[5];								
													localStorage.brand_list_string=resultArray[6];
													
													localStorage.complain_type_string=resultArray[7];
													localStorage.complain_from_string=resultArray[8];
													localStorage.task_type_string=resultArray[9];
													region_string=resultArray[10];
													localStorage.gift_string=resultArray[11];
													localStorage.clientCat_string=resultArray[12];
													
													localStorage.market_client=resultArray[13];
													
													localStorage.menu=resultArray[14];
													
													localStorage.ppm_string=resultArray[15];
													
													localStorage.user_type=resultArray[16];
													
													localStorage.market_doctor=resultArray[17];
													
													localStorage.save_visit_limit=resultArray[18];
													//alert (localStorage.save_visit_limit)
													localStorage.visit_location_flag=resultArray[19];
													
													localStorage.delivery_date_flag=resultArray[20];
													localStorage.payment_date_flag=resultArray[21];
													localStorage.payment_mode_flag=resultArray[22];
													localStorage.collection_date_flag=resultArray[23];
													
													//	==============Set menu start================\
												
												var menuList=localStorage.menu.split('<rd>');
												var menuLength=menuList.length;
												var menu_str=' '
												var order_report="No"
												var doctor_report="No"
												var prescription_report="No"
												for (var j=0; j < menuLength; j++){
													var single_menu_list = menuList[j].split('<fd>');
													var s_key=single_menu_list[0]
													var s_value=single_menu_list[1]
													if (s_value=='YES'){
//															 //alert (s_key);	
															 menu_str=menu_str+'<li width="100%" align="center" onClick="'+s_key+'()"><img style="padding-top:0px; padding-bottom:0px;" src="'+s_key+'.png"></li>'
															

														if (s_key=="chemist_visit"){
															 order_report="Yes"
															
														}
														if (s_key=="doctor_visit"){
															 doctor_report="Yes"
															
														}
														if (s_key=="prescription_report"){
															 prescription_report="Yes"
															
														}
//														
//														
													} //end yes
												} //end for
												menu_str=menu_str;
												localStorage.menu_list=menu_str;
												//alert (localStorage.menu_list)
												$('#menu_lv').empty()
												$('#menu_lv').append(localStorage.menu_list);

												
//												alert (localStorage.menu_list);
												//=============set menu end================
												//===========Market===========================
												//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													var planMarketList = localStorage.marketListStr.split('<rd>');
													var planMarketListShowLength=planMarketList.length	
													
													var visitPlanMarketComb=''								
													var profileMarketComb='';								
													var unscheduleMarketComb='';
													
													for (var k=0; k < planMarketListShowLength; k++){
														var planMarketValueArray = planMarketList[k].split('<fd>');
														planMarketID=planMarketValueArray[0];
														planMarketName=planMarketValueArray[1];
														marketID=planMarketID
														marketName=planMarketName
														var marketNameID=planMarketName+'|'+planMarketID;
														//alert (marketNameID);
														if(planMarketID!=''){
															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')"><font class="name">'+marketNameID+'</a></font></li>';
															visitPlanMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="visitPlanMarketNextLV(\''+marketNameID+'\')"><font class="name">'+marketNameID+'</font></a></li>';
															
															profileMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextCProfileLV(\''+marketNameID+'\')"><font class="name">'+marketNameID+'</font></a></li>';
															

															}
													}
																				
													localStorage.visit_plan_marketlist_combo=visitPlanMarketComb;								
													localStorage.unschedule_market_cmb_id=unscheduleMarketComb;
													localStorage.market_cmb_list_cp=profileMarketComb;							

													
													
												//==================================	
													
													<!--
													var productList=localStorage.productListStr.split('<rd>');
													var productLength=productList.length;
													//alert (localStorage.productListStr)
													//------------ Order Item list								
													
													//if (order_report=="Yes"){
//														
//localStorage.report_button='<a data-role="button" onClick="s_order_summary_report();">Sales Call and Order Count</a><a data-role="button" onClick="s_order_detail_report();" >Sales Call and Order Detail</a>'
//
////localStorage.report_button='<a data-role="button" onClick="s_order_detail_report();" >Sales Call and Order Report</a>'
//														}
//														$('#order_report_button').empty();
//														$('#order_report_button').append(localStorage.report_button).trigger('create');
//														
//															 
//															
//														
//									//	alert (localStorage.doctor_report_button);	
//										
													if (doctor_report=="Yes"){
														
										localStorage.doctor_report_button='<a data-role="button" onClick="summary_report_doctor();" >DCR Count</a><a data-role="button" onClick="detail_report_doctor()" >DCR Detail</a>'
										
										//localStorage.doctor_report_button='<a data-role="button" onClick="detail_report_doctor()" >DCR Report</a>'
										
										localStorage.prescription_report_button='<a data-role="button" onClick="summary_report_prescription();" >Prescription Count</a><a data-role="button" onClick="detail_report_prescription()" >Prescription Detail</a>'
													}	
													
													$('#doctor_report_button').empty();
													$('#doctor_report_button').append(localStorage.doctor_report_button).trigger('create');

													
													$('#prescription_report_button').empty();
													$('#prescription_report_button').append(localStorage.				prescription_report_button).trigger('create');
													
													
													
														
										// alert (localStorage.doctor_report_button);						 
															
														
													
													
													var product_tbl_doc_campaign='';
													var product_tbl_doc_sample='';
//													
//													
//													
													var product_tbl_order=''
													//alert (productLength)
													for (j=0; j < productLength; j++){
														var productArray2 = productList[j].split('<fd>');
														var product_id2=productArray2[0];	
														var product_name2=productArray2[1];
														var product_price=productArray2[2];
														
														var product_qty='';																		
														
														product_tbl_order=product_tbl_order+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_item(\''+product_id2+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"  ><td width="60px" style="text-align:center; padding-left:5px;"><input class="orderProduct" maxlength="4" onChange="getOrderData_keyup(\''+product_id2+'\')" type="number" id="order_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="order_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="order_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="order_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font class="name" id="'+ product_id2 +'" onClick="tr_item(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														//------------ Doctor Campaign Item list
														$("#error_login").html('Processing Product List....');
														
														
														product_tbl_doc_campaign=product_tbl_doc_campaign+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="check_boxTrue(\''+product_id2+'\')"> '+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><label for="doc_camp'+product_id2+'"></br></label><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'</br><font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" class="name" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';

														$("#error_login").html('Processing Product List....');	
														//-------------Sample----------
														
														product_tbl_doc_sample=product_tbl_doc_sample+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_sample(\''+product_id2+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;"><input class="docSample" maxlength="4" onChange="getSampleData_keyup(\''+product_id2+'\')" type="number" id="sample_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="sample_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="sample_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="sample_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;"><font  class="name" >'+product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';

														
														
													
													}
													//product_tbl_order=product_tbl_order+'</ul>';//</table>';	
													//product_tbl_doc_campaign=product_tbl_doc_campaign+'</ul>';//+'</table>'	//+'</ul>';						
													//product_tbl_doc_sample=product_tbl_doc_sample+'</ul>';
													 
													
													localStorage.product_tbl_str=product_tbl_order	;	

													localStorage.product_tbl_str_doc_campaign=product_tbl_doc_campaign;
													localStorage.product_tbl_str_doc_sample=product_tbl_doc_sample;
													
												
										$('#item_combo_id_lv').empty()
										$('#item_combo_id_lv').append(localStorage.product_tbl_str);
										
										$('#campaign_combo_id_lv').empty();
										$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
										$('#sample_combo_id_lv').empty();
										$('#sample_combo_id_lv').append(localStorage.product_tbl_str_doc_sample);

													
													

													//------------ Gift Item list								
//	
													
													
										if (localStorage.gift_string.length > 5 ){
										
											var giftList=localStorage.gift_string.split('<rd>');
											var giftLength=giftList.length;

											
											var gift_tbl_doc='';
											for (j=0; j < giftLength; j++){
												var gifttArray = giftList[j].split('<fd>');
												var gift_id=gifttArray[0];	
												var gift_name=gifttArray[1];
												var gift_qty='0';
												
												
												
												
												//------------ Doctor Gift Item list
												
												gift_tbl_doc=gift_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_gift(\''+gift_id+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="gift_id'+gift_id+'" value="'+gift_id+'" ><input class="docGift" maxlength="4" onChange="getGiftData_keyup(\''+gift_id+'\')" type="number" id="gift_qty'+gift_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_gift_name'+gift_id.toUpperCase()+'" value="'+gift_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ gift_name +'" onClick="tr_item_doc_campaign(\''+gift_id+'\')" class="name" >'+ gift_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
												
												
												
												
								
											}
											
											//gift_tbl_doc=gift_tbl_doc+'</ul>';//+'</table>'
										
											localStorage.gift_tbl_doc=gift_tbl_doc;
											//$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
											$('#gift_combo_id_lv').empty();
											$('#gift_combo_id_lv').append(localStorage.gift_tbl_doc);
											
										
										
										}
													
													
//													========================PPM Start========
													if (localStorage.ppm_string.length > 5 ){
													
														var ppmList=localStorage.ppm_string.split('<rd>');
														var ppmLength=ppmList.length;
														

														
														var ppm_tbl_doc='';
														for (j=0; j < ppmLength; j++){
															var ppmArray = ppmList[j].split('<fd>');
															var ppm_id=ppmArray[0];	
															var ppm_name=ppmArray[1];
															var ppm_qty='0';
															
															
															
															
															//------------ Doctor ppm Item list
															
															ppm_tbl_doc=ppm_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_ppm(\''+ppm_id+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="ppm_id'+ppm_id+'" value="'+ppm_id+'" ><input class="docPpm" maxlength="4" onChange="getppmData_keyup(\''+ppm_id+'\')" type="number" id="ppm_qty'+ppm_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_ppm_name'+ppm_id.toUpperCase()+'" value="'+ppm_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ ppm_name +'" onClick="tr_item_doc_campaign(\''+ppm_id+'\')" class="name">'+ ppm_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
															
															
															
															
											
														}
														
														//ppm_tbl_doc=ppm_tbl_doc+'</ul>';//+'</table>'
													
														localStorage.ppm_tbl_doc=ppm_tbl_doc;
														$('#ppm_combo_id_lv').empty();
														$('#ppm_combo_id_lv').append(localStorage.ppm_tbl_doc);
														//$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
														

													
													} 


//													===========================ppm end===============


													localStorage.visit_page=""
													$("#se_mpo").val(localStorage.user_id);

													localStorage.synced='YES';
													
													
													$.afui.loadContent("#pageHome",true,true,'right');
													$("#error_login").html('Synced Successfully');
													$("#wait_image_login").hide();
													$("#loginButton").show();
//													//url = "#pageHome";
//													//$.mobile.navigate(url);								
//													$.afui.loadContent("#pageHome",true,true,'right');
//													
													set_doc_all();
-->
										  }//else failed
	
									  }//else success
							});	//Second Hit
		
		
						}			  
												
					}
						
					
				}
			else{
				$("#wait_image_login").hide();
				$("#loginButton").show();
				$("#error_login").html('Base URL not available');
			}
     
    });			
}
		
		
		
		
}//Function



//==================Menu function=====================
function chemist_visit() {
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	$("#doc_start").html('Visit > Market > Chemist');
	
	
	$("#btn_location").show();
	$("#visit_submit").hide();
	$("#checkLocation").html('');
	
	
	localStorage.doctor_flag=0;
	localStorage.visit_page="NO";
	addMarketList();
	localStorage.saved_data_submit=0;
	localStorage.save_submit=0;
	//alert ('sadsafdsff')
	
}
function saved_visit() {
	$("#doc_start").html('Visit > Market > Chemist');
	localStorage.saved_data_submit=0;
	$.afui.loadContent("#page_saved_visit",true,true,'right');

	getvisitSave_data();
	
}
function chemist_profile() {
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Chemist</font>');
	localStorage.doctor_flag=0;
	
	
	localStorage.saved_data_submit=0;
	//addMarketListCp();
	
	
}
function doctor_visit() {
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	$("#doc_start").html('Visit > Market > Doctor');
	localStorage.doctor_flag=1;
	
	localStorage.saved_data_submit=0;
	localStorage.visit_page="NO";
	addMarketList();
	
}
function doctor_profile() {
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Doctor</font>');
	
	localStorage.saved_data_submit=0;
	localStorage.doctor_flag=1;
	localStorage.visit_page="NO";
	//addMarketListCp();
	
}
function stock() {
	getStock();
	//var url = "#page_stock";	
//	$.mobile.navigate(url);
	
}
function feedback() {
	localStorage.saved_data_submit=0;
	getComplain();
	//var url = "#page_complain";	
//	$.mobile.navigate(url);
}
function reports() {
	var str_report_rep='<table width="100%" border="0">'+
					 '<tr><td>Rep: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" readonly="true" placeholder="Rep">'+
					  '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>'+
					   '<tr><td>Market: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market"  ></td></tr></table>'
	var str_report_sup='<table width="100%" border="0">'+
					   '<tr><td>Rep: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" placeholder="Rep">'+
					   '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>	'+
					   '<tr><td>Market: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market/level"  ></td></tr></table>'	
	
	if (localStorage.user_type=='rep'){
		localStorage.str_report=str_report_rep;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	if (localStorage.user_type=='sup'){
		localStorage.str_report=str_report_sup;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	$.afui.loadContent("#page_reports_dcr",true,true,'right');
	//var url = "#page_reports_dcr";
//	$.mobile.navigate(url);
}



//==================Menu function end=================
function addMarketList() {
	//alert (localStorage.unschedule_market_cmb_id);
	$("#unschedule_market_combo_id").val('');
	var unschedule_market_combo_list=localStorage.visit_plan_marketlist_combo;

	$('#unschedule_market_combo_id_lv').empty();
	$('#unschedule_market_combo_id_lv').append(unschedule_market_combo_list);
	
	$.afui.loadContent("#page_market",true,true,'right');

}
function marketNextLV(lvalue) {
	$("#unschedule_market_combo_id").val(lvalue);
	if (localStorage.doctor_flag==1){
		marketNext_doc();
	}
	else{
		if (localStorage.user_type=='rep'){
			marketNext();	
		}
		else{
			
			marketNext_sup();	
		}
	}	
}

function marketNext() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			//var catType=$("#catCombo").val();
			
			//===========================Get market client list Start============================
			market_list=localStorage.market_client;
			
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next").text("Sorry Network not available");	
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
			}else{					
					var resultArray_0 = market_list.split('<'+market_Id+'>');	
					var resultArray_1 = resultArray_0[1].split('</'+market_Id+'>');	
					var m_client_string = resultArray_1[0];	
					//var resultArray = market_list.split('</'+market_Id+'>');			
//					m_client_string=resultArray[0].replace('<'+market_Id+'>','');
														
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next").text("Retailer not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
						//----------------
						
						var visit_type="Unscheduled";
						var scheduled_date="";
						
						//-----------------------------------
									
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
						
							if(mClientID!=''){

									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px"  class="name">'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
							}
						 }
					
					
					//var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
		
					
					var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
					
					
					
					unscheduled_m_client_combo_ob.empty()
					unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
													
					$(".market").html(market_name);								
					$(".visit_type").html(visit_type);								
					$(".s_date").html(scheduled_date);
					
					localStorage.visit_type=visit_type
					localStorage.scheduled_date=scheduled_date
					
					//-----------------------------------
					$("#err_market_next").text("");
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
					
					//------- 
					
					
					
					
					//var url = "#page_market_ret";	
					//$.mobile.navigate(url);
					
					$.afui.loadContent("#page_market_ret",true,true,'right');
					
					
				}
			}//end else

			//============================Get market client list end===============================
		}			
}
function marketNext_sup() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
	}
	else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
				
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			var catType=$("#catCombo").val();
				
				
				//===========================Get market client list Start============================
				
				
				//$("#err_market_next").html(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType);
				//http://127.0.0.1:8000/lscmreporting/syncmobile/getClientInfo?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=2568&client_id=R100008
				
	//			//// ajax-------
	$.post(localStorage.base_url+'getMarketClientList?',{cid: localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,market_id:market_Id,catType:catType},
    						 
								
								 function(data, status){
									 if (status!='success'){
										$("#err_retailer_next").html('Sorry Network not available');
										$("#btn_schedule_ret").show();
										$("#wait_image_schedule_ret").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_market_next").text("Retailer not available");	
											$("#wait_image_unschedule_market").hide();		
											$("#btn_unschedule_market").show();
										}
										
										
										
	
	
								else if (resultArray[0]=='SUCCESS'){
									
									localStorage.market_client=resultArray[1];
									
									//alert (resultArray[1])
									
								var	m_client_string=localStorage.market_client;
				
									var visit_type="Unscheduled";
									var scheduled_date="";
											
						//					-----------------------------------
														
								var mClientList = m_client_string.split('<rd>');
								var mClientListShowLength=mClientList.length	
									
								
								var unscheduled_m_client_list=''
								//alert (mClientListShowLength);
								for (var i=0; i < mClientListShowLength; i++){
										var mClientValueArray = mClientList[i].split('<fd>');
										var mClientID=mClientValueArray[0];
										var mClientName=mClientValueArray[1];
										var mClientCat=mClientValueArray[2];
											
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}
								
								

							
								var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
								
								unscheduled_m_client_combo_ob.empty()
								unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
//								--------------------------


								$(".market").html(market_name);								
								$(".visit_type").html(visit_type);								
								$(".s_date").html(scheduled_date);
								
								localStorage.visit_type=visit_type
								localStorage.scheduled_date=scheduled_date
								
								//-----------------------------------
								$("#err_market_next").text("");
								$("#wait_image_unschedule_market").hide();		
								$("#btn_unschedule_market").show();
								
								//------- 

								$.afui.loadContent("#page_market_ret",true,true,'right');
								unscheduled_m_client_combo_ob.listview("refresh");									
								} //else if
								
								
							} //else
							
	
						  
				 });//end ajax
			
			

					

//			//============================Get market client list end===============================

		}	//Market required else		
}

//--------------------------------- Unsheduled visit: retailer next
function marketRetailerNextLV(lvalue) {
	$("#unscheduled_m_client_combo_id").val(lvalue);
	//alert(lvalue);
	if(localStorage.doctor_flag==1){
		marketRetailerNext_doc();	
	}
	else{
		marketRetailerNext();	
	}
		
	}
	
function marketRetailerNext() {
	$("#lat").val(0);
	$("#longitude").val(0);
	//localStorage.location_detail=''
	$("#err_m_retailer_next").text("");
	var visit_client=$("#unscheduled_m_client_combo_id").val();		
		
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
		}else{
			//$("#btn_unschedule_market_ret").hide();
//			$("#wait_image_unschedule_market_ret").show();		
			visitClientId_list=visit_client.split('|')
			var visitClientId=visit_client.replace(visitClientId_list[0]+"|","");
			
			var visitClientID=visit_client.split('|')[1];
			
			//alert(localStorage.visit_client); 
			
			//if (localStorage.visit_client !=visitClientID ){
//				cancel_cart();
//
//			}
			//alert (visitClientID);
			$(".visit_client").html(visit_client);
				
			localStorage.visit_client_show=visit_client
			localStorage.visit_client=visit_client.split('|')[1]
			
			localStorage.visit_page="YES"
			//--------
			$("#err_m_retailer_next").text("");
			$("#wait_image_unschedule_market_ret").hide();		
			$("#btn_unschedule_market_ret").show();
			
			
			 
			
			if (localStorage.visit_location_flag=='YES'){
				//alert (localStorage.visit_location);
				$("#visit_location").show();
				$("#visit_submit").hide();
				
			}
			
			
			if (localStorage.visit_location_flag!='YES'){
				//alert (localStorage.visit_location);
				$("#visit_location").hide();
				$("#visit_submit").show();
				
			}
			if (localStorage.delivery_date_flag!='YES'){
				$("#delivery_date_div").hide();
			}
			if (localStorage.collection_date_flag!='YES'){
				$("#collection_date_div").hide();
			}
			if (localStorage.payment_date_flag!='YES'){
				$("#payment_date_div").hide();
			}
			if (localStorage.payment_mode_flag!='YES'){
				$("#payment_mode_div").hide();
			}
			
			
			
			$("#errorChkVSubmit").html('');
			$("#errorConfiProfileUpdate").html('');
			$("#errorChkVSubmit_doc").html('');
			
			$("#order_load").hide();
			$.afui.loadContent("#page_visit",true,true,'right');

								
			
		}
}


//--------------------------------- Order: Show order from home

function getOrder_load(){	
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
	for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];		
			$("#order_qty"+orderProductId).val(orderProductQty);
		}		
	}
	
}
function getOrder(){	
	$("#order_load").show();
	//alert (localStorage.product_tbl_str)
	$('#item_combo_id_lv').empty()
	$('#item_combo_id_lv').append(localStorage.product_tbl_str);
	getOrderData()
	
	//$.afui.loadContent("#page_order",true,true,'right');
}

//--------------------------------- Order: Set Order data

function getOrderData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#order_qty"+product_id).val().replace('.','').substring(0,4);
	$("#order_qty"+product_id).val(pqty);
	
	//alert (pqty)
	
	var productOrderStr=localStorage.productOrderStr
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			//alert (productOrderStr)
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
					if (orderProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					}
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productOrderStr=productOrderStr
	}
		
	//	------------------------------------------------------
	//alert (localStorage.productOrderStr)

		
	}
function getOrderData(){	

	//alert (localStorage.productOrderStr);
	if (localStorage.productOrderStr!=''){
		cart_data();
		//alert ('aa');
		$.afui.loadContent("#page_cart",true,true,'right');
		$("#order_load").hide();
	}
	else{
		
		$("#errorChkVSubmit").html('');
		//$("#errorConfiProfileUpdate").html('');
		$("#errorChkVSubmit_doc").html('');
		

		//alert (localStorage.product_tbl_str)
		//location.reload()
		getOrder_load()
		$.afui.loadContent("#page_order",false,true,'right');
		$("#order_load").hide();
		//alert ('aaa');
	}
}
	
//--------------------cart Start----------------
function cart_data() {	
	//alert (localStorage.productOrderStr)
	if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		var product_tbl_cart_str='';
		var total_value=0
		
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				var product_name=$("#order_name"+orderProductId).val(); 
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;
				
				//product_tbl_cart_str=product_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'</li>'
				//alert (product_name)
				product_tbl_cart_str=product_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input  type="number" id="cart_qty'+orderProductId+'"  onBlur="getCartData_keyup(\''+orderProductId+'\')" value="'+orderProductQty+'" placeholder="0"> </td><td  style="text-align:left;">'+ product_name.toUpperCase()+'</td></tr>'+'</table>'+'</li>'
				
				}
		
		}
		
		product_tbl_cart_str=product_tbl_cart_str;		
		
		
		localStorage.product_tbl_cart=product_tbl_cart_str;//+'</table>';
		localStorage.total_value=total_value.toFixed(2);
		$('#item_combo_id_lv_cart').empty();
		$('#item_combo_id_lv_cart').append(localStorage.product_tbl_cart);
		
		var show_total="Total Order Amount: "+localStorage.total_value + " BDT"
		localStorage.show_total=show_total;
		
		
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		$("#order_total_show").html(localStorage.show_total);
		
	}
	else{
		
		$.afui.loadContent("#page_order",true,true,'right');

	}
	
	
	
	
}


//==============================================
function getCartData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#cart_qty"+product_id).val().replace('.','').substring(0,4);
	$("#cart_qty"+product_id).val(pqty);
	
	
	$("#order_qty"+product_id).val(pqty);
	var productOrderStr=localStorage.productOrderStr
	
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
				var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
				//	alert (productOrderStr.indexOf(product_id));
					//alert (orderProductList[j]);
					if (orderProductId==pid){
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							if(productOrderStr.indexOf('<rd>')>0){
								productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							}
							else{
								productOrderStr=productOrderStr.replace(orderProductList[j], "")
							 }
								//alert (productOrderStr);
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					} //if (orderProductLength>1){
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					} //if (orderProductLength==1
				
				} //if (orderProductId==pid)
					
					
					
				}//if(orderProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productOrderStr=productOrderStr
		
		//================price===========
		if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		var total_value=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;

				
				
				}
		
		}
		
		
		
		//alert (localStorage.productOrderStr)
		localStorage.total_value=total_value.toFixed(2);
		
		$("#product_total_cart").html("Total Order Amount: "+localStorage.total_value + " BDT");
		$("#product_total_last").html("Total Order Amount: "+localStorage.total_value + " BDT");

	}
		
		
//		==================================
	}



function payment_mode(){
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())

	$.afui.loadContent("#page_visit",true,true,'right');
	localStorage.payment_mode=payment_mode
}

function cancel_cart() {
	$(".orderProduct").val('');
	
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	$("#order_total_show").html('');
	$("#chemist_feedback").val('');
	
	$("#item_combo_id").val('');
	
	
	
	localStorage.productOrderStr='';
	$("#product_list_tbl_cart").html("");
	$.afui.loadContent("#page_visit",true,true,'right');

}

//-----VISIT SUBMIT
function visitSubmit(){	
//alert (localStorage.doctor_flag)
	if (localStorage.doctor_flag==1){
		visitSubmit_doc();
	}
	else{
		
		lscVisitSubmit();	
	}	

}

//==============================Visit Submit============
function replace_special_char(string_value){
	//var chemist_feedback=$("#chemist_feedback").val();
	//var doc_feedback=$("#doc_feedback").val();
	//chemist_feedback=chemist_feedback.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	var real_value=string_value.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	return real_value;
}

function lscVisitSubmit(){	
	$("#errorChkVSubmit").text("");
	$("#visit_save_div").hide();
	
	//alert (localStorage.location_detail)
	var visitClientId=localStorage.visit_client
	var visit_type=localStorage.visit_type
	var scheduled_date=localStorage.scheduled_date
	
	var marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	var productOrderStr=localStorage.productOrderStr
	var marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	var campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	//alert ('asdfsdf')
	//----------------------- marchandizing status check
	marchandizingInfoStr=''
	
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback

	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);
	
	var delivery_date=$("#delivery_date").val();
	var collection_date=$("#collection_date").val();
	

	localStorage.payment_mode=$("#payment_mode").val();
	
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	}
	
	
	var currentDate_1 = new Date()
	var day_1 = currentDate_1.getDate()
	var month_1 = currentDate_1.getMonth() + 1
	var year_1 = currentDate_1.getFullYear()
	var today_1=  year_1 + "/" + month_1 + "/" + day_1
	
	//alert (today_1)
	if (localStorage.delivery_date_flag!='YES'){
		delivery_date=today_1;
	}
	else{
		$("#errorChkVSubmit").html('Please enter delivery date');
		$("#visit_save_div").show();
	}
	if (localStorage.collection_date_flag!='YES'){
		collection_date=today_1
	}
	else{
		$("#errorChkVSubmit").html('Please enter collection date');
		$("#visit_save_div").show();
	}
	
	
	if  ((delivery_date.length < 9) || (collection_date.length < 9)){
		$("#errorChkVSubmit").html('Please enter collection and delivery date');
		$("#visit_save_div").show()
	}
	else{
		
		var currentDate = new Date()
		var day = currentDate.getDate()
		var month = currentDate.getMonth() + 1
		var year = currentDate.getFullYear()
		var today=  year + "/" + month + "/" + day
		var delivery_date_check=delivery_date.replace('-','/')
		var collection_date_check=collection_date.replace('-','/')
		var delivery_year=delivery_date.split('-')[0]
		var collection_year=collection_date.split('-')[0]

		var date1 = new Date(today);
		var date2 = new Date(delivery_date_check);
		var date3 = new Date(collection_date_check);
 
		var diffDays_delivery = date2- date1; 
		var diffDays_collection = date3 - date1; 
		
		if  ((diffDays_delivery < 0 ) || (diffDays_collection < 0 )){
			$("#errorChkVSubmit").html('Invalid collection and delivery date');
			$("#visit_save_div").show();
		}
		else{
					//alert (photoRequired)	
//					if (photoRequired=='Yes' && lscPhoto==''){
//						$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
//					}else{
//						var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';						
						if (visitClientId=='' || visitClientId==undefined){
							
							$("#errorChkVSubmit").html('Invalid Client');		
						}else{
							if(visit_type=='' || visit_type==undefined){
								$("#errorChkVSubmit").html('Invalid Visit Type');
							}else{
								
								$("#visit_submit").hide();
								$("#wait_image_visit_submit").show();	
								$("#visit_save_div").hide();	
								var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
												//alert (localStorage.productOrderStr);
												//$("#errorChkVSubmit").text(localStorage.base_url+'visitSubmit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode+'&chemist_feedback='+chemist_feedback+'&delivery_date='+delivery_date+'&collection_date='+collection_date+'&location_detail='+localStorage.location_detail+'&version=p1')
												// ajax-------
												//alert (localStorage.payment_mode);
											
								if ( localStorage.location_error!=2){	
									$.post(localStorage.base_url+'check_user?',{
										cid: localStorage.cid,rep_id:localStorage.user_id,
										rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
										client_id:visitClientId,visit_type:visit_type,
										schedule_date:scheduled_date,market_info:marketInfoStr,
										order_info:productOrderStr,merchandizing:marchandizingInfoStr,
										campaign:campaign_str,lat:lat,long:longitude,visit_photo:imageName,
										payment_mode:localStorage.payment_mode,chemist_feedback:chemist_feedback,
										delivery_date:delivery_date,collection_date:collection_date,
										location_detail:localStorage.location_detail,version:'p1'
									},
    						 
								
								 function(data, status){
									 
									 if (status!='success'){
										$("#wait_image_login").hide();
										$("#loginButton").show();
										$("#error_login").html('Sorry Network not available');
									 }
									 else{		
									
									 var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');					
		
									if (resultArray[0]=='FAILED'){						
										$("#errorChkVSubmit").html(resultArray[1]);
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();	
									}else if (resultArray[0]=='SUCCESS'){
																	
								//		-----------
										localStorage.visit_client=''
										localStorage.marchandizingStr=''
										
										localStorage.marketInfoLSCStr=''
										
										localStorage.marketInfoStr='';
										localStorage.marketInfoSubmitStr='';
										
										localStorage.productOrderStr='';
										localStorage.marchandizingInfoStr='';
										localStorage.visit_camp_list_str='';
										localStorage.visit_camp_submit_str='';
										visitCampaginTempArray=[];
										visitCampaginArray=[];
										
										localStorage.visit_page="";																
										localStorage.show_total="";
										
										$("#chemist_feedback").val('')
										
										

										//-------------
										// Clear localStorage
											
										localStorage.productOrderStr='';
										cancel_cart();
											

										//--------------------------------------------------------
										$(".visit_client").html('');
										
										$("#errorChkVSubmit").html('');
										$("#lat").val('');
										$("#longitude").val('');
										$("#lscPhoto").val('');
										document.getElementById('myImage').src = '';
										
										$("#lat_p").val('');
										$("#long_p").val('');								
										
										$("#checkLocation").html('');
										$("#checkLocationProfileUpdate").html('');
										
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();
										
										$("#product_total_last").html('');
										$("#product_list_tbl_cart").html('');
										$("#product_total_cart").html('');
										$("#item_combo_id").val('Search');
										
										
										
										//--
										$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
										
										
										//saved data remove
										
										if (localStorage.saved_data_submit==1){
											var visit_save=localStorage.visit_save
											var saved_data_show=localStorage.saved_data_show;
											var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")
		
											localStorage.visit_save=visit_save_data
											//after_save_data();
											
										}
										
										
										$("#btn_location").show();	
										$("#visit_submit").hide();
										$("#checkLocation").hide('');	
										
										$("#delivery_date").val('');
										$("#collection_date").val('');
										
		
		
										$("#checkLocation_doc").html('');
										$("#wait_image_visit_submit_doc").hide('');
										
										$("#visit_save_div").show();

										$.afui.loadContent("#page_confirm_visit_success",true,true,'right');
																				
									}
									else{						
										$("#errorChkVSubmit").html('Network Timeout. Please try again.');
										$("#visit_save_div").show();
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();								
										}

										  }
									 });//end post	
									 
									}// error location check
								}
						//	}Photo
			
						//  }//locaction check
					}
		}//end collection and delivery date future
	
	}//end collection and delivery date check
}

//==============================End Visit Submit========



//============================Doct Start===========================

function marketNext_doc() {
	localStorage.location_detail=''
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	localStorage.visit_market_show=market_name
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			
			var marketNameId=market_name.split('|');
			var market_Id=marketNameId[1];
			
			var visit_type="Unscheduled";
			var scheduled_date="";
			
			result=localStorage.market_doctor
			
			var resultArray = result.split('</'+market_Id+'>');
			var doc_result_list=resultArray[0].split('<'+market_Id+'>')
			var doc_result=doc_result_list[1]
			
			
			//alert (doc_result);
			if (result==''){
				$("#err_market_next").text("Sorry Network not available");	
				$("#wait_image_unschedule_market").hide();		
				$("#btn_unschedule_market").show();
			}else{					

				//-----------------------------------
					if ((doc_result== undefined) || (doc_result== 'undefined')){
						$("#err_market_next").text("Doctor not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
					
						
						var mClientList = doc_result.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							//alert (mClientID)
							if(mClientID!=''){
	
								unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')">'+mClientName+'|'+mClientID+'</a></li>';
								}								
						}
									
									
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
						
						unscheduled_m_client_combo_ob.empty()
						unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
									
						$(".market").html(market_name);								
						$(".visit_type").html(visit_type);								
						$(".s_date").html(scheduled_date);
						localStorage.visit_type=visit_type
						localStorage.scheduled_date=scheduled_date
									
									//-----------------------------------
									$("#err_market_next").text("");
									$("#wait_image_unschedule_market").hide();		
									$("#btn_unschedule_market").show();
									
									//------- 
								
									$.afui.loadContent("#page_market_ret",true,true,'right');
									unscheduled_m_client_combo_ob.listview("refresh");
									
								}
					
					}
 		
			
		}			
}


//==============================Doctor==========

function marketRetailerNext_doc() {
	
	$("#err_m_retailer_next").text("");
	visit_client=$("#unscheduled_m_client_combo_id").val();		
	
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
	}else{
		$("#btn_unschedule_market_ret").hide();
		$("#unscheduled_m_client_combo_id_lv").hide();
		
		//alert ('nn');
		$("#wait_image_ret").show();		
		
		$(".visit_client").html(visit_client);
		
		localStorage.visit_client_show=visit_client
		if (visit_client!=localStorage.visit_client){
			
			localStorage.productGiftStr=''
			localStorage.campaign_doc_str=''
			localStorage.productSampleStr=''
			
			localStorage.productppmStr='';
			
			localStorage.campaign_show_1='';
			localStorage.gift_show_1='';
			localStorage.sample_show_1='';
			localStorage.ppm_show_1='';
			
			//alert (localStorage.productGiftStr='');
//			alert (localStorage.gift_show_1);
//			==========================

		
		
		set_doc_all();
		

//			===============================
		}
		
			
		localStorage.visit_client=visit_client

		localStorage.visit_page="YES"
		
		//--------
		$("#wait_image_unschedule_market_ret").hide();		
		
		$("#unscheduled_m_client_combo_id_lv").show();
		$("#wait_image_ret").hide();
		
		$("#errorChkVSubmit").html('');
		$("#errorConfiProfileUpdate").html('');
		$("#errorChkVSubmit_doc").html('');
		

		$.afui.loadContent("#page_visit_doc",true,true,'right');
		//location.reload();
							
			
	
	}
}




//================Campaign=============

function getCampaign(){
	localStorage.campaign=1;

	if ((localStorage.campaign_doc_str==undefined) || (localStorage.campaign_doc_str=='undefined')){
		localStorage.campaign_doc_str='';
	}
	
	var campaign_show=localStorage.campaign_doc_str;
	
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	$('#campaign_combo_id_lv').empty();
	$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
	
	for (var j=0; j < campaign_showListLength; j++){	
		var camp_combo="#doc_camp"+campaign_showList[j]
		$(camp_combo).attr('checked', true);
	}
	
	$.afui.loadContent("#page_doctor_campaign",true,true,'right');
	
}



//--------------------Campaign Item Search Start----------------
function search_item_doctor_campaign() {	
	var p_name=$("#item_search_doctor_campaign").val();

	 
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (var j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#doc_camp"+product_id).focus().select();
			$("#item_search_doctor_campaign").val('');
			return;
		}
				
	}
	
}


//--------------------Campaign Item Search End----------------
//--------------------------------- Order: Set Order data
function getDocCampaignData_keyup(product_id){
	var pid=$("#doc_camp_id"+product_id).val();
	var pname=$("#doc_camp_name"+product_id).val();
	var camp_combo="#doc_camp"+product_id
	
	var camp_combo_val=$(camp_combo).is(":checked")
	
	
	var campaign_doc_str=localStorage.campaign_doc_str
	var campaign_docShowStr='';
	
	
	if (camp_combo_val == true ){
		if (campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pid
				productOrderShowStr=pname
			}else{
				campaign_doc_str=campaign_doc_str+'<rd>'+pid
			}	
		}
		else{
			var campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
			var campaign_doc_strListLength=campaign_doc_strList.length;
			for (var j=0; j < orderProductLength; j++){
					var campaign_docProductId=campaign_doc_strList[j];

					if (campaign_docProductId==pid){
						campaign_doc_str=campaign_doc_str.replace(campaign_docProductId, "")
						
						
						if (campaign_doc_str==''){
							campaign_doc_str=pid
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							campaign_doc_str=campaign_doc_str+'<rd>'+campaign_docProductId
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+orderProductQty+')'
							}		
					}
			}
		}
		localStorage.campaign_doc_str=campaign_doc_str;
		
		
	}
	else{
		//alert ('3')
		var campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
		var campaign_doc_strListLength=campaign_doc_strList.length;
		
		for (var j=0; j < campaign_doc_strListLength; j++){
		var campaign_docProductId=campaign_doc_strList[j]
				
				product_index=campaign_doc_str.indexOf(campaign_docProductId)
				if (campaign_docProductId==pid){
					if (campaign_doc_strListLength>1){
						if (product_index==0){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							campaign_doc_str=campaign_doc_str.replace('<rd>'+campaign_doc_strList[j], "")
						}
					}
					if (campaign_doc_strListLength==1){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j], "")
						
					}
					
					
					
				
			}
		}
	
		localStorage.campaign_doc_str=campaign_doc_str;
		
	}
		
	}
function campaign_remove(id){
	var campaign_show=localStorage.campaign_doc_str;
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	

	for (var j=0; j < campaign_showListLength; j++){

		if (j==0){
			campaign_show=campaign_show.replace(id,"");
		}
		else{
			campaign_show=campaign_show.replace("<rd>"+id,"");
		}


	}
	localStorage.campaign_doc_str=campaign_show;
	$('#'+id).remove();
	
	var camp_combo="#doc_camp"+id
	$(camp_combo).attr("checked", false);
	
	if  (campaign_show_1.indexOf('undefined')==-1 ){
		var campaign= ($("#doc_campaign").html());
		localStorage.campaign_show_1=campaign;
	}
	
	//getDocCampaignData();
}	
	
	
function getDocCampaignData(){	
	var campaign_show=localStorage.campaign_doc_str;

	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	var campaign_show_1='';
	
	for (var j=0; j < campaign_showListLength; j++){
		
			if (j==0){
				campaign_show_1=campaign_show_1+'<table width="100%" cellspacing="2" border="0" style="border:thin;  border-color:a;background-color:#F7F7F7">';
			}
			var pname=$("#doc_camp_name"+campaign_showList[j]).val();
			//alert (campaign_showList[j]);
			if (campaign_showList[j] != ''){
				campaign_show_1=campaign_show_1+' <tr id="'+campaign_showList[j]+'"><td>'+pname+'('+campaign_showList[j]+')'+' </td><td> <a data-role="button" class="ui-btn" style="text-align:center" onClick="campaign_remove(\''+campaign_showList[j]+'\');" > X </a> </td></tr>'
			}
	}
	if (campaign_show_1!=''){
		campaign_show_1=campaign_show_1+'</table>';
	}
	localStorage.campaign_show_1=campaign_show_1;
	if  (campaign_show_1.length > 0 ){
		$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+'</br>');
	}
	
	campaign_as_sample();
		
	//$.afui.loadContent("#page_visit_doc",true,true,'right');
			
	}
//Set campaign as sample 
function campaign_as_sample(){
	var campaign_show= localStorage.campaign_doc_str+'<rd>';
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	

	var productSampleStr=localStorage.productSampleStr;
	var sample_show_1=localStorage.sample_show_1
	var productSampleStr=localStorage.productSampleStr

	for (var j=0; j < campaign_showListLength ; j++){
		if (campaign_showList[j].length !=0){
				if (productSampleStr.indexOf(campaign_showList[j])==-1){
					$("#sample_qty"+campaign_showList[j]).val(0);
					productSampleStr=productSampleStr+'<rd>'+campaign_showList[j]+'<fd>0'
				
					
				}
		}
		
	}

	localStorage.productSampleStr=productSampleStr;
	getDocSampleData();
	
	
				
		
	
	
}
function check_boxTrue(product_id){	
	//alert (product_id);
	var camp_combo="#doc_camp"+product_id
	var camp_combo_val=$(camp_combo).is(":checked")
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		getDocCampaignData_keyup(product_id)
	}
	else{
		$(camp_combo).prop('checked', false);
		getDocCampaignData_keyup(product_id)
	}
	}
	
	
function campaign_as_sample(){
	var campaign_show= localStorage.campaign_doc_str+'<rd>';
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	

	var productSampleStr=localStorage.productSampleStr;
	var sample_show_1=localStorage.sample_show_1
	var productSampleStr=localStorage.productSampleStr

	for (var j=0; j < campaign_showListLength ; j++){
		if (campaign_showList[j].length !=0){
				if (productSampleStr.indexOf(campaign_showList[j])==-1){
					$("#sample_qty"+campaign_showList[j]).val(0);
					productSampleStr=productSampleStr+'<rd>'+campaign_showList[j]+'<fd>0'
				
					
				}
		}
		
	}

	localStorage.productSampleStr=productSampleStr;
	getDocSampleData();
	
	
				
		
	
	
}

//======================Sample=====================
//--------------------------------- Sample: Show Sample from home

function getDocSampleData(){	
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	//alert (localStorage.productSampleStr);
	var sample_show_1='<ul  data-role="listview">';
	for (var j=0; j < sampleProductLength; j++){
			if (sampleProductList[j] != ''){
				//alert (sampleProductList[j]);
				var sampleProductsingle=sampleProductList[j];
				var sampleProductsingleList=sampleProductsingle.split('<fd>');
	
				var pname=$("#sample_name"+sampleProductsingleList[0]).val();
				
				sample_show_1=sample_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td >'+pname+'('+sampleProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="s_cart_qty'+ sampleProductsingleList[0] +'"  onBlur="sampleCartData_keyup(\''+sampleProductsingleList[0] +'\');" value="'+sampleProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
			}
		}
		
		if (sample_show_1!=''){
				sample_show_1=sample_show_1+'</ul>';
		}
		
		localStorage.sample_show_1=sample_show_1;
		sample_show_1=sample_show_1.replace('undefined','')
		//alert (sample_show_1.indexOf('undefined'));
		if  (sample_show_1.indexOf('undefined')==-1 ){
			
			$('#doc_sample').empty();
			$('#doc_sample').append("</br>"+localStorage.sample_show_1+"</br>").trigger('create');
		}
		
		$.afui.loadContent("#page_visit_doc",true,true,'right');
		
		
	
	
}
function getDoctorSample(){	
	$("#myerror_doctor_sample").html('');
	if ((localStorage.productSampleStr==undefined) || (localStorage.productSampleStr=='undefined')){
		localStorage.productSampleStr='';
	}
	
	//  Set Sample Data==========
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	for (var j=0; j < sampleProductLength; j++){
			
			var sampleProductsingle=sampleProductList[j];
			var sampleProductsingleList=sampleProductsingle.split('<fd>');
			
			
			$("#sample_qty"+sampleProductsingleList[0]).val(sampleProductsingleList[1]);

		
	}
	$.afui.loadContent("#page_doctor_sample",true,true,'right');
	
	//location.reload();
	//-----
}




//--------------------------------- Order: Set Order data
function getSampleData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#sample_qty"+product_id).val().replace('.','').substring(0,4);
	$("#sample_qty"+product_id).val(pqty);
	
	//alert (pqty)
	var productSampleStr=localStorage.productSampleStr
	
	
	var productSampleShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
				productSampleShowStr=pname+'('+pqty+')'
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
				productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var sampleProductList=localStorage.productSampleStr.split('<rd>');
			var sampleProductLength=sampleProductList.length;
			for (var j=0; j < sampleProductLength; j++){
			var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					var sampleProductId=sampleProductIdQtyList[0];
					var sampleProductQty=sampleProductIdQtyList[1];
					if (sampleProductId==pid){
						productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
							productSampleShowStr=pname+'('+pqty+')'
						}else{
							productSampleStr=productSampleStr+'<rd>'+sampleProductId+'<fd>'+pqty
							productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
							}		

					}
					
				}
			}
			
		}
		localStorage.productSampleStr=productSampleStr;
		//alert (localStorage.productSampleStr);
		
	}
	else{
		var sampleProductList=localStorage.productSampleStr.split('<rd>');
		var sampleProductLength=orderProductList.length;
		
		for (var j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				var sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					}
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productSampleStr=productSampleStr
	}
	
	//	------------------------------------------------------
}
	
function sampleCartData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#s_cart_qty"+product_id).val();
	
	$("#sample_qty"+product_id).val(pqty);
	var productSampleStr=localStorage.productSampleStr
	
	//alert (productOrderStr)
	var sample_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var sampleProductList=localStorage.productSampleStr.split('<rd>');
			var sampleProductLength=sampleProductList.length;
			
			for (var j=0; j < sampleProductLength; j++){
				var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					var sampleProductId=sampleProductIdQtyList[0];
					var sampleProductQty=sampleProductIdQtyList[1];
					
					if (sampleProductId==pid){
						product_index=productSampleStr.indexOf(product_id)
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
						}else{
							productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productSampleStr=productSampleStr;
		//alert (productsampleStr)
		
	}
	else{
		var sampleProductList=localStorage.productSampleStr.split('<rd>');
		var sampleProductLength=sampleProductList.length;
		
		for (var j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				var sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					} //if (sampleProductLength>1){
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					} //if (sampleProductLength==1
				
				} //if (sampleProductId==pid)
					
					
					
				}//if(sampleProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productSampleStr=productSampleStr
		
		
		
		//getDocSampleData();

	}
//================Gift=========================
function getDoctorGift(){
	if ((localStorage.gift_tbl_doc==undefined) || (localStorage.gift_tbl_doc=='undefined')){
		localStorage.gift_tbl_doc='';
	}
	
	//  Set Gift Data==========
	var gift_show=localStorage.productGiftStr;
	
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		$('#gift_qty'+giftProductsingleList[0]).val(giftProductsingleList[1]);

	}
	$.afui.loadContent("#page_doctor_gift",true,true,'right');

	
}
//--------------------------------- Order: Set Order data
function getGiftData_keyup(product_id){
	//alert (product_id);
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#gift_qty"+product_id).val().replace('.','').substring(0,4);
	
	$("#gift_qty"+product_id).val(pqty);
	//alert (pqty)
	var productGiftStr=localStorage.productGiftStr
	var productGiftShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		//alert (productGiftStr.indexOf(product_id));
		if (productGiftStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
				productGiftShowStr=pname+'('+pqty+')'
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
				productGiftShowStr=productGiftShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var giftProductList=localStorage.productGiftStr.split('<rd>');
			var giftProductLength=giftProductList.length;
			for (var j=0; j < giftProductLength; j++){
			var giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					var giftProductId=giftProductIdQtyList[0];
					var giftProductQty=giftProductIdQtyList[1];
					if (giftProductId==pid){
						productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
						
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
							productGiftShowStr=pname+'('+pqty+')'
						}else{
							productGiftStr=productGiftStr+'<rd>'+giftProductId+'<fd>'+giftProductQty
							productGiftShowStr=productGiftShowStr+', '+pname+'('+giftProductQty+')'
							}		
					}
					
				}
			}
			
		}
		localStorage.productGiftStr=productGiftStr;
		
		
	}
	else{		
		var giftProductList=localStorage.productGiftStr.split('<rd>');
		var giftProductLength=giftProductList.length;
		
		for (var j=0; j < giftProductLength; j++){
		var giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				var giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (orderProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					}
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productGiftStr=productGiftStr
	}
	//	------------------------------------------------------
}
function getDocGiftData(){	
	var gift_show=localStorage.productGiftStr;
	
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	var gift_show_1='<ul  data-role="listview">';
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		//alert (giftProductsingle)
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		var pname=$("#doc_gift_name"+giftProductsingleList[0]).val();
		gift_show_1=gift_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+giftProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ giftProductsingleList[0] +'"  onBlur="giftCartData_keyup(\''+giftProductsingleList[0] +'\');" value="'+giftProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (gift_show_1!=''){
			gift_show_1=gift_show_1+'</ul>';
	}
	
	localStorage.gift_show_1=gift_show_1;
	
	if  (gift_show_1.indexOf('undefined')==-1 ){
		$('#doc_gift').empty();
		$('#doc_gift').append("</br>"+localStorage.gift_show_1+"</br>").trigger('create');
		
	}
	$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}







function giftCartData_keyup(product_id){
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	
	
	$("#gift_qty"+product_id).val(pqty);
	var productGiftStr=localStorage.productGiftStr
	
	var gift_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productGiftStr.indexOf(product_id)==-1){
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var giftProductList=localStorage.productGiftStr.split('<rd>');
			var giftProductLength=giftProductList.length;
			//alert (giftProductLength);
			
			for (var j=0; j < giftProductLength; j++){
				var giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					var giftProductId=giftProductIdQtyList[0];
					var giftProductQty=giftProductIdQtyList[1];
					
					if (giftProductId==pid){
						product_index=productGiftStr.indexOf(product_id)
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
						}else{
							productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productGiftStr=productGiftStr;
		
	}
	else{
		var giftProductList=localStorage.productGiftStr.split('<rd>');
		var giftProductLength=giftProductList.length;
		
		for (var j=0; j < giftProductLength; j++){
		var giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				var giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (giftProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					} //if (giftProductLength>1){
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					} //if (giftProductLength==1
				
				} //if (giftProductId==pid)
					
					
					
				}//if(giftProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productGiftStr=productGiftStr
		//getDocGiftData();
		
//		==================================
	}


//===========================PPM Start=================

function getDoctorppm(){
	if ((localStorage.ppm_tbl_doc==undefined) || (localStorage.ppm_tbl_doc=='undefined')){
		localStorage.ppm_tbl_doc='';
	}
	
	//  Set ppm Data==========
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		$('#ppm_qty'+ppmProductsingleList[0]).val(ppmProductsingleList[1]);
	}
	$.afui.loadContent("#page_doctor_ppm",true,true,'right');

}
//--------------------------------- Order: Set Order data
function getppmData_keyup(product_id){
	//alert ('product_id');
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#ppm_qty"+product_id).val().replace('.','').substring(0,4);
	$("#ppm_qty"+product_id).val(pqty)
	
	
	var productppmStr=localStorage.productppmStr
	var productppmShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productppmStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
				productppmShowStr=pname+'('+pqty+')'
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
				productppmShowStr=productppmShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var ppmProductList=localStorage.productppmStr.split('<rd>');
			var ppmProductLength=ppmProductList.length;
			for (var j=0; j < ppmProductLength; j++){
			var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					var ppmProductId=ppmProductIdQtyList[0];
					var ppmProductQty=ppmProductIdQtyList[1];
					if (ppmProductId==pid){
						productppmStr=productppmStr.replace(ppmProductList[j], "")
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
							productppmShowStr=pname+'('+pqty+')'
						}else{
							productppmStr=productppmStr+'<rd>'+ppmProductId+'<fd>'+ppmProductQty
							productppmShowStr=productppmShowStr+', '+pname+'('+ppmProductQty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productppmStr=productppmStr;
		
		
	}
	else{		
		var ppmProductList=localStorage.productppmStr.split('<rd>');
		var ppmProductLength=ppmProductList.length;
		
		for (var j=0; j < ppmProductLength; j++){
		var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				var ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (orderProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					}
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productppmStr=productppmStr
	}
	//alert (localStorage.productppmStr)	
	//	------------------------------------------------------
}
function getDocppmData(){	
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	var ppm_show_1='<ul  data-role="listview">';
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		var pname=$("#doc_ppm_name"+ppmProductsingleList[0]).val();
		ppm_show_1=ppm_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+ppmProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ ppmProductsingleList[0] +'"  onBlur="ppmCartData_keyup(\''+ppmProductsingleList[0] +'\');" value="'+ppmProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (ppm_show_1!=''){
			ppm_show_1=ppm_show_1+'</ul>';
	}
	
	
	localStorage.ppm_show_1=ppm_show_1;
	if  (ppm_show_1.indexOf('undefined')==-1 ){
		$('#doc_ppm').empty();
		$('#doc_ppm').append("</br>"+localStorage.ppm_show_1+"</br>").trigger('create');
		
	}
	$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}







function ppmCartData_keyup(product_id){
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	

	
	$("#ppm_qty"+product_id).val(pqty);
	var productppmStr=localStorage.productppmStr
	
	var ppm_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productppmStr.indexOf(product_id)==-1){
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var ppmProductList=localStorage.productppmStr.split('<rd>');
			var ppmProductLength=ppmProductList.length;
			
			for (var j=0; j < ppmProductLength; j++){
				var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					var ppmProductId=ppmProductIdQtyList[0];
					var ppmProductQty=ppmProductIdQtyList[1];
					
					if (ppmProductId==pid){
						product_index=productppmStr.indexOf(product_id)
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
						}else{
							productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productppmStr=productppmStr;
		
	}
	else{
		var ppmProductList=localStorage.productppmStr.split('<rd>');
		var ppmProductLength=ppmProductList.length;
		
		for (var j=0; j < ppmProductLength; j++){
		var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				var ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (ppmProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					} //if (ppmProductLength>1){
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					} //if (ppmProductLength==1
				
				} //if (ppmProductId==pid)
					
					
					
				}//if(ppmProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productppmStr=productppmStr
		//getDocppmData();
		
		
	}




//============================ppm End===================
//----------------------Doctor visit submit
function visitSubmit_doc(){	
	$("#errorChkVSubmit").text("");
	
	visitClientId=localStorage.visit_client.split('|')[1]	
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	
	sample_doc_Str=localStorage.productSampleStr;
	gift_doc_Str=localStorage.productGiftStr;
	campaign_doc_str=localStorage.campaign_doc_str;
	
	ppm_doc_Str=localStorage.productppmStr;
	
	notes= $("#doc_feedback").val();
	

	
	//alert (notes);
	notes=replace_special_char(notes);
	
	//alert (notes);
	
	
	//----------------------- Campaign check
	
	if (campaign_doc_str.indexOf('undefined')!=-1){
		campaign_doc_Str=''
	}else{
		var campaignList=campaign_doc_str.split('<rd>');	
		var campaignListLength=campaignList.length;	
		campaign_submit='';
		
		for ( i=0; i < campaignListLength; i++){		
		
			if (campaign_submit==''){
				campaign_submit=campaignList[i]
			}
			else{
				campaign_submit=campaign_submit+','+campaignList[i]
			}
		}
	}
	//----------------------- Sample check
	//$("#errorChkVSubmit").html(sample_doc_Str);
	//alert (sample_doc_Str.indexOf('undefined'));
	if (sample_doc_Str.indexOf('undefined')!=-1){
		sample_doc_Str=''
	}else{
		var sampleList=sample_doc_Str.split('<rd>');	
		var sampleListLength=sampleList.length;	
		sample_submit='';
		for ( i=0; i < sampleListLength; i++){		
			sample_single=sampleList[i]
			sample_single_list=sample_single.split('<fd>');
			
			if (sample_submit==''){
				sample_submit=sample_single_list[0]+','+sample_single_list[1]
			}
			else{
				sample_submit=sample_submit+'.'+sample_single_list[0]+','+sample_single_list[1]
			}
		}
	}
	//alert (sample_doc_Str);
	//----------------------- Gift check
	if (gift_doc_Str.indexOf('undefined')!=-1){
		gift_doc_Str=''
		gift_submit=''
	}else{
		var giftList=gift_doc_Str.split('<rd>');	
		var giftListLength=giftList.length;	
		gift_submit='';
		for ( i=0; i < giftListLength; i++){	
			gift_single=giftList[i];
			gift_single_list=gift_single.split('<fd>');	
			if (gift_submit==''){
				gift_submit=gift_single_list[0]+','+gift_single_list[1]
			}
			else{
				gift_submit=gift_submit+'.'+gift_single_list[0]+','+gift_single_list[1]
			}
		}
	}
	
	
	//----------------------- ppm check
	if (ppm_doc_Str.indexOf('undefined')!=-1){
		ppm_doc_Str=''
		ppm_submit=''
	}else{
		var ppmList=ppm_doc_Str.split('<rd>');	
		var ppmListLength=ppmList.length;	
		ppm_submit='';
		for ( i=0; i < ppmListLength; i++){	
			ppm_single=ppmList[i];
			ppm_single_list=ppm_single.split('<fd>');	
			if (ppm_submit==''){
				ppm_submit=ppm_single_list[0]+','+ppm_single_list[1]
			}
			else{
				ppm_submit=ppm_submit+'.'+ppm_single_list[0]+','+ppm_single_list[1]
			}
		}
	}
	//-------------------------------
	
	
	
	
	
	//if (campaign_submit.indexOf('undefined')==-1){
//		campaign_submit='';
//		
//	}
//	if (gift_submit.indexOf('undefined')==-1){
//		gift_submit='';
//		
//	}
//	if (sample_submit.indexOf('undefined')==-1){
//		sample_submit='';
//		
//	}
//	if (ppm_submit.indexOf('undefined')==-1){
//		ppm_submit='';
//		
//	}
	//------------------------
	campaign_submit=campaign_submit.replace('undefined','').replace(',.','');
	gift_submit=gift_submit.replace('undefined','').replace(',.','');
	sample_submit=sample_submit.replace('undefined','').replace(',.','');
	notes=notes.replace('undefined','').replace(',.','');
	ppm_submit=ppm_submit.replace('undefined','').replace(',.','');
	
	
	
	if (campaign_submit==','){
		campaign_submit='';
		
	}
	if (gift_submit==','){
		gift_submit='';
		
	}
	if (sample_submit==','){
		sample_submit='';
		
	}
	if (ppm_submit==','){
		ppm_submit='';
		
	}
	
	var msg=campaign_submit+'..'+gift_submit+'..'+sample_submit+'..'+notes+'..'+ppm_submit
	//alert (campaign_submit)
//	alert (gift_submit)
//	alert (sample_submit)
//	alert (ppm_submit)
	
	//msg1=msg.replace('undefined','');
	//alert (msg1)
	//$("#errorChkVSubmit").html(msg1);
	//alert (msg);
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var v_with=$("input[name=v_with]:checked").val()
	
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
							
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	
	}
	
	
	if (v_with=='' || v_with==undefined || v_with=='undefined'){
		$("#errorChkVSubmit_doc").html('Visited with not selected');		
	}else{
		
		//if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
//							
//								lat=localStorage.latitude
//								longitude=localStorage.latitude
//								localStorage.location_detail="LastLocation-"+localStorage.location_detail;
//								
//						
//							
//							
//							//$("#errorChkVSubmit").html('Location not Confirmed');	
//							//$("#btn_location").show();	
//							//$("#visit_submit").hide();	
//		}else{
								
								if (visitClientId=='' || visitClientId==undefined){
									$("#errorChkVSubmit_doc").html('Invalid Client');		
								}else{
									if(visit_type=='' || visit_type==undefined){
										$("#errorChkVSubmit_doc").html('Invalid Visit Type');
									}else{
										$("#visit_submit_doc").hide();
										$("#wait_image_visit_submit_doc").show();		
										//alert (localStorage.productOrderStr);
										var marketNameId=localStorage.visit_market_show.split('|');
										var market_Id=marketNameId[1];		
										
										
										//$("#errorChkVSubmit").html(msg1);
										
									// $("#errorChkVSubmit_doc").html(localStorage.base_url+'doctor_visit_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+msg+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id)
										// ajax-------
										//alert (localStorage.payment_mode);
									
									if ( localStorage.location_error!=2){	
										$.post(localStorage.base_url+'check_user?',{cid: localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,client_id:visitClientId,visit_type:visit_type,schedule_date:scheduled_date,msg:msg,lat:lat,long:longitude,v_with:v_with,route:market_Id,location_detail:localStorage.location_detail},
    						 
								
								 function(data, status){
									 if (status!='success'){
										$("#errorChkVSubmit").html('Sorry Network not available');
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();	
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#errorChkVSubmit").html(resultArray[1]);
											$("#wait_image_visit_submit").hide();
											$("#visit_submit").show();
										}
									  else if (resultArray[0]=='SUCCESS'){
															
											//-----------
											localStorage.visit_client=''
											
										
											
											localStorage.visit_page=""
											
											localStorage.productGiftStr='';
											localStorage.campaign_doc_str=''
											localStorage.productSampleStr=''
											localStorage.productppmStr=''
											
											localStorage.campaign_show_1='';
											localStorage.gift_show_1='';
											localStorage.sample_show_1='';
											localStorage.ppm_show_1='';
											
															
											////-------------
											// Clear Campaign and sample
												
												//localStorage.productOrderStr='';
												var productList=localStorage.productListStr.split('<rd>');
												var productLength=productList.length;
												for ( i=0; i < productLength; i++){
													var productArray2 = productList[i].split('<fd>');
													var product_id2=productArray2[0];	
													var product_name2=productArray2[1];
													$("#sample_qty"+product_id2).val('');
													
													
													var camp_combo="#doc_camp"+product_id2
													$(camp_combo).attr('checked', false);
													//alert (product_id2);
												}	
											// Clear Gift
												
												//localStorage.productOrderStr='';
												var giftList=localStorage.gift_string.split('<rd>');
												var giftLength=giftList.length;
												for ( i=0; i < giftLength; i++){
													var giftArray2 = giftList[i].split('<fd>');
													var gift_id2=giftArray2[0];	
													//var product_name2=giftArray2[1];
													$("#gift_qty"+gift_id2).val('');
												}
												// Clear ppm
												
												//localStorage.productOrderStr='';
												var ppmList=localStorage.ppm_string.split('<rd>');
												var ppmLength=ppmList.length;
												for ( i=0; i < ppmLength; i++){
													var ppmArray2 = ppmList[i].split('<fd>');
													var ppm_id2=ppmArray2[0];	
													//var product_name2=ppmArray2[1];
													$("#ppm_qty"+ppm_id2).val('');
													
	
												}	
													
													//====================================
												
												
												$("#doc_feedback").val('');
												
												//$(".market").html('');
												$(".visit_client").html('');
												//--------------------------------------------------------
												$("#errorChkVSubmit").html('');
												$("#lat").val('');
												$("#longitude").val('');
												$("#lscPhoto").val('');
												document.getElementById('myImage').src = '';
												
												$("#lat_p").val('');
												$("#long_p").val('');								
		//										
												//$("#checkLocation").html('');
		//										$("#checkLocationProfileUpdate").html('');
												
												
												
												
												
												$("#errorChkVSubmit_doc").html('');
												$("#wait_image_visit_submit_doc").hide();
												$("#visit_submit_doc").hide();	
												$("#checkLocation_doc").html('');
												$("#btn_location_doc").show();
												
												
												
												//--
										//$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
										$("#visit_success").html('</br></br>Submitted Successfully');
										localStorage.visit_page=''
										
										
										
										
										/// CANCEL ALLcancelVisitPage();
										
											localStorage.campaign_show_1="";
											localStorage.gift_show_1="";
											localStorage.ppm_show_1=""
											localStorage.sample_show_1="";
											
											
											
											localStorage.productGiftStr='';
											localStorage.campaign_doc_str=''
											localStorage.productSampleStr=''
											localStorage.productppmStr='';
											
											set_doc_all();
											$(".visit_client").html('');
										
										
										
										
										//var url = "#page_confirm_visit_success";	
										//$.mobile.navigate(url);
										$.afui.loadContent("#page_confirm_visit_success",true,true,'right');
										//location.reload();
																									
							}else{						
								$("#errorChkVSubmit_doc").html('Network Timeout. Please try again.');
								$("#wait_image_visit_submit_doc").hide();
								$("#visit_submit_doc").show();								
								}
							}
					 });//end post	
					}//error Location
				}
			}
		//  }//locaction check error
	}//Visited with check
	//}//image
  }


//===================Save visit
//-----------------------------Visit Save Start
function visitSave(){
	// alert ("NNNN");
	$("#errorChkVSubmit").text("");
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');


	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//----------------------- marchandizing status check
	if (marchandizingInfoStr==undefined){
		marchandizingInfoStr=''
	}else{
		var marchandizingList=marchandizingInfoStr.split('<rd>');	
		var marchandizingItemLength=marchandizingList.length;	
		var photoRequired="No";
		for (var i=0; i < marchandizingItemLength; i++){		
			var marchandizingArray = marchandizingList[i].split('<fd>');
			var item_status=marchandizingArray[5];	
			if(item_status=='Bad'){
				photoRequired="Yes";
				break;
				}
		}
	}
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	var delivery_date_save=$("#delivery_date").val();
	var collection_date_save=$("#collection_date").val();
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback

	
	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);

	localStorage.payment_mode=$("#payment_mode").val();
	if (photoRequired=='Yes' && lscPhoto==''){
		$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
	}else{
		var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
		

			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					//alert (localStorage.productOrderStr);
					
					//$("#err_save_visit").text(visitClientId+'<fd>'+visit_type+'<fd>'+scheduled_date+'<fd>'+marketInfoStr+'<fd>'+productOrderStr+'<fd>'+marchandizingInfoStr+'<fd>'+campaign_str+'<fd>'+lat+'<fd>'+longitude+'<fd>'+imageName+'<fd>'+localStorage.payment_mode+'<fd>'+chemist_feedback+'<rd>')
					
													
				var save_data = localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+localStorage.payment_mode+'<fdfd>'+chemist_feedback+'<fdfd>'+delivery_date_save+'<fdfd>'+collection_date_save+'<rdrd>';	
													//-----------
							
			// Save data edit========================
			if (localStorage.saved_data_submit==1){
				var visit_save=localStorage.visit_save;
				var saved_data_show=localStorage.saved_data_show;
				var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>",save_data)
				//localStorage.visit_save=visit_save_data;
				localStorage.visit_save=visit_save_data
				after_save_data();
				
			}
			else{
				if (saved_dataArray.length-1 < parseInt(localStorage.save_visit_limit) ){
					localStorage.visit_save=localStorage.visit_save+save_data
					after_save_data();
				}
				else{
					alert ("Your Saved limit is " +localStorage.save_visit_limit );
				}
			}
					
					$.afui.loadContent("#page_confirm_visit_save",true,true,'right');

													
																							
			
			
			}
		}
	
	
	}//end saved data limit
	
}

function after_save_data(){
	localStorage.visit_client=''
	localStorage.marchandizingStr=''
	
	localStorage.marketInfoLSCStr=''
	
	localStorage.marketInfoStr='';
	localStorage.marketInfoSubmitStr='';
	
	localStorage.productOrderStr='';
	localStorage.marchandizingInfoStr='';
	localStorage.visit_camp_list_str='';
	localStorage.visit_camp_submit_str='';
	visitCampaginTempArray=[];
	visitCampaginArray=[];
	
	localStorage.visit_page="";
	
	localStorage.show_total="";
	
	$("#chemist_feedback").val('')
							
							

	//-------------
	// Clear localStorage
		
	localStorage.productOrderStr='';
	cancel_cart();
		

	//--------------------------------------------------------
	$(".visit_client").html('');
	
	$("#errorChkVSubmit").html('');
	$("#lat").val('');
	$("#longitude").val('');
	$("#lscPhoto").val('');
	document.getElementById('myImage').src = '';
	
	$("#lat_p").val('');
	$("#long_p").val('');								
	
	$("#checkLocation").html('');
	$("#checkLocationProfileUpdate").html('');
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	
	$("#product_total_last").html('');
	$("#product_list_tbl_cart").html('');
	$("#product_total_cart").html('');
	$("#item_combo_id").val('Search');
	
	
	
	//--
	$("#visit_save").html('</br><font style="color:#942342;">Saved in your mobile. Please submit from saved order when you have good network. </font>');
	
	
	$("#btn_location").show();	
	$("#visit_submit").hide();
	$("#checkLocation").hide('');
	
}

//================== Show saved visit
function getvisitSave_data(){
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');
	
	var saved_data_list="";
	
	//alert (saved_dataArray.length)
	for (var i=0; i < saved_dataArray.length -1 ; i++){
		var visit_market_show = saved_dataArray[i].split('<fdfd>')[0];
		var visit_client_show = saved_dataArray[i].split('<fdfd>')[1];
		
		localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show
			
	   saved_data_list=saved_data_list+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><table width="100%" border="0"><tr><td width="80%" onClick="set_save_data('+i+')"  >'+'<font style="font-size:14px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+visit_client_show+'</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( '+visit_market_show+' )'+'</td><td>' +'<input type="submit" style="width:100%; height:30px; background-color:#09C; color:#FFF; font-size:15px" onClick="cancelSave('+i+')" value="X"  >' +'</font>' +'</td> </tr></table></li>'
	  // alert (client_id);
														
	}
	var saved_visit=$('#saved_visit');
	
	saved_visit.empty()
	saved_visit.append(saved_data_list);
	//saved_visit.listview("refresh");
	//alert (client_id)												
}


function cancelSave(i){
	var visit_save=localStorage.visit_save
	var saved_data_show=visit_save.split('<rdrd>')[i];
	var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")

	localStorage.visit_save=visit_save_data
	after_save_data()
	
	saved_visit()
}




function set_save_data(i){
	cancel_cart();
	var visit_save=localStorage.visit_save
	var saved_data_show =visit_save.split('<rdrd>')[i];
	localStorage.saved_data_show = saved_data_show;
	
	
	
	
	var saved_data_show_array=saved_data_show.split('<fdfd>')
	
	var market_name = saved_data_show_array[0];
	var visit_client = saved_data_show_array[1];
	
	var visitClientId = saved_data_show_array[2];
	var visit_type = saved_data_show_array[3];
	var scheduled_date = saved_data_show_array[4];
	var marketInfoStr = saved_data_show_array[5];
	var productOrderStr = saved_data_show_array[6];
	var marchandizingInfoStr = saved_data_show_array[7];
	var campaign_str = saved_data_show_array[8];
	var lat = saved_data_show_array[9];
	var longitude = saved_data_show_array[10];
	var imageName = saved_data_show_array[11];
	var payment_mode = saved_data_show_array[12];
	var chemist_feedback = saved_data_show_array[13];
	var delivery_date_show = saved_data_show_array[14];
	var collection_date_show = saved_data_show_array[15];
	
	//alert (delivery_date_show)
	//localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+localStorage.payment_mode+'<fdfd>'+chemist_feedback+'<rdrd>'
	
	
	
	
	localStorage.visit_market_show=market_name
	var market_Id=market_name.split('|')[1];

	
	localStorage.visit_client_show=visit_client
	localStorage.visit_client=visitClientId
	
	localStorage.productOrderStr=productOrderStr
	$("#chemist_feedback").val(chemist_feedback);
	
	
	$(".market").html(market_name);								
	$(".visit_type").html(visit_type);								
	$(".s_date").html(scheduled_date);
	$(".visit_client").html(visit_client);
	
	getOrder_load();
	cart_data();
	
	$("#delivery_date").val(delivery_date_show);
	$("#collection_date").val(collection_date_show);
	$("#chemist_feedback").val(chemist_feedback);
	
	//alert (localStorage.visit_location_flag)
	if (localStorage.visit_location_flag=='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").show();
		$("#visit_submit").hide();
		
	}
	
	//$("#errorChkVSubmit").html('');
//	$("#errorConfiProfileUpdate").html('');
//	$("#errorChkVSubmit_doc").html('');
	$("#visit_submit").hide();
	$("#btn_location").show();
	if (localStorage.visit_location_flag!='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").hide();
		$("#visit_submit").show();
		
	}
	if (localStorage.delivery_date_flag!='YES'){
		$("#delivery_date_div").hide();
	}
	if (localStorage.collection_date_flag!='YES'){
		$("#collection_date_div").hide();
	}
	if (localStorage.payment_date_flag!='YES'){
		$("#payment_date_div").hide();
	}
	if (localStorage.payment_mode_flag!='YES'){
		$("#payment_mode_div").hide();
	}
	
	
	
	localStorage.saved_data_submit=1;
	localStorage.doctor_flag=0;
	if (localStorage.productOrderStr==""){
		//alert (localStorage.productOrderStr);
		$.afui.loadContent("#page_visit",true,true,'right');
		
	}
	else{
		$.afui.loadContent("#page_cart",true,true,'right');
		
	}
	
	
	
}





//-----------------------------Visit Save End

//-----------------Search---------------
function searchMarket() {
	var filter  = $("#unschedule_market_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("market_combo_id_lv").getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}

function searchClient() {
	var filter  = $("#unscheduled_m_client_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("unscheduled_m_client_combo_id_lv").getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function searchProduct() {
	var filter  = $("#item_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("item_combo_id_lv").getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}


function tr_item(product_id){	
	//alert (product_id);
	var order_qty_text="#order_qty"+product_id
	$(order_qty_text).focus();

	}

function check_boxTrue(product_id){	
	//alert (product_id);
	var camp_combo="#doc_camp"+product_id
	var camp_combo_val=$(camp_combo).is(":checked")
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		getDocCampaignData_keyup(product_id)
	}
	else{
		$(camp_combo).prop('checked', false);
		getDocCampaignData_keyup(product_id)
	}
}

function searchCampaign() {

	var filter  = $("#campaign_combo_id").val().toUpperCase();

	 var lis =document.getElementById("campaign_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}

function searchSample() {

	var filter  = $("#sample_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("sample_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function tr_sample(product_id){	
	//alert (product_id);
	var order_qty_text="#sample_qty"+product_id
	$(order_qty_text).focus();

	}
	
function searchPpm() {

	var filter  = $("#ppm_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("ppm_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function tr_ppm(product_id){	
	//alert (product_id);
	var order_qty_text="#ppm_qty"+product_id
	$(order_qty_text).focus();

	}
function searchGift() {

	var filter  = $("#gift_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("gift_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function tr_gift(product_id){	
	//alert (product_id);
	var order_qty_text="#gift_qty"+product_id
	$(order_qty_text).focus();

	}	