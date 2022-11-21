
/////////////////////////////// The code starts from here/////////////////////////////////////
var cc=0;
var f,w,vl,R1,L,ZL,vyp,vrp,vbp,i1,w1_theta,w2_theta,W1,W2,WC,Wm,theta;

function execute_ckt1()
	{
		//document.f1.A1.value=0;
		//var R=[], v=[], r4=[], v1=[], l1=[], c3=[], f1,m1=[];
		//var  z=[], z2=[], z1=[], i=[], i2=[], i1=[], dv=[], dvv;
		var zz=[];
		f=parseFloat(document.getElementById('f').value);
		w= 2*3.141*f;
		vl=parseFloat(document.getElementById('v').value);
		R1=parseFloat(document.getElementById('R').value);
		L=((14*0.00001)*R1) / 26;
		zz[0]=R1;
		zz[1]=(w * L);
		ZL = Math.sqrt((zz[0]*zz[0]) + (zz[1]*zz[1]));
		theta = Math.atan(zz[1]/zz[0]);
		
		vrp=vl/Math.sqrt(3);
		vyp=vl/Math.sqrt(3);
		vbp=vl/Math.sqrt(3);
		i1=vrp/ZL;
		//var i2=i1, i3=i1;
		w1_theta=Math.cos(0.5235+theta);
		w2_theta=Math.cos(0.5235-theta);
		W1=vl*i1*w1_theta;
		W2=vl*i1*w2_theta;
		WC=Math.sqrt(3)*vl*i1*Math.cos(theta);
		Wm=W1+W2;
		//var VRe=vl;
		if (i1 > 5 || isNaN(i1))
		{
			var fuse = document.getElementById('led1');
			fuse.src = "./images/led_off.png";
			fuse.style["cursor"] = "pointer";
			Alert.render('Click on the fuse indicator to repair it and increase the resistance value.');
			changeImage1();
		}
		else
		{
			document.f1.A1.value= i1;
			document.f1.A3.value= i1;
			document.f1.W1.value = W1; 
			document.f1.W2.value = W2; 
			document.f1.V1.value = vl;
			perform_meter1(); perform_meter2(); perform_meter3(); 
			perform_meter4(); perform_meter5();
		}
	}

function changeImage1() {

		var image = document.getElementById('myImage');
		var im1= document.getElementById('v');
		var im2= document.getElementById('f');
		var im3= document.getElementById('R');
		if (image.src.match("s1")) {
			image.src = "./images/s2.png"; 
			im1.setAttribute('readonly', 'readonly'); im2.setAttribute('readonly', 'readonly'); im3.setAttribute('readonly', 'readonly');
			execute_ckt1();
		} else {
			image.src = "./images/s1.png"; 
			im1.removeAttribute('readonly'); im2.removeAttribute('readonly'); im3.removeAttribute('readonly');
			document.f1.W1.value = 0; document.f1.W2.value = 0; document.f1.V1.value = 0;
			document.f1.A1.value = 0; document.f1.A3.value = 0;
			perform_meter1(); perform_meter2(); perform_meter3(); perform_meter4(); perform_meter5();
		}
	}
function simulate_rc1() {
		var image = document.getElementById('myImage');
		
		if(image.src.match("s1")){
			Alert.render("Please switch on the supply first to get the readings.");
			return;
		}
		else
		{
			cc = cc+1;
			if(cc==1)
			{
				document.f1.t1a.value= vl; document.f1.t1b.value= i1; document.f1.t1c.value= w1_theta;
				document.f1.t1d.value= vl; document.f1.t1e.value= i1; document.f1.t1f.value= w2_theta;
				document.f1.t1g.value= i1; document.f1.t1h.value= W1; document.f1.t1i.value= W2;
				document.f1.t1j.value= WC; document.f1.t1k.value= Wm;
			}
			else if(cc==2)
			{
				document.f1.t2a.value= vl; document.f1.t2b.value= i1; document.f1.t2c.value= w1_theta;
				document.f1.t2d.value= vl; document.f1.t2e.value= i1; document.f1.t2f.value= w2_theta;
				document.f1.t2g.value= i1; document.f1.t2h.value= W1; document.f1.t2i.value= W2;
				document.f1.t2j.value= WC; document.f1.t2k.value= Wm;
			}
			else if(cc==3)
			{
				document.f1.t3a.value= vl; document.f1.t3b.value= i1; document.f1.t3c.value= w1_theta;
				document.f1.t3d.value= vl; document.f1.t3e.value= i1; document.f1.t3f.value= w2_theta;
				document.f1.t3g.value= i1; document.f1.t3h.value= W1; document.f1.t3i.value= W2;
				document.f1.t3j.value= WC; document.f1.t3k.value= Wm;
			}
			else if(cc==4)
			{
				document.f1.t4a.value= vl; document.f1.t4b.value= i1; document.f1.t4c.value= w1_theta;
				document.f1.t4d.value= vl; document.f1.t4e.value= i1; document.f1.t4f.value= w2_theta;
				document.f1.t4g.value= i1; document.f1.t4h.value= W1; document.f1.t4i.value= W2;
				document.f1.t4j.value= WC; document.f1.t4k.value= Wm;
			}
			else
			{
				document.f1.t5a.value= vl; document.f1.t5b.value= i1; document.f1.t5c.value= w1_theta;
				document.f1.t5d.value= vl; document.f1.t5e.value= i1; document.f1.t5f.value= w2_theta;
				document.f1.t5g.value= i1; document.f1.t5h.value= W1; document.f1.t5i.value= W2;
				document.f1.t5j.value= WC; document.f1.t5k.value= Wm;
			}
			changeImage1();
		}
}
function change_led1() 
{
	var fuse = document.getElementById('led1');
	fuse.src = "./images/led_on.png"; 
	document.f1.R.value = 25;
}
	




