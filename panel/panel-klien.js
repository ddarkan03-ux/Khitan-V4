/* Panel Klien – pemoles tampilan saja. Tidak menyentuh data, Firebase, atau logika WhatsApp milik template. */
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var P={
 heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
 users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
 send:'<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
 msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 trash:'<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="m19 6-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
 save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
 edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 out:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>'
};
function ic(n,c){return '<svg class="'+(c||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+P[n]+'</svg>'}
function ready(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f()}

ready(function(){
 try{
  // Header
  var top=$('.top'),jd=$('#jd');
  if(top&&jd&&!$('.pk-eye')){
   var e=document.createElement('div');e.className='pk-eye';e.textContent='Guest Manager';top.insertBefore(e,top.firstChild);
   var o=document.createElement('div');o.className='pk-orn';o.innerHTML=ic('heart');top.appendChild(o);
   var s=document.createElement('p');s.className='pk-sub';s.textContent='Kelola daftar tamu dan ucapan undangan Anda dengan mudah.';top.appendChild(s);
  }
  // Statistik
  var lab=['Total tamu','Sudah dikirim','Total ucapan'],ico=['users','send','msg'];
  $$('.st > div').forEach(function(d,i){
   if(d.querySelector('.pk-i'))return;
   var t=document.createElement('span');t.innerHTML=ic(ico[i]||'users','pk-i');d.insertBefore(t.firstChild,d.firstChild);
   var sp=d.querySelector('span');if(sp&&lab[i])sp.textContent=lab[i];
  });
  // Navigasi
  var ti={tamu:'users',ucapan:'msg',set:'gear'};
  $$('.tabs button').forEach(function(b){if(!b.querySelector('svg')&&ti[b.dataset.t])b.insertAdjacentHTML('afterbegin',ic(ti[b.dataset.t]))});
  // Menu "Data Undangan": tautan ke halaman ubah-sendiri (hanya bila diizinkan oleh paket)
  var tb=$('.tabs'),uu=(window.DATA||{}).ubahUrl;
  if(tb&&uu&&!$('.pk-ubah',tb)){
   var al=document.createElement('a');al.className='pk-ubah';al.href=uu;al.innerHTML=ic('edit')+'<span>Data</span>';al.title='Ubah data undangan';tb.appendChild(al);
  }
  // Pencarian
  var c=$('#cari');
  if(c&&!c.parentNode.classList.contains('pk-srch')){
   var w=document.createElement('div');w.className='pk-srch';c.parentNode.insertBefore(w,c);w.insertAdjacentHTML('beforeend',ic('search'));w.appendChild(c);
   c.setAttribute('aria-label','Cari nama tamu');c.placeholder='Cari nama tamu...';
  }
  // Tombol form
  var a=$('#tAdd');if(a)a.insertAdjacentHTML('afterbegin',ic('plus'));
  var bb=$('#tBulkB');if(bb)bb.insertAdjacentHTML('afterbegin',ic('list'));
  var bs=$('#bSave');if(bs)bs.insertAdjacentHTML('afterbegin',ic('save'));
  var ss=$('#setS');if(ss)ss.insertAdjacentHTML('afterbegin',ic('save'));
  var ou=$('#out');if(ou)ou.insertAdjacentHTML('afterbegin',ic('out'));
  // Petunjuk format tambah banyak
  var bulk=$('#bulk'),bl=bulk&&$('label.l',bulk);
  if(bl&&!$('.pk-hint',bulk)){
   var h=document.createElement('div');h.className='pk-hint';
   h.innerHTML='<b>Format:</b> satu tamu per baris. Nomor WhatsApp (opsional) ditulis setelah koma.<code>Bapak Andi, 0812xxxxxxx\nIbu Rina\nKeluarga Besar Hendra, 0857xxxxxxx</code>';
   bl.parentNode.insertBefore(h,bl.nextSibling);
  }
 }catch(x){}

 // Hiasan daftar tamu (dipasang ulang tiap daftar digambar ulang oleh template)
 var busy=false;
 function hias(){
  if(busy)return;busy=true;
  try{
   $$('#lTamu .g').forEach(function(g){
    if(!g.querySelector('.pk-av')){
     var n=g.querySelector('.n'),nm=(n&&n.firstChild&&n.firstChild.textContent||'').trim(),av=document.createElement('div');
     av.className='pk-av';av.textContent=(nm.charAt(0)||'•').toUpperCase();g.insertBefore(av,g.firstChild);
    }
   });
   var m={wa:'send',pesan:'copy',link:'link',hapus:'trash',hu:'trash'};
   $$('.g button[data-a]').forEach(function(b){if(!b.querySelector('svg')&&m[b.dataset.a])b.insertAdjacentHTML('afterbegin',ic(m[b.dataset.a]))});
  }catch(x){}
  busy=false;
 }
 ['#lTamu','#lUcapan'].forEach(function(s){var el=$(s);if(el)new MutationObserver(hias).observe(el,{childList:true})});
 hias();


 // Konfirmasi hapus yang elegan: menahan klik asli, lalu mengulanginya setelah klien setuju (logika template tidak diubah).
 var lolos=false,nativeConfirm=window.confirm;
 function dialog(judul,teks,ok){
  var o=document.createElement('div');o.className='pk-ov';
  o.innerHTML='<div class="pk-dlg" role="alertdialog" aria-modal="true"><div class="pk-dic">'+ic('trash')+'</div><h3></h3><p></p><div class="pk-dact"><button type="button" class="b o" data-x="n">Batal</button><button type="button" class="b r" data-x="y">Ya, hapus</button></div></div>';
  o.querySelector('h3').textContent=judul;o.querySelector('p').textContent=teks;
  function tutup(){o.classList.remove('on');setTimeout(function(){o.remove()},200);document.removeEventListener('keydown',kd)}
  function kd(e){if(e.key==='Escape')tutup()}
  o.addEventListener('click',function(e){var x=e.target.closest('[data-x]');if(x&&x.dataset.x==='y'){tutup();ok()}else if(x||e.target===o)tutup()});
  document.addEventListener('keydown',kd);document.body.appendChild(o);requestAnimationFrame(function(){o.classList.add('on')});
  o.querySelector('[data-x=n]').focus();
 }
 document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('button[data-a="hapus"],button[data-a="hu"]');
  if(!b||lolos)return;
  e.stopPropagation();e.preventDefault();
  var tamu=b.dataset.a==='hapus',nm='';
  if(tamu){var n=b.closest('.g')&&b.closest('.g').querySelector('.n');nm=n&&n.firstChild?n.firstChild.textContent.trim():''}
  dialog(tamu?'Hapus tamu ini?':'Hapus ucapan ini?',tamu?('"'+nm+'" akan dihapus dari daftar tamu. Tindakan ini tidak dapat dibatalkan.'):'Ucapan ini akan dihapus. Tindakan ini tidak dapat dibatalkan.',function(){
   lolos=true;window.confirm=function(){return true};
   try{b.click()}finally{lolos=false;window.confirm=nativeConfirm}
  });
 },true);

 // Paket Dua Pihak: tombol kirim per pihak. Aktif hanya bila server menandai DATA.duaPihak; template tidak diubah.
 try{(function(){
  var DT=window.DATA||{};
  if(!DT.duaPihak)return;
  document.body.classList.add('pk-dua');
  var pr=(DT.pria&&DT.pria.panggilan)||'',wn=(DT.wanita&&DT.wanita.panggilan)||'',pihak=null;
  // Pesan/link keluar: tambahkan &urut=<pihak> pada link tamu dan samakan urutan nama mempelai.
  function ubahTeks(t,u){
   t=String(t);
   t=t.replace(/(\?to=[^\s&#]*)(?!&urut=)/g,'$1&urut='+u);
   if(pr&&wn&&pr!==wn){var A=pr+' & '+wn,B=wn+' & '+pr;t=t.split(u==='wanita'?A:B).join(u==='wanita'?B:A)}
   return t;
  }
  var wo=window.open;
  window.open=function(u){
   var a=[].slice.call(arguments);
   if(pihak&&typeof u==='string'){var m=u.match(/^(https:\/\/wa\.me\/[^?]*\?text=)([\s\S]*)$/);if(m){try{a[0]=m[1]+encodeURIComponent(ubahTeks(decodeURIComponent(m[2]),pihak))}catch(x){}}}
   return wo.apply(this,a);
  };
  try{var cb=navigator.clipboard;if(cb&&cb.writeText){var wt=cb.writeText.bind(cb);cb.writeText=function(t){return wt(pihak?ubahTeks(t,pihak):t)}}}catch(x){}
  var ec=document.execCommand;
  document.execCommand=function(c){
   if(pihak&&String(c).toLowerCase()==='copy'){
    var el=document.activeElement;
    if(!el||el.tagName!=='TEXTAREA'){var l=document.body.lastElementChild;if(l&&l.tagName==='TEXTAREA')el=l}
    if(el&&el.tagName==='TEXTAREA'){el.value=ubahTeks(el.value,pihak);el.select()}
   }
   return ec.apply(document,arguments);
  };
  // Dua tombol (Pria / Wanita) menggantikan tiap tombol kirim/salin pada daftar tamu. Tombol asli disembunyikan lalu diklik lewat kode.
  var FAM=[
   {row:'#lTamu .g',list:'#lTamu',btn:[['button[data-a="wa"]','Kirim dari pihak ','send'],['button[data-a="pesan"]','Salin pesan, pihak ','copy'],['button[data-a="link"]','Salin link, pihak ','link']]},
   {row:'#tl .r',list:'#tl',btn:[['button[data-k]','Kirim dari pihak ','send'],['button[data-s]','Salin pesan, pihak ','copy']]}
  ];
  function pasang(){
   try{FAM.forEach(function(f){$$(f.row).forEach(function(row){f.btn.forEach(function(d){
    var o=row.querySelector(d[0]);if(!o||o.classList.contains('pk-orig'))return;
    var pre=/pilih/i.test(o.textContent)?'Pilih kontak, pihak ':d[1];
    ['pria','wanita'].forEach(function(u){
     var b=document.createElement('button');b.type='button';b.className=(o.className||'')+' pk-b';b.dataset.pk=u;b._pkOrig=o;
     b.innerHTML=ic(d[2])+'<span></span>';b.lastChild.textContent=pre+(u==='pria'?'Pria':'Wanita');
     o.parentNode.insertBefore(b,o);
    });
    o.classList.add('pk-orig');
   })})})}catch(x){}
  }
  document.addEventListener('click',function(e){
   var b=e.target.closest&&e.target.closest('button.pk-b');if(!b)return;
   e.preventDefault();e.stopPropagation();
   var o=b._pkOrig;if(!o)return;
   pihak=b.dataset.pk;try{o.click()}finally{pihak=null}
  },true);
  FAM.forEach(function(f){var el=$(f.list);if(el)new MutationObserver(pasang).observe(el,{childList:true})});
  pasang();
  var ru=$('#rUr');if(ru&&!$('.pk-info'))ru.insertAdjacentHTML('afterend','<div class="pk-hint pk-info">Paket Dua Pihak: pilih pihak pengirim lewat tombol "Kirim dari pihak Pria / Wanita" di daftar tamu. Nama, rekening, alamat hadiah, dan Keluarga Besar mengikuti pihak yang dipilih.</div>');
 })()}catch(x){}

 // Notifikasi: tandai pesan gagal
 var t=$('#toast');
 if(t)new MutationObserver(function(){
  var x=t.textContent||'';t.classList.toggle('pk-err',/^(terjadi kesalahan|isi nama|nama sudah|tidak ada|tersimpan, tetapi|tidak diizinkan)/i.test(x));
 }).observe(t,{childList:true,characterData:true,subtree:true});
});
})();
