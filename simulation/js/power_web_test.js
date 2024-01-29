
/////////////////////////////// The code starts from here/////////////////////////////////////
var ccc=0;
var wc,w11,w12,wm;
var f,w,vyb,ib,ir,iy,vrb,vry,kk=0;
 //zb[1]=w*14*0.00001* (parseFloat(document.getElementById('r13').value) /26);
function execute_ckt2()

	{
		
		var zr=parseFloat(document.getElementById('r11').value); 
		var zy=parseFloat(document.getElementById('r12').value);
		var zb=parseFloat(document.getElementById('r13').value);
		
		
		//var kk=1;
		f=parseFloat(document.getElementById('f11').value);
		w= 2*3.141*f;
		vry=parseFloat(document.getElementById('vry').value); 
		vyb=parseFloat(document.getElementById('vyb').value);
		vrb=parseFloat(document.getElementById('vrb').value);
		
		
		// 1st part
		var PLC = vry;
		var LZ1 = PLC/zr;
		var LZ2 = PLC/zy;
		var LZ3 = PLC/zb;
		var RZ1 = LZ1*Math.cos(0);
		var RZ2 = LZ2*Math.cos((-2*Math.PI)/3);
		var RZ3 = LZ3*Math.cos((2*Math.PI)/3);
		var IZ1 = LZ1*Math.sin(0);
		var IZ2 = LZ2*Math.sin((-2*Math.PI)/3);
		var IZ3 = LZ3*Math.sin((2*Math.PI)/3);
		
		var TRZ = RZ1+RZ2+RZ3;
		var TIZ = IZ1+IZ2+IZ3;
		var LZ = ((TRZ*TRZ)+(TIZ*TIZ));
		var MLZ = Math.sqrt(LZ);
		var ALZ = Math.atan2(TIZ,TRZ)* (180/Math.PI);
		var Z1 =1/zr;
		var Z2 =1/zy;
		var Z3 =1/zb;
		var Z = (Z1+Z2+Z3);
		var Vn = MLZ/Z;
		
		
		
		//calculation of Ir//
		var VnR = Vn*Math.cos(ALZ);
		var VnI = Vn*Math.sin(ALZ);
		var IRS = vry-VnR;
		var FC1 = ((IRS*IRS)+(VnI*VnI));
		var UC1 = Math.sqrt(FC1);
		ir = UC1/zr;
		
		//calculation of Iy//
		var IyR = vry*Math.cos((-2*Math.PI)/3);
		var IyI = vry*Math.sin((-2*Math.PI)/3);
		var IyRS = IyR-VnR;
		var IyIS = IyI-VnI;
		var FC2 =  ((IyRS*IyRS)+(IyIS*IyIS));
		var UC2 = Math.sqrt(FC2);
		iy = UC2/zy;
		
		
		//calculation of Ib//
		var IbR = vry*Math.cos((2*Math.PI)/3);
		var IbI = vry*Math.sin((2*Math.PI)/3);
		var IbRS = IbR-VnR;
		var IbIS = IbI-VnI;
		var FC3 =  ((IbRS*IbRS)+(IbIS*IbIS));
		var UC3 = Math.sqrt(FC3);
		ib = UC3/zy;
		
		
		//3rd part
		wc = ((ir*zr) * ir) + ((iy*zy) * iy) + ((ib*zb) * ib);
		w11 = 2 + (wc/2);
		w12 =  (0.9 - 1.2) + (wc/2);
		wm = w11 + w12;
		if (ir > 5 || isNaN(ir))
		{	//kk=0;
	        var image1 = document.getElementById('myImage1');
			image1.src = "./images/s1.png";
			var fuse = document.getElementById('led2');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
		}
		if(iy > 5 || isNaN(iy))
		{
			//kk=0;
			var image1 = document.getElementById('myImage1');
			image1.src = "./images/s1.png";
			var fuse = document.getElementById('led3');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
		}
		if(ib > 5 || isNaN(ib))
		{
			//kk=0;
			var image1 = document.getElementById('myImage1');
			image1.src = "./images/s1.png";
			var fuse = document.getElementById('led4');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
		}
		//if(kk==1)
		//{*/
	else{
			document.f1.V11.value= vry;
			document.f1.A11.value= ir;
			document.f1.A12.value= iy;
			document.f1.A13.value= ib;
			document.f1.W11.value = w11; 
			document.f1.W12.value = w12; 
			document.f1.V21.value = (ir*zr);
			document.f1.V22.value = (iy*zy);
			document.f1.V23.value = (ib*zb);
		}
		//else
		//{
			//changeImage2();
		//}
		
		/* perform_meter1(); perform_meter2(); perform_meter3(); 
		perform_meter4(); perform_meter5(); */
		
	}

function changeImage2() {

		var image1 = document.getElementById('myImage1');
		var mc = document.getElementById('main_ckt');
		var im1= document.getElementById('vry');
		var im2= document.getElementById('vyb');
		var im3= document.getElementById('vrb');
		var im4= document.getElementById('f11');
		var im5= document.getElementById('r11');
		var im6= document.getElementById('r12');
		var im7= document.getElementById('r13');
		
		if (image1.src.match("s1")) {
			image1.src = "./images/s3.png";
                        mc.src = "./images/4watt2.jpg";			
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); im3.setAttribute('readonly', 'readonly');
			im4.setAttribute('readonly', 'readonly'); im5.setAttribute('readonly', 'readonly'); im6.setAttribute('readonly', 'readonly');im7.setAttribute('readonly', 'readonly');
			execute_ckt2();
		} else {
			image1.src = "./images/s1.png"; 
			mc.src = "./images/4watt.jpg";
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); im3.removeAttribute('readonly');
			im4.removeAttribute('readonly'); im5.removeAttribute('readonly'); im6.removeAttribute('readonly');im7.removeAttribute('readonly');
			document.f1.V11.value= 0;
			document.f1.A11.value= 0;
			document.f1.A12.value= 0;
			document.f1.A13.value= 0;
			document.f1.W11.value = 0; 
			document.f1.W12.value = 0; 
			document.f1.V21.value = 0;
			document.f1.V22.value = 0;
			document.f1.V23.value = 0;
			//perform_meter1(); perform_meter2(); perform_meter3(); perform_meter4(); perform_meter5();
		}
	}
function simulate_rc2() {
		var image = document.getElementById('myImage1');
		var zr=parseFloat(document.getElementById('r11').value); 
		var zy=parseFloat(document.getElementById('r12').value);
		var zb=parseFloat(document.getElementById('r13').value);
		if(image.src.match("s1")){
			Alert.render("Please switch on the supply first to get the readings.");
			return;
		}
		else
		{
			ccc=ccc+1;
			if(ccc==1)
			{
				document.f1.c1a.value= (ir*zr); document.f1.c1b.value=  (iy*zy); document.f1.c1c.value= (ib*zb);
				document.f1.c1d.value= ir; document.f1.c1e.value= iy; document.f1.c1f.value= ib;
				document.f1.c1g.value= wc; document.f1.c1h.value= w11; document.f1.c1i.value= w12;
				document.f1.c1j.value= wm;
			}
			else if(ccc==2)
			{
				document.f1.c2a.value= (ir*zr); document.f1.c2b.value=  (iy*zy); document.f1.c2c.value= (ib*zb);
				document.f1.c2d.value= ir; document.f1.c2e.value= iy; document.f1.c2f.value= ib;
				document.f1.c2g.value= wc; document.f1.c2h.value= w11; document.f1.c2i.value= w12;
				document.f1.c2j.value= wm;
			}
			else if(ccc==3)
			{
				document.f1.c3a.value= (ir*zr); document.f1.c3b.value=  (iy*zy); document.f1.c3c.value= (ib*zb);
				document.f1.c3d.value= ir; document.f1.c3e.value= iy; document.f1.c3f.value= ib;
				document.f1.c3g.value= wc; document.f1.c3h.value= w11; document.f1.c3i.value= w12;
				document.f1.c3j.value= wm;
			}
			else if(ccc==4)
			{
				document.f1.c4a.value= (ir*zr); document.f1.c4b.value=  (iy*zy); document.f1.c4c.value= (ib*zb);
				document.f1.c4d.value= ir; document.f1.c4e.value= iy; document.f1.c4f.value= ib;
				document.f1.c4g.value= wc; document.f1.c4h.value= w11; document.f1.c4i.value= w12;
				document.f1.c4j.value= wm;
			}
			else
			{
				document.f1.c5a.value= (ir*zr); document.f1.c5b.value=  (iy*zy); document.f1.c5c.value= (ib*zb);
				document.f1.c5d.value= ir; document.f1.c5e.value= iy; document.f1.c5f.value= ib;
				document.f1.c5g.value= wc; document.f1.c5h.value= w11; document.f1.c5i.value= w12;
				document.f1.c5j.value= wm;
			}
			changeImage2();
		}
		
	}
	

/*function add(x,y)
{ 
	var z=[];
	z[0]=x[0] + y[0];
	z[1]=x[1] + y[1];
	return z;
}
function mult(x,y)
{ 
	var z=[];
	z[0]=(x[0] * y[0]) - (x[1] * y[1]);
	z[1]=(x[0] * y[1]) + (x[1] * y[0]);
	return z;
}
function div(x,y)
{ 
	var z=[]; var t=[];
	t[0]=(y[0]) / ((y[0] * y[0]) + (y[1] * y[1]));
	t[1]=(-1 * y[1]) / ((y[0] * y[0]) + (y[1] * y[1]));
	z=mult(x,t);
	return z;
}
function mod(dv)
{
	var modx;
	modx = Math.sqrt((dv[0] * dv[0]) + (dv[1] * dv[1]));
	return modx;
}*/
function change_led2() 
{
	var fuse1 = document.getElementById('led2');
	var fuse2 = document.getElementById('led3');
	var fuse3 = document.getElementById('led4');
	fuse1.src = "./images/led_on.png"; 
	fuse2.src = "./images/led_on.png"; 
	fuse3.src = "./images/led_on.png"; 
	document.f1.r11.value = 120;
	document.f1.r12.value = 160;
	document.f1.r13.value = 180;
}



