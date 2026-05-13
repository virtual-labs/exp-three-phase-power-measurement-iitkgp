
/////////////////////////////// The code starts from here/////////////////////////////////////
var ccc=0;
var z=[],zy=[],zr=[],zb=[],vby=[],ibc=[],vry=[],irc=[],wc,w11,w12,wm;
var f,w,vyb,ib,ir,iy;
function execute_ckt2()
	{
		//document.f1.A1.value=0;
		//var R=[], v=[], r4=[], v1=[], l1=[], c3=[], f1,m1=[];
		//var  z=[], z2=[], z1=[], i=[], i2=[], i1=[], dv=[], dvv;
		var kk=1;
		f=parseFloat(document.getElementById('f11').value);
		w= 2*3.141*f;
		vry[0]=parseFloat(document.getElementById('vry').value); vry[1]=0;
		vyb=parseFloat(document.getElementById('vyb').value);
		zr[0]=parseFloat(document.getElementById('r11').value); zr[1]=w*14*0.00001* (parseFloat(document.getElementById('r11').value) /26);
		zy[0]=parseFloat(document.getElementById('r12').value); zy[1]=w*14*0.00001* (parseFloat(document.getElementById('r12').value) /26);
		zb[0]=parseFloat(document.getElementById('r13').value); zb[1]=w*14*0.00001* (parseFloat(document.getElementById('r13').value) /26);
		
		// 1st part
		z= add(add(mult(zr,zy), mult(zy,zb)), mult(zb,zr) );
		vby=[vyb*Math.cos(2.0953) , vyb*Math.sin(2.0953)];	
		//2nd part
		ibc= div(add(mult(vby,add(zr,zy)), mult(mult(vry,zy),[-1,0])), z);
		ib=mod(ibc);
		irc= div(add(mult(vry,add(zb,zy)), mult(mult(vby,zy),[-1,0])), z);
		ir=mod(irc);
		iy=ib;
		//3rd part
		wc = (mod(mult(irc,zr)) * ir) + (mod(mult(ibc,zy)) * iy) + (mod(mult(ibc,zb)) * ib);
		w11 = 2 + (wc/2);
		w12 =  (0.9 - 1.2) + (wc/2);
		wm = w11 + w12;
		if (ir > 5 || isNaN(ir))
		{	kk=0;
			var fuse = document.getElementById('led2');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
		}
		if(iy > 5 || isNaN(iy))
		{
			kk=0;
			var fuse = document.getElementById('led3');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
		}
		if(ib > 5 || isNaN(ib))
		{
			kk=0;
			var fuse = document.getElementById('led4');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
		}
		if(kk==1)
		{
			document.f1.V11.value= vry[0];
			document.f1.A11.value= ir;
			document.f1.A12.value= iy;
			document.f1.A13.value= ib;
			document.f1.W11.value = w11; 
			document.f1.W12.value = w12; 
			document.f1.V21.value = mod(mult(irc,zr));
			document.f1.V22.value = mod(mult(ibc,zy));
			document.f1.V23.value = mod(mult(ibc,zb));
		}
		else
		{
			changeImage2();
		}
		
		/* perform_meter1(); perform_meter2(); perform_meter3(); 
		perform_meter4(); perform_meter5(); */
		
	}

function changeImage2() {

		var image1 = document.getElementById('myImage1');
		var im1= document.getElementById('vry');
		var im2= document.getElementById('vyb');
		var im3= document.getElementById('f11');
		var im4= document.getElementById('r11');
		var im5= document.getElementById('r12');
		var im6= document.getElementById('r13');
		if (image1.src.match("s1")) {
			image1.src = "./images/s3.png"; 
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); im3.setAttribute('readonly', 'readonly');
			im4.setAttribute('readonly', 'readonly'); im5.setAttribute('readonly', 'readonly'); im6.setAttribute('readonly', 'readonly');
			execute_ckt2();
		} else {
			image1.src = "./images/s1.png"; 
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); im3.removeAttribute('readonly');
			im4.removeAttribute('readonly'); im5.removeAttribute('readonly'); im6.removeAttribute('readonly');
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
		if(image.src.match("s1")){
			Alert.render("Please switch on the supply first to get the readings.");
			return;
		}
		else
		{
			ccc=ccc+1;
			if(ccc==1)
			{
				document.f1.c1a.value= mod(mult(irc,zr)); document.f1.c1b.value=  mod(mult(ibc,zy)); document.f1.c1c.value= mod(mult(ibc,zb));
				document.f1.c1d.value= ir; document.f1.c1e.value= iy; document.f1.c1f.value= ib;
				document.f1.c1g.value= wc; document.f1.c1h.value= w11; document.f1.c1i.value= w12;
				document.f1.c1j.value= wm;
			}
			else if(ccc==2)
			{
				document.f1.c2a.value= mod(mult(irc,zr)); document.f1.c2b.value=  mod(mult(ibc,zy)); document.f1.c2c.value= mod(mult(ibc,zb));
				document.f1.c2d.value= ir; document.f1.c2e.value= iy; document.f1.c2f.value= ib;
				document.f1.c2g.value= wc; document.f1.c2h.value= w11; document.f1.c2i.value= w12;
				document.f1.c2j.value= wm;
			}
			else if(ccc==3)
			{
				document.f1.c3a.value= mod(mult(irc,zr)); document.f1.c3b.value=  mod(mult(ibc,zy)); document.f1.c3c.value= mod(mult(ibc,zb));
				document.f1.c3d.value= ir; document.f1.c3e.value= iy; document.f1.c3f.value= ib;
				document.f1.c3g.value= wc; document.f1.c3h.value= w11; document.f1.c3i.value= w12;
				document.f1.c3j.value= wm;
			}
			else if(ccc==4)
			{
				document.f1.c4a.value= mod(mult(irc,zr)); document.f1.c4b.value=  mod(mult(ibc,zy)); document.f1.c4c.value= mod(mult(ibc,zb));
				document.f1.c4d.value= ir; document.f1.c4e.value= iy; document.f1.c4f.value= ib;
				document.f1.c4g.value= wc; document.f1.c4h.value= w11; document.f1.c4i.value= w12;
				document.f1.c4j.value= wm;
			}
			else
			{
				document.f1.c5a.value= mod(mult(irc,zr)); document.f1.c5b.value=  mod(mult(ibc,zy)); document.f1.c5c.value= mod(mult(ibc,zb));
				document.f1.c5d.value= ir; document.f1.c5e.value= iy; document.f1.c5f.value= ib;
				document.f1.c5g.value= wc; document.f1.c5h.value= w11; document.f1.c5i.value= w12;
				document.f1.c5j.value= wm;
			}
			changeImage2();
		}
		
	}
	

function add(x,y)
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
}
function change_led2() 
{
	var fuse1 = document.getElementById('led2');
	var fuse2 = document.getElementById('led3');
	var fuse3 = document.getElementById('led4');
	fuse1.src = "./images/led_on.png"; 
	fuse2.src = "./images/led_on.png"; 
	fuse3.src = "./images/led_on.png"; 
	document.f1.r11.value = 50;
	document.f1.r12.value = 50;
	document.f1.r13.value = 50;
}



