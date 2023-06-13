// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu-btn").onclick = () => {
  navbarNav.classList.toggle("active");
};

const searchform = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchform.classList.toggle("active");
};

const shoppingcart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingcart.classList.toggle("active");
};

// klik luar side-bar

const menu = document.querySelector("#menu-btn");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const cari = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!cari.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }
});

const cart = document.querySelector("#cart-btn");

document.addEventListener("click", function (e) {
  if (!cart.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
  }
});

// detail produk New Arrival
// variabelnya
const itemArinBlouse = document.querySelector("#item-detail-arinblouse");
const itemDescArinBlouse = document.querySelector(".arin-blouse-btn");

const itemPleatedSkirt = document.querySelector("#item-detail-PleatedSkirt");
const itemDescPleatedSkirt = document.querySelector(".pleated-skirt-btn");

const itemSoulJeans = document.querySelector("#item-detail-SoulJeans");
const itemDescSoulJeans = document.querySelector(".soul-jeans-btn");

const itemBlouseShirt = document.querySelector("#item-detail-BlouseShirt");
const itemDescBlouseShirt = document.querySelector(".blouse-shirt-btn");

const itemVintageDress = document.querySelector("#item-detail-VintageDress");
const itemDescVintageDress = document.querySelector(".vintage-dress-btn");

const itemBlouseTwistcone = document.querySelector(
  "#item-detail-BlouseTwistcone"
);
const itemDescBlouseTwistcone = document.querySelector(".blouse-twistcone-btn");

// settings
itemDescArinBlouse.onclick = (e) => {
  itemArinBlouse.style.display = "flex";
  e.preventDefault();
};
itemDescPleatedSkirt.onclick = (e) => {
  itemPleatedSkirt.style.display = "flex";
  e.preventDefault();
};
itemDescSoulJeans.onclick = (e) => {
  itemSoulJeans.style.display = "flex";
  e.preventDefault();
};
itemDescBlouseShirt.onclick = (e) => {
  itemBlouseShirt.style.display = "flex";
  e.preventDefault();
};
itemDescVintageDress.onclick = (e) => {
  itemVintageDress.style.display = "flex";
  e.preventDefault();
};
itemDescBlouseTwistcone.onclick = (e) => {
  itemBlouseTwistcone.style.display = "flex";
  e.preventDefault();
};

// klik tombol close new arrival
// variabel
const arinblouse = document.querySelector(
  ".arin-blouse-detail .desc-container .close-icon"
);
const PleatedSkirt = document.querySelector(
  ".Pleated-Skirt-detail .desc-container .close-icon"
);
const SoulJeans = document.querySelector(
  ".Soul-Jeans-detail .desc-container .close-icon"
);
const BlouseShirt = document.querySelector(
  ".Blouse-Shirt-detail .desc-container .close-icon"
);
const VintageDress = document.querySelector(
  ".vintage-dress-detail .desc-container .close-icon"
);
const BlouseTwistcone = document.querySelector(
  ".Blouse-Twistcone-detail .desc-container .close-icon"
);

// settings
arinblouse.onclick = (e) => {
  itemArinBlouse.style.display = "none";
  e.preventDefault();
};
PleatedSkirt.onclick = (e) => {
  itemPleatedSkirt.style.display = "none";
  e.preventDefault();
};
SoulJeans.onclick = (e) => {
  itemSoulJeans.style.display = "none";
  e.preventDefault();
};
BlouseShirt.onclick = (e) => {
  itemBlouseShirt.style.display = "none";
  e.preventDefault();
};
VintageDress.onclick = (e) => {
  itemVintageDress.style.display = "none";
  e.preventDefault();
};
BlouseTwistcone.onclick = (e) => {
  itemBlouseTwistcone.style.display = "none";
  e.preventDefault();
};

// detail produk TOP
// variabel
const itemFlanelShirt = document.querySelector("#item-detail-FlanelShirt");
const itemDescFlanelShirt = document.querySelector(".flanel-shirt-btn");

const itemAzkaDress = document.querySelector("#item-detail-azkadress");
const itemDescAzkaDress = document.querySelector(".Azka-Dress-btn");

const itemBasicCorduroy = document.querySelector("#item-detail-BasicCorduroy");
const itemDescBasicCorduroy = document.querySelector(".Basic-Corduroy-btn");

const itemNeckDress = document.querySelector("#item-detail-NeckDress");
const itemDescNeckDress = document.querySelector(".Neck-Dress-btn");

const itemCoraWrap = document.querySelector("#item-detail-CoraWrap");
const itemDescCoraWrap = document.querySelector(".cora-wrap-btn");

const itemCrinkleShirt = document.querySelector("#item-detail-CrinkleShirt");
const itemDesCrinkleShirt = document.querySelector(".CrinkleShirt-btn");

const itemTopCorduroy = document.querySelector("#item-detail-topcorduroy");
const itemDescTopCorduroy = document.querySelector(".topcorduroy-btn");

const itemWomenCrinkle = document.querySelector("#item-detail-WomenCrinkle");
const itemDescWomenCrinkle = document.querySelector(".CrinkleWomen-btn");

const itemDressRetro = document.querySelector("#item-detail-DressRetro");
const itemDescDressRetro = document.querySelector(".DressRetro-btn");

const itemLongFloral = document.querySelector("#item-detail-LongFloral");
const itemDescLongFloral = document.querySelector(".LongFloral-btn");

const itemStrippedShirt = document.querySelector("#item-detail-StrippedShirt");
const itemDescStrippedShirt = document.querySelector(".Stripped-Shirt-btn");

const itemCLSBlouse = document.querySelector("#item-detail-ClsBlouse");
const itemDescCLSBlouse = document.querySelector(".CLS-Blouse-btn");

// settings
itemDescFlanelShirt.onclick = (e) => {
  itemFlanelShirt.style.display = "flex";
  e.preventDefault();
};
itemDescAzkaDress.onclick = (e) => {
  itemAzkaDress.style.display = "flex";
  e.preventDefault();
};
itemDescBasicCorduroy.onclick = (e) => {
  itemBasicCorduroy.style.display = "flex";
  e.preventDefault();
};
itemDescNeckDress.onclick = (e) => {
  itemNeckDress.style.display = "flex";
  e.preventDefault();
};
itemDescCoraWrap.onclick = (e) => {
  itemCoraWrap.style.display = "flex";
  e.preventDefault();
};
itemDesCrinkleShirt.onclick = (e) => {
  itemCrinkleShirt.style.display = "flex";
  e.preventDefault();
};
itemDescTopCorduroy.onclick = (e) => {
  itemTopCorduroy.style.display = "flex";
  e.preventDefault();
};
itemDescWomenCrinkle.onclick = (e) => {
  itemWomenCrinkle.style.display = "flex";
  e.preventDefault();
};
itemDescDressRetro.onclick = (e) => {
  itemDressRetro.style.display = "flex";
  e.preventDefault();
};
itemDescLongFloral.onclick = (e) => {
  itemLongFloral.style.display = "flex";
  e.preventDefault();
};
itemDescStrippedShirt.onclick = (e) => {
  itemStrippedShirt.style.display = "flex";
  e.preventDefault();
};
itemDescCLSBlouse.onclick = (e) => {
  itemCLSBlouse.style.display = "flex";
  e.preventDefault();
};

// klik tombol close produk TOP
// variabel
const FlanelShirt = document.querySelector(
  ".Flanel-Shirt-detail .desc-container .close-icon"
);
const azkadress = document.querySelector(
  ".Azka-Dress-detail .desc-container .close-icon"
);
const BasicCorduroy = document.querySelector(
  ".basic-corduroy-detail .desc-container .close-icon"
);
const NeckDress = document.querySelector(
  ".neck-dress-detail .desc-container .close-icon"
);
const CoraWrap = document.querySelector(
  ".cora-wrap-detail .desc-container .close-icon"
);
const CrinkleShirt = document.querySelector(
  ".Crinkle-Shirt-detail .desc-container .close-icon"
);
const topcorduroy = document.querySelector(
  ".top-corduroy-detail  .desc-container .close-icon"
);
const WomenCrinkle = document.querySelector(
  ".women-crinkle-detail .desc-container .close-icon"
);
const DressRetro = document.querySelector(
  ".Dress-Retro-detail .desc-container .close-icon"
);
const LongFloral = document.querySelector(
  ".Long-Floral-detail .desc-container .close-icon"
);
const StrippedShirt = document.querySelector(
  ".Stripped-Shirt-detail .desc-container .close-icon"
);
const KoreanCLSBLouse = document.querySelector(
  ".korean-clsblouse-detail .desc-container .close-icon"
);

// settings
FlanelShirt.onclick = (e) => {
  itemFlanelShirt.style.display = "none";
  e.preventDefault();
};
azkadress.onclick = (e) => {
  itemAzkaDress.style.display = "none";
  e.preventDefault();
};
BasicCorduroy.onclick = (e) => {
  itemBasicCorduroy.style.display = "none";
  e.preventDefault();
};
NeckDress.onclick = (e) => {
  itemNeckDress.style.display = "none";
  e.preventDefault();
};
CoraWrap.onclick = (e) => {
  itemCoraWrap.style.display = "none";
  e.preventDefault();
};
CrinkleShirt.onclick = (e) => {
  itemCrinkleShirt.style.display = "none";
  e.preventDefault();
};
topcorduroy.onclick = (e) => {
  itemTopCorduroy.style.display = "none";
  e.preventDefault();
};
WomenCrinkle.onclick = (e) => {
  itemWomenCrinkle.style.display = "none";
  e.preventDefault();
};
DressRetro.onclick = (e) => {
  itemDressRetro.style.display = "none";
  e.preventDefault();
};
LongFloral.onclick = (e) => {
  itemLongFloral.style.display = "none";
  e.preventDefault();
};
StrippedShirt.onclick = (e) => {
  itemStrippedShirt.style.display = "none";
  e.preventDefault();
};
KoreanCLSBLouse.onclick = (e) => {
  itemCLSBlouse.style.display = "none";
  e.preventDefault();
};

// detail produk Bottom
// variabel
const itemCombiSkirt = document.querySelector("#item-detail-CombiSkirt");
const itemDescCombiSkirt = document.querySelector(".Combi-Skirt-btn");

const itemLilyPlisket = document.querySelector("#item-detail-LilyPlisket");
const itemDescLilyPlisket = document.querySelector(".LilyPlisket-btn");

const itemCargoPants = document.querySelector("#item-detail-CargoPants");
const itemDescCargoPants = document.querySelector(".cargo-pants-btn");

const itemDrillPants = document.querySelector("#item-detail-DrillPants");
const itemDescDrillPants = document.querySelector(".drill-pants-btn");

const itemCullotePants = document.querySelector("#item-detail-CullotePants");
const itemDescCullotePants = document.querySelector(".CullotePants-btn");

const itemLC = document.querySelector("#item-detail-LC");
const itemDescLC = document.querySelector(".LC-btn");

const itemGisko = document.querySelector("#item-detail-Gisko");
const itemDescGisko = document.querySelector(".Gisko-btn");

const itemHWDenim = document.querySelector("#item-detail-HWDenim");
const itemDescHWDenim = document.querySelector(".HWDenim-btn");

const itemHWBaggy = document.querySelector("#item-detail-HWBaggy");
const itemDescHWBaggy = document.querySelector(".HWBaggy-btn");

const itemKoreanSkirt = document.querySelector("#item-detail-KoreanSkirt");
const itemDescKoreanSkirt = document.querySelector(".KoreanSkirt-btn");

const itemLegLoose = document.querySelector("#item-detail-legloose");
const itemDescLegLoose = document.querySelector(".LegLoose-btn");

const itemLoosePants = document.querySelector("#item-detail-LoosePants");
const itemDescLoosePants = document.querySelector(".LoosePants-btn");

// settings
itemDescCombiSkirt.onclick = (e) => {
  itemCombiSkirt.style.display = "flex";
  e.preventDefault();
};
itemDescLilyPlisket.onclick = (e) => {
  itemLilyPlisket.style.display = "flex";
  e.preventDefault();
};
itemDescCargoPants.onclick = (e) => {
  itemCargoPants.style.display = "flex";
  e.preventDefault();
};
itemDescDrillPants.onclick = (e) => {
  itemDrillPants.style.display = "flex";
  e.preventDefault();
};
itemDescCullotePants.onclick = (e) => {
  itemCullotePants.style.display = "flex";
  e.preventDefault();
};
itemDescLC.onclick = (e) => {
  itemLC.style.display = "flex";
  e.preventDefault();
};
itemDescGisko.onclick = (e) => {
  itemGisko.style.display = "flex";
  e.preventDefault();
};
itemDescHWDenim.onclick = (e) => {
  itemHWDenim.style.display = "flex";
  e.preventDefault();
};
itemDescHWBaggy.onclick = (e) => {
  itemHWBaggy.style.display = "flex";
  e.preventDefault();
};
itemDescKoreanSkirt.onclick = (e) => {
  itemKoreanSkirt.style.display = "flex";
  e.preventDefault();
};
itemDescLegLoose.onclick = (e) => {
  itemLegLoose.style.display = "flex";
  e.preventDefault();
};
itemDescLoosePants.onclick = (e) => {
  itemLoosePants.style.display = "flex";
  e.preventDefault();
};

// klik tombol close produk TOP
// variabel
const CombiSkirt = document.querySelector(
  ".combi-skirt-detail .desc-container .close-icon"
);
const LilyPlisket = document.querySelector(
  ".Lily-plisket-detail .desc-container .close-icon"
);
const CargoPants = document.querySelector(
  ".Cargo-Pants-detail .desc-container .close-icon"
);
const DrillPants = document.querySelector(
  ".Drill-Pants-detail .desc-container .close-icon"
);
const CullotePants = document.querySelector(
  ".Cullote-Pants-detail .desc-container  .close-icon"
);
const LC = document.querySelector(".LC-detail .desc-container .close-icon");
const gisko = document.querySelector(
  ".Gisko-detail .desc-container .close-icon"
);
const HWDenim = document.querySelector(
  ".HWDenim-detail .desc-container .close-icon"
);
const HWBaggy = document.querySelector(
  ".HWBaggy-detail .desc-container .close-icon"
);
const KoreanSkirt = document.querySelector(
  ".KoreanSkirt-detail .desc-container .close-icon"
);
const LegLoose = document.querySelector(
  ".legloose-detail .desc-container .close-icon"
);
const LoosePants = document.querySelector(
  ".LoosePants-detail .desc-container .close-icon"
);

// settings
CombiSkirt.onclick = (e) => {
  itemCombiSkirt.style.display = "none";
  e.preventDefault();
};
LilyPlisket.onclick = (e) => {
  itemLilyPlisket.style.display = "none";
  e.preventDefault();
};
CargoPants.onclick = (e) => {
  itemCargoPants.style.display = "none";
  e.preventDefault();
};
DrillPants.onclick = (e) => {
  itemDrillPants.style.display = "none";
  e.preventDefault();
};
CullotePants.onclick = (e) => {
  itemCullotePants.style.display = "none";
  e.preventDefault();
};
LC.onclick = (e) => {
  itemLC.style.display = "none";
  e.preventDefault();
};
gisko.onclick = (e) => {
  itemGisko.style.display = "none";
  e.preventDefault();
};
HWDenim.onclick = (e) => {
  itemHWDenim.style.display = "none";
  e.preventDefault();
};
HWBaggy.onclick = (e) => {
  itemHWBaggy.style.display = "none";
  e.preventDefault();
};
KoreanSkirt.onclick = (e) => {
  itemKoreanSkirt.style.display = "none";
  e.preventDefault();
};
LegLoose.onclick = (e) => {
  itemLegLoose.style.display = "none";
  e.preventDefault();
};
LoosePants.onclick = (e) => {
  itemLoosePants.style.display = "none";
  e.preventDefault();
};
