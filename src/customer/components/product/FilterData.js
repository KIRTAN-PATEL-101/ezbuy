export const color = [
   "white",
   "black",
   "Red",
   "maroon",
   "Beige",
   "Pink",
   "Green",
   "Yellow",
];

export const filters = [
   {
   id: "color",
   name: "Color",
   options: [
      {value: "white", label: "White"},
      {value: "beige", label: "Beige"},
      {value: "brown", label: "Brown"},
      {value: "blue", label: "Blue"},
      {value: "yellow", label: "Yellow"},
      {value: "green", label: "Green"},
      {value: "purple", label: "Purple"},
      ],
   },

   {
   id: "size",
   name: "Size",
   options: [
      {value: "s", label: "S"},
      {value: "m", label: "M"},
      {value: "l", label: "L"},
    
      ],
   },

];

export const singleFilter = [
   {
   id: "price",
   name: "Price",
   options: [
      {value: "159-399", label: "₹159 To ₹399"},
      {value: "399-999", label: "₹399 To ₹999"},
      {value: "999-1999", label: "₹999 To ₹1999"},
      {value: "1999-2999", label: "₹1999 To ₹2999"},
      {value: "3999-4999", label: "₹3999 To ₹4999"},

   ]
},

{
   id: "discount",
   name: "Discount Range",
   options: [
      {
         value: "10",
         label: "10% Off or More"
      },
      {value: "20", label: "20% Off or More"},
      {value: "30", label: "30% Off or More"}, 
      {value: "40", label: "40% Off or More"},
      {value: "50", label: "50% Off or More"},
      {value: "60", label: "60% Off or More"},
      {value: "70", label: "70% Off or More"},
      {value: "80", label: "80% Off or More"},
   ],
},
{
   id: "stock",
   name: "Availability",
   options: [
      {value: "inStock", label: "In Stock"},
      {value: "outOfStock", label: "Out of Stock"},
   ],
},
];

