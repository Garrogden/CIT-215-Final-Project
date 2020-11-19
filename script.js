var app = new Vue({
  el: "#instStore",
  data: {
    itemName: "",
    itemType: "",
    itemPrice: "",
    itemBrand: "",
    itemImg: "",
    showForm: false,
    emptyStore: false,
    showItem: false,
    theCart: [],
    theItems: {},
    instruments: [
      {
        noImg: false,
        name: "Stratocaster",
        type: "Percussin",
        price: "219.99",
        brand: "Fender",
        img:
          "https://cdn.shopify.com/s/files/1/0268/0972/9087/products/f4bc1516-2f96-4b36-83f3-8dec6299c605_1024x1024.jpg?v=1604252251"
      },

      {
        noImg: false,
        name: "Electric Violin",
        type: "String",
        price: "6,129.84",
        brand: "Fender",
        img:
          "https://images.reverb.com/image/upload/s--1Ly0pk73--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1450379109/zig0cc2vlznlusbf8b5o.jpg"
      },

      {
        noImg: false,
        name: "Yamaha YPG-535",
        type: "Keyboard",
        price: "549.99",
        brand: "Yamaha",
        img:
          "https://media.musiciansfriend.com/is/image/MMGS7/YPG-535-88-Key-Portable-Grand-Piano-Keyboard/706175000000000-00-500x500.jpg"
      },

      {
        noImg: false,
        name: "Tour Custome",
        type: "Brass",
        price: "1,299.99",
        brand: "Yamaha",
        img:
          "https://images-na.ssl-images-amazon.com/images/I/91Ew8zLNJ5L._AC_SL1500_.jpg"
      },

      {
        noImg: false,
        name: "Concert Ukulele",
        type: "Percussin",
        price: "329.99",
        brand: "Maton",
        img:
          "https://themusic-images-originals.sgp1.digitaloceanspaces.com/standard/Gear/2012-March/concert-ukulele.jpg"
      },

      {
        noImg: false,
        name: "Accoustic",
        type: "Percussin",
        price: "1,449.00",
        brand: "Maton",
        img:
          "https://maton.com.au/images/made/assets/uploads/products/S70-P1310145_600_850_s_c1_c_t.jpg"
      }
    ]
  },

  methods: {
    addCart: function (instrument, index) {
      this.theCart.push(instrument);
      this.instruments.splice(index, 1);
    },

    removeAll: function () {
      this.instruments = this.instruments.concat(this.theCart);
      this.theCart = [];
    },

    instrumentInfo: function (instrument) {
      this.showItem = true;
      this.item = instrument;
    },

    exitForm: function () {
      this.showForm = false;
      this.itemName = "";
      this.itemType = "";
      this.itemPrice = "";
      this.itemBrand = "";
    },

    addInstrument: function () {
      this.instruments.push({
        name: this.itemName,
        type: this.itemType,
        price: this.itemPrice,
        brand: this.itemBrand,
        img: this.itemImg,
        noImg: true
      });

      (this.itemName = ""),
        (this.itemType = ""),
        (this.itemPrice = ""),
        (this.itemBrand = ""),
        (this.showForm = false);
    }
  },

  watch: {
    instruments: function () {
      if (this.instruments.length <= 0) {
        this.emptyStore = true;
      } else {
        this.emptyStore = false;
      }
    }
  }
});