//
// -------------------- ELEMENT --------------------
//


//#   function element(Z,param)
//#
//#   Define public routine to store and return elemental information
//#
//#   Parameters:
//#      Z = Atomic number of element
//#      param:
//#         symbol        - Elemental symbol
//#         block         - "s", "p", "d", or "f" block
//#         isMetal       - metal or nonmetal:   1=metal,   0=nonmetal
//#         valence       - # of valence electrons
//#         mass          - Atomic mass
//#         radius        - Covalent radius of atom
//#         EN            - Electronegativity of atom
//#         color         - color of atom (based on JMol)
//#         gradient      - gradient color for atom
//#         label         - color for label
//#         max           - total number of elements
//#         bondElements  - elements that can make bond with
//#
//#   Return value:
//#      Variable containing requested information 
//#
function element(Z,param) {
  if ( typeof element.elem == 'undefined' ) {
    element.elem = [];
    //
    //  Load parameters for all elements
    //
    //  Parameters:
    //    Atomic number
    //    Element symbol
    //    Block (s, p, d, or f)
    //    Metal or not:   1=metal   0=nonmetal
    //    Number of valence electrons
    //    Atomic mass
    //    Covalent radii (in pm).  From VESTA
    //    Jmol CPK colors (rgb 0.00000 - 1.00000).  From VESTA
    //    Electronegativities from Wikipedia, citing WebElements as their source
    //    Elements that can make bond with it. From iucr.org/resources/data/datasets/bond-valence-parameters/bvparm2016.cif
    //
    element.elem[0]  = addElement(0, 'X', 's', 0, 0, 0, 0, 0, 0, 0, 0,[]);
    element.elem[1]  = addElement(1, 'H', 's', 0, 1, 1.0079, 46, 1.00000,   0.80000,   0.80000, 2.2,  [8,9,17,7]);
    element.elem[2]  = addElement(2, 'He', 's', 0, 2, 4.0026, 122, 0.98907,   0.91312,   0.81091, 0,  []);
    element.elem[3]  = addElement(3, 'Li', 's', 1, 1, 6.941, 157, 0.52731,   0.87953,    0.45670, 0.98,  [8,16,34,52,9,17,35,53,7,]);
    element.elem[4]  = addElement(4, 'Be', 's', 1, 2, 9.0122, 112, 0.37147 ,   0.84590  ,  0.48292, 1.57,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[5]  = addElement(5, 'B', 'p', 0, 3, 10.811, 81, 0.12490 ,   0.63612  ,  0.05948, 2.04,   [8, 16, 34, 52, 9, 17, 35, 53, 7, 15, 33,1,6,5]);
    element.elem[6]  = addElement(6, 'C', 'p', 0, 4, 12.0107, 77, 0.50430 ,   0.28659 ,   0.16236, 2.55,  [8,17,6,16,9,35,7,34,53,52,15,33,1]);
    element.elem[7]  = addElement(7, 'N', 'p', 0, 5, 14.0067, 74, 0.69139 ,   0.72934  ,  0.90280, 3.04,  [8,16,9,17]);
    element.elem[8]  = addElement(8, 'O', 'p', 0, 6, 15.9994, 74, 0.99997 ,   0.01328  ,  0.00000, 3.44,  [8]);
    element.elem[9]  = addElement(9, 'F', 'p', 0, 7, 18.9984, 72, 0.69139 ,   0.72934  ,  0.90280, 3.98,  []);
    element.elem[10] = addElement(10, 'Ne', 'p', 0, 8, 20.1797, 160, 0.99954 ,   0.21788 ,   0.71035, 0,  []);
    element.elem[11] = addElement(11, 'Na', 's', 1, 1, 22.9897, 191,  0.97955 ,   0.86618 ,   0.23787, 0.93,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[12] = addElement(12, 'Mg', 's', 1, 2, 24.305, 160, 0.98773 ,   0.48452 ,   0.08470, 1.31,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[13] = addElement(13, 'Al', 'p', 1, 3, 26.9815, 143, 0.50718 ,   0.70056 ,   0.84062, 1.61, [8,16,34,52,9,17,35,7,15,33,1,53]);
    element.elem[14] = addElement(14, 'Si', 'p', 0, 4, 28.0855, 118, 0.10596 ,   0.23226 ,   0.98096, 1.9,  [8,16,34,52,9,17,35,53,6,7,15,33,1]);
    element.elem[15] = addElement(15, 'P', 'p', 0, 5, 30.9738, 110, 0.75557 ,   0.61256 ,   0.76425, 2.19,  [8,16,34,9,17,35,7,53,34,52,15,33,1,15]);
    element.elem[16] = addElement(16, 'S', 'p', 0, 6, 32.065, 104, 1.00000 ,   0.98071 ,   0.00000, 2.58,  [8,16,7,9,17,35,34,52,15,33,1]);
    element.elem[17] = addElement(17, 'Cl', 'p', 0, 7, 35.453, 99, 0.19583 ,   0.98828 ,   0.01167, 3.16,  [8,9,17]);
    element.elem[18] = addElement(18, 'Ar', 'p', 0, 8, 39.948, 192, 0.81349 ,   0.99731 ,   0.77075, 0,  []);
    element.elem[19] = addElement(19, 'K', 's', 1, 1, 39.0983, 235, 0.63255 ,   0.13281 ,   0.96858, 0.82,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[20] = addElement(20, 'Ca', 's', 1, 2, 40.078, 197, 0.35642 ,   0.58863 ,   0.74498, 1,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[21] = addElement(21, 'Sc', 'd', 1, 3, 44.9559, 164, 0.71209 ,   0.38930 ,   0.67279, 1.36,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[22] = addElement(22, 'Ti', 'd', 1, 4, 47.867, 147, 0.47237 ,   0.79393 ,   1.00000, 1.54,  [9,17,35,8,16,9,17,53,16,34,52,7,15,33,1]);
    element.elem[23] = addElement(23, 'V', 'd', 1, 5, 50.9415, 135, 0.90000 ,   0.10000 ,   0.00000, 1.63,  [8,17,16,9,35,7,53,34,52,15,33,1]);
    element.elem[24] = addElement(24, 'Cr', 'd', 1, 6, 51.9961, 129, 0.00000 ,   0.00000 ,   0.62000, 1.66,  [8,9,17,35,53,7,16,34,52,15,33,1]);
    element.elem[25] = addElement(25, 'Mn', 'd', 1, 7, 54.938, 137, 0.66148 ,   0.03412 ,   0.62036, 1.55,  [8,16,9,17,35,53,7,34,52,15,33,1]);
    element.elem[26] = addElement(26, 'Fe', 'd', 1, 8, 55.845, 126, 0.71051 ,   0.44662 ,   0.00136, 1.83,  [8,16,9,17,35,53,7,6,34,52,15,33,1]);
    element.elem[27] = addElement(27, 'Co', 'd', 1, 9, 58.9332, 125, 0.00000 ,   0.00000 ,   0.68666, 1.88, [1,8,16,9,17,7,6,35,53,34,52,15,33]);
    element.elem[28] = addElement(28, 'Ni', 'd', 1, 10, 58.6934, 125, 0.72032 ,   0.73631 ,   0.74339, 1.91,  [8,16,9,17,35,53,7,34,52,15,33,1]);
    element.elem[29] = addElement(29, 'Cu', 'd', 1, 11, 63.546, 128, 0.13390 ,   0.28022 ,   0.86606, 1.9,  [8,16,34,9,17,35,53,7,15,33,6,8,16,52,1]);
    element.elem[30] = addElement(30, 'Zn', 'd', 1, 2, 65.39, 137, 0.56123 ,   0.56445,    0.50799, 1.65,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[31] = addElement(31, 'Ga', 'p', 1, 3, 69.723, 153, 0.62292 ,   0.89293 ,   0.45486, 1.81,  [34,8,16,9,17,35,53,52,7,15,33,1]);
    element.elem[32] = addElement(32, 'Ge', 'p', 1, 4, 72.64, 122, 0.49557 ,   0.43499 ,   0.65193, 2.01,  [16,8,16,34,9,17,35,53,52,7,15,33,1]);
    element.elem[33] = addElement(33, 'As', 'p', 0, 5, 74.9216, 121,0.45814 ,   0.81694  ,  0.34249, 2.18,  [16,34,8,52,9,17,35,53,6]);
    element.elem[34] = addElement(34, 'Se', 'p', 0, 6, 78.96, 104, 0.60420  ,  0.93874  ,  0.06122, 2.55,  [16,34,8,9,17,35,7,35,53,34,52,15,33,1]);
    element.elem[35] = addElement(35, 'Br', 'p', 0, 7, 79.904, 114,0.49645 ,   0.19333 ,   0.01076, 2.96,  [8,9,17]);
    element.elem[36] = addElement(36, 'Kr', 'p', 0, 8, 83.8, 198, 0.98102 ,   0.75805 ,   0.95413, 3,  [9]);
    element.elem[37] = addElement(37, 'Rb', 's', 1, 1, 85.4678, 250, 1.00000,    0.00000 ,   0.60000, 0.82,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[38] = addElement(38, 'Sr', 's', 1, 2, 87.62, 215, 0.00000  ,  1.00000  ,  0.15259, 0.95,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[39] = addElement(39, 'Y', 'd', 1, 3, 88.9059, 182, 0.40259 ,   0.59739 ,   0.55813, 1.22,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[40] = addElement(40, 'Zr', 'd', 1, 4, 91.224, 160, 0.00000 ,   1.00000 ,   0.00000, 1.33,  [8,9,17,16,34,52,9,35,53,7,15,33,1]);
    element.elem[41] = addElement(41, 'Nb', 'd', 1, 5, 92.9064, 147, 0.29992 ,   0.70007 ,   0.46459, 1.6,  [8,9,17,35,8,7,53,16,34,52,7,15,33,1]);
    element.elem[42] = addElement(42, 'Mo', 'd', 1, 6, 95.94, 140, 0.70584 ,   0.52602 ,   0.68925, 2.16,  [16,17,8,9,35,7,8,53,34,52,15,33,1]);
    element.elem[43] = addElement(43, 'Tc', 'd', 1, 7, 98, 135, 0.80574 ,   0.68699 ,   0.79478, 1.9,  [8,9,17]);
    element.elem[44] = addElement(44, 'Ru', 'd', 1, 8, 101.07, 134, 0.81184 ,   0.72113,    0.68089, 2.2,  [34,9,8,16,17,7,35,53,34,52,7,15,33,1]);
    element.elem[45] = addElement(45, 'Rh', 'd', 1, 9, 102.9055, 134, 0.80748 ,   0.82205 ,   0.67068, 2.28,  [8,9,17,35,7,9,53,16,34,52,15,33,1]);
    element.elem[46] = addElement(46, 'Pd', 'd', 1, 10, 106.42, 137, 0.75978 ,   0.76818 ,   0.72454, 2.2,  [8,16,9,17,35,53,7,6,8,9,35,34,52,15,33,1]);
    element.elem[47] = addElement(47, 'Ag', 'd', 1, 11, 107.8682, 144, 0.72032 ,   0.73631 ,   0.74339, 1.93,   [8,16,9,17,35,53,34,52,7,15,1,33]);
    element.elem[48] = addElement(48, 'Cd', 'd', 1, 2, 112.411, 152, 0.95145 ,   0.12102 ,   0.86354, 1.69,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[49] = addElement(49, 'In', 'p', 1, 3, 114.818, 167, 0.84378  ,  0.50401 ,   0.73483, 1.78,  [17,8,16,9,35,53,27,25,34,52,7,15,33,1]);
    element.elem[50] = addElement(50, 'Sn', 'p', 1, 4, 118.71, 158, 0.60764 ,   0.56052  ,  0.72926, 1.96,  [8,16,34,52,9,17,35,53,7,15,33,1,6]);
    element.elem[51] = addElement(51, 'Sb', 'p', 1, 5, 121.76, 141, 0.84627  ,  0.51498 ,   0.31315, 2.05,  [8,16,34,9,17,35,53,7,34,52,15,33,1]);
    element.elem[52] = addElement(52, 'Te', 'p', 0, 6, 127.6, 137, 0.67958  ,  0.63586  ,  0.32038, 2.1,  [8,16,9,17,35,53,34,52,7,15,33,1]);
    element.elem[53] = addElement(53, 'I', 'p', 0, 7, 126.9045, 133, 0.55914 ,   0.12200 ,   0.54453, 2.66,  [53,9,17,8,]);
    element.elem[54] = addElement(54, 'Xe', 'p', 0, 8, 131.293, 218, 0.60662 ,   0.63218  ,  0.97305, 2.6,  [8,9]);
    element.elem[55] = addElement(55, 'Cs', 's', 1, 1, 132.9055, 272, 0.05872 ,   0.99922 ,   0.72578, 0.79,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[56] = addElement(56, 'Ba', 's', 1, 2, 137.327, 224, 0.11835 ,   0.93959  ,  0.17565, 0.89,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[57] = addElement(57, 'La', 'd', 1, 3, 138.9055, 188, 0.35340 ,   0.77057,    0.28737, 1.1,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[58] = addElement(58, 'Ce', 'f', 1, 4, 140.116, 182,0.82055 ,   0.99071  ,  0.02374, 1.12,  [8,16,9,17,35,53,7,34,52,15,33,1]);
    element.elem[59] = addElement(59, 'Pr', 'f', 1, 5, 140.9077, 182, 0.99130  ,  0.88559 ,   0.02315, 1.13,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[60] = addElement(60, 'Nd', 'f', 1, 6, 144.24, 182, 0.98701 ,   0.55560 ,   0.02744, 1.14,  [8,16,34,52,9,17,35,53,7,9,17]);
    element.elem[61] = addElement(61, 'Pm', 'f', 1, 7, 145, 181, 0.00000 ,   0.00000 ,   0.96000, 0,  [9,17,35]);
    element.elem[62] = addElement(62, 'Sm', 'f', 1, 8, 150.36, 181, 0.99042 ,   0.02403 ,   0.49195, 1.17,  [8,7,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[63] = addElement(63, 'Eu', 'f', 1, 9, 151.964, 206, 0.98367 ,   0.03078 ,   0.83615, 0,  [8,16,9,17,35,53,7,34,52,15,33,1]);
    element.elem[64] = addElement(64, 'Gd', 'f', 1, 10, 157.25, 179, 0.75325 ,   0.01445 ,   1.00000, 1.2,  [8,9,16,17,35,53,34,52,7,15,33,1]);
    element.elem[65] = addElement(65, 'Tb', 'f', 1, 11, 158.9253, 177, 0.44315 ,   0.01663,    0.99782, 0,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[66] = addElement(66, 'Dy', 'f', 1, 12, 162.5, 177, 0.19390 ,   0.02374 ,   0.99071, 1.22,  [8,9,17,35,53,16,34,52,7,15,33,1]);
    element.elem[67] = addElement(67, 'Ho', 'f', 1, 13, 164.9303, 176, 0.02837 ,   0.25876,    0.98608, 1.23,  [8,16,9,17,35,53,34,52,7,15,33,1]);
    element.elem[68] = addElement(68, 'Er', 'f', 1, 14, 167.259, 175, 0.28688  ,  0.45071 ,   0.23043, 1.24,  [8,16,34,9,17,35,53,52,7,15,33,1]);
    element.elem[69] = addElement(69, 'Tm', 'f', 1, 15, 168.9342, 100, 0.00000 ,   0.00000 ,   0.88000, 1.25,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[70] = addElement(70, 'Yb', 'f', 1, 16, 173.04, 194, 0.15323,    0.99165 ,   0.95836, 0,  [8,7,16,34,52,9,17,35,53,15,33,1]);
    element.elem[71] = addElement(71, 'Lu', 'f', 1, 17, 174.967, 172, 0.15097,    0.99391 ,   0.71032, 1.27,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[72] = addElement(72, 'Hf', 'd', 1, 4, 178.49, 159, 0.70704 ,   0.70552 ,   0.35090, 1.3,  [9,8,17,35,16,34,52,53,7,15,33,1]);
    element.elem[73] = addElement(73, 'Ta', 'd', 1, 5, 180.9479, 147, 0.71952 ,   0.60694 ,   0.33841, 1.5,  [8,16,9,17,35,53,16,34,52,7,15,33,1]);
    element.elem[74] = addElement(74, 'W', 'd', 1, 6, 183.84, 141, 0.55616 ,   0.54257 ,   0.50178, 2.36,  [8,9,17,35,53,16,34,52,7,15,33,1]);
    element.elem[75] = addElement(75, 'Re', 'd', 1, 7, 186.207, 137, 0.70294 ,   0.69401 ,   0.55789, 1.9,  [17,8,9,35,53,34,52,7,15,33,1]);
    element.elem[76] = addElement(76, 'Os', 'd', 1, 8, 190.23, 137, 0.78703 ,   0.69512 ,   0.47379, 2.2,  [8,16,9,17,35]);
    element.elem[77] = addElement(77, 'Ir', 'd', 1, 9, 192.217, 136, 0.78975 ,   0.81033 ,   0.45049, 2.2,  [8,9,17,16,34,52,35,53,7,15,33,1]);
    element.elem[78] = addElement(78, 'Pt', 'd', 1, 10, 195.078, 139, 0.79997,    0.77511 ,   0.75068, 2.28,  [8,16,9,17,35,6,7,53,34,52,15,33,1]);
    element.elem[79] = addElement(79, 'Au', 'd', 1, 11, 196.9665, 144, 0.99628 ,   0.70149 ,   0.22106, 2.54,  [17,53,8,16,9,35,7,34,52,15,33,1]);
    element.elem[80] = addElement(80, 'Hg', 'd', 1, 2, 200.59, 155, 0.82940 ,   0.72125 ,   0.79823, 2,  [8,9,17,16,35,53,34,52,7,15,33,1,80]);
    element.elem[81] = addElement(81, 'Tl', 'p', 1, 3, 204.3833, 171, 0.58798  ,  0.53854 ,   0.42649, 1.62,  [8,16,9,17,35,53,7,9,34,52,15,33,1]);
    element.elem[82] = addElement(82, 'Pb', 'p', 1, 4, 207.2, 175, 0.32386 ,   0.32592 ,   0.35729, 2.33,  [8,16,34,9,17,35,53,7,52,15,33,1]);
    element.elem[83] = addElement(83, 'Bi', 'p', 1, 5, 208.9804, 182, 0.82428 ,   0.18732 ,   0.97211, 2.02,  [8,16,34,9,17,35,53,7,9,34,52,33,1]);
    element.elem[84] = addElement(84, 'Po', 'p', 1, 6, 209, 177, 0.00000 ,   0.00000  ,  1.00000, 2,  [8,9]);
    element.elem[85] = addElement(85, 'At', 'p', 0, 7, 210, 62, 0.00000 ,   0.00000 ,   1.00000, 2.2,  []);
    element.elem[86] = addElement(86, 'Rn', 'p', 0, 8, 222, 80, 1.00000 ,   1.00000 ,   0.00000, 0,  []);
    element.elem[87] = addElement(87, 'Fr', 's', 1, 1, 223, 100, 0.00000 ,   0.00000 ,   0.00000, 0.7,  []);
    element.elem[88] = addElement(88, 'Ra', 's', 1, 2, 226, 0.42959  ,  0.66659 ,   0.34786, 0.9,  []);
    element.elem[89] = addElement(89, 'Ac', 'd', 1, 3, 227, 203, 0.39344 ,   0.62101 ,   0.45034, 1.1,   [8, 9, 17, 35]);
    element.elem[90] = addElement(90, 'Th', 'f', 1, 4, 232.0381, 180, 0.14893 ,   0.99596 ,   0.47106, 1.3,  [8,16,34,52,9,17,35,53,7,15,33,1]);
    element.elem[91] = addElement(91, 'Pa', 'f', 1, 5, 231.0359, 163, 0.16101 ,   0.98387 ,   0.20855, 1.5,  [8,9,17,35,9]);
    element.elem[92] = addElement(92, 'U', 'f', 1, 6, 238.0289, 156, 0.47774  ,  0.63362 ,   0.66714, 1.38,  [8,16,9,17,35,53,7,34,52,15,33,1]);
    element.elem[93] = addElement(93, 'Np', 'f', 1, 7, 237, 156, 0.30000  ,  0.30000 ,   0.30000, 1.36,  [9,17,35,53,8]);
    element.elem[94] = addElement(94, 'Pu', 'f', 1, 8, 244, 164, 0.30000  ,  0.30000 ,   0.30000, 1.28,  [8,9,17,35,53,]);
    element.elem[95] = addElement(95, 'Am', 'f', 1, 9, 243, 173, 0.30000  ,  0.30000 ,   0.30000, 1.3,  [8,9,17,35,]);
    element.elem[96] = addElement(96, 'Cm', 'f', 1, 10, 247, 169, 120, 92, 227, 1.3,  [8,9,17]);
    element.elem[97] = addElement(97, 'Bk', 'f', 1, 11, 247, 168, 138, 79, 227, 1.3,  [8,9,17,35]);
    element.elem[98] = addElement(98, 'Cf', 'f', 1, 12, 251, 168, 161, 54, 212, 1.3,  [8,9,17,35]);
    element.elem[99] = addElement(99, 'Es', 'f', 1, 13, 252, 165, 179, 31, 212, 1.3,  [8]);
    element.elem[100] = addElement(100, 'Fm', 'f', 1, 14, 257, 167, 179, 31, 186, 1.3,  []);
    element.elem[101] = addElement(101, 'Md', 'f', 1, 15, 258, 173, 179, 13, 166, 1.3,  []);
    element.elem[102] = addElement(102, 'No', 'f', 1, 16, 259, 176, 189, 13, 135, 1.3,  []);
    element.elem[103] = addElement(103, 'Lr', 'f', 1, 17, 262, 161, 199, 0, 102, 0,  []);
    element.elem[104] = addElement(104, 'Rf', 'd', 1, 4, 267, 157, 204, 0, 89, 0),  [];
    element.elem[105] = addElement(105, 'Db', 'd', 1, 5, 268, 149, 209, 0, 79, 0,  []);
    element.elem[106] = addElement(106, 'Sg', 'd', 1, 6, 269, 143, 217, 0, 69, 0,  []);
    element.elem[107] = addElement(107, 'Bh', 'd', 1, 7, 270, 141, 224, 0, 56, 0,  []);
    element.elem[108] = addElement(108, 'Hs', 'd', 1, 8, 269, 134, 230, 0, 46, 0,  []);
    element.elem[109] = addElement(109, 'Mt', 'd', 1, 9, 278, 129, 235, 0, 38, 0,  []);
    element.elem[110] = addElement(110, 'Ds', 'd', 1, 10, 281, 0, 0, 0, 28, 0,  []);
    element.elem[111] = addElement(111, 'Rg', 'd', 1, 11, 281, 0, 0, 0, 28, 0,  []);
    element.elem[112] = addElement(112, 'Cn', 'd', 1, 12, 285, 0, 0, 0, 28, 0,  []);
    element.elem[113] = addElement(113, 'Uut', 'p', 1, 3, 286, 0, 0, 0, 28, 0,  []);
    element.elem[114] = addElement(114, 'Fl', 'p', 1, 4, 289, 0, 0, 0, 28, 0,  []);
    element.elem[115] = addElement(115, 'Uup', 'p', 1, 5, 288, 0, 0, 0, 28, 0,  []);
    element.elem[116] = addElement(116, 'Lv', 'p', 1, 6, 293, 0, 0, 0, 28, 0,  []);
    element.elem[117] = addElement(117, 'Uus', 'p', 1, 7, 294, 0, 0, 0, 28, 0,  []);
    element.elem[118] = addElement(118, 'Uuo', 'p', 1, 8, 294, 0, 0, 0, 28, 0,  []);
    }

  // Make sure element requested is defined.
  if ( (Z < 0)  ||  (Z > element.elem.length) ) {
    alert("Element "+Z+" is not defined.");
    return 0;
    }

  // Determine what information is requested and return value
  switch (param) {
    case "symbol":
        return element.elem[Z].symbol;
        break;
    case "block":
        return element.elem[Z].block;
        break;
    case "isMetal":
        return element.elem[Z].isMetal;
        break;
    case "valence":
        return element.elem[Z].valence;
        break;
    case "mass":
        return element.elem[Z].mass;
        break;
    case "radius":
        return element.elem[Z].radius;
        break;
    case "EN":
        return element.elem[Z].EN;
        break;
    case "color":
        return element.elem[Z].color;
        break;
    case "gradient":
        return element.elem[Z].gradient;
        break;
    case "label":
        return element.elem[Z].label;
        break;
    case "max":
        return element.elem.length;
        break;
    case "bondElements":
        return element.elem[Z].bondElements;
        break;
    default:
        alert("Param "+param+" is not defined.");
        return 0;
        break;
    }
  // End of element routine
  }

///
///   Define internal structure for elemental information
///
function elementObject() {
  this.symbol = "?";
  this.block = "?";
  this.isMetal = 0;
  this.valence = 0;
  this.mass = 0.0;
  this.radius = 0.0;
  this.EN = 0.0;
  this.color   = "rgb(88,88,88)";
  this.gradient = "rgb(88,88,88)";
  this.label = "rgb(255,255,255)";
  this.bondElements = [];
  }

///
///   Internal routine to add information for elements
///
function addElement(Z, symbol, block, isMetal, valence, mass, radius, red, green, blue, EN, bondElements)  {

  // Declare local variables
  var atomR, sum;
  var element = new elementObject();

  // Add elemental information
  element.symbol = symbol;
  element.block = block;
  element.isMetal = isMetal;
  element.valence = valence;
  element.mass = mass;
  (radius <= 0) ? atomR = 0.1 : atomR = radius / 100.0;
  element.radius = atomR;
  element.color = "rgb("+red*255+","+green*255+","+blue*255+")";
  element.gradient = "rgb("+Math.floor(red*255/2)+","+Math.floor(green*255/2)+","+Math.floor(blue*255/2)+")";
  sum = (red + green + blue)*255;
  element.label = (sum > 384) ? "rgb(0,0,0)" : "rgb(255,255,255)";  
  element.EN = EN;
  element.bondElements = bondElements;

  // End of addElement routine
  return element;
  }

//#   function lookupSymbol(symbol)
//#
//#   Given elemental symbol, lookup and return atomic number (Z)
//#
function lookupSymbol(symbol) {
  var i;

  for (i = 1; i < element(1,"max"); i++) {
    if ( element(i,"symbol") == symbol )
      return i;
    }
  return 0;
  }


  






//
// -------------------- ATOM & MOLECULE --------------------
//


// ------ (1) Atom ------

///
/// Define structure for each atom
///
function atomObject() {
  this.atomicnumber = 0;
  this.x = 0.0;
  this.y = 0.0;
  this.z = 0.0;
  this.originalx = 0.0;
  this.originaly = 0.0;
  this.originalz = 0.0;
  this.charge = 0.0;
  this.highlite = 0;
  this.ishide = 0;
  this.cysid = -1;
  this.iscleaveatom = 0;
  this.color = "rgb(0,0,0)";
}

//#   function addAtom(AtomicNum, x, y, z)
//#
//#   Routine to add atomic information to molecule array.
//#
//#   Parameters are the atomic # and (x,y,z) coordinates of the atom.
//#
function addAtom(AtomicNum, x, y, z, cysid) {

  // Declare local variables
  var i;
  var numatoms;
  var molecule = Mol();
  var bonds = BondMatrix();

  // Create/fill molecular array
  molecule[0].numatoms++;
  numatoms = molecule[0].numatoms;
  molecule[0].showcharges = 0;
  buttonColor("ChargeButton",0);
  molecule[numatoms] = new atomObject();
  molecule[numatoms].atomicnumber = AtomicNum;
  molecule[numatoms].x = x;
  molecule[numatoms].y = y;
  molecule[numatoms].z = z;
  molecule[numatoms].originalx = x;
  molecule[numatoms].originaly = y;
  molecule[numatoms].originalz = z;
  molecule[numatoms].charge = 0.0;
  molecule[numatoms].highlite = 0;
  molecule[numatoms].cysid = cysid;
  molecule[numatoms].color = element(AtomicNum,"color");

  // Initialize bond matrix
  if (typeof bonds[numatoms] === "undefined") {
    bonds[numatoms] = [];
    }
  bonds[numatoms][0] = 0;
  for (i=1; i <= numatoms; i++) {
    bonds[i][numatoms] = 0;
    bonds[numatoms][i] = 0;
    }

  // End of addAtom routine
  }

//#   function delAtom(atomNum)
//#
//#   Routine to remove selected atom, directly-bonded Hydrogens, and
//#   cleanup molecule object (remove blank slots) and update bond arrays.
//#
//#   atomNum is the position of the atom to delete in the molecule array
//#
function delAtom(atomNum) {

  // Declare local variables
  var i, j, k, Hi=0;
  var bondedAtom, bi;
  var numatoms;
  var newNum, maxBonds, maxBondsB, maxBondsI, maxBondsJ;
  var HList = new Array();
  var molecule = Mol();
  var cys = OriCrystal();
  var bonds = BondMatrix();

  // See if there are any attached hydrogen atoms
  molecule[0].showcharges = 0;
  buttonColor("ChargeButton",0);
  newNum = atomNum;
  for (i=1; i < atomNum; i++) {
    if ( (bonds[atomNum][i] > 0) && (molecule[i].atomicnumber == 1) ) {
      HList[Hi++] = i;
      newNum--;
      }
    }
  for (i=atomNum+1; i <= molecule[0].numatoms; i++) {
    if ( (bonds[atomNum][i] > 0) && (molecule[i].atomicnumber == 1) ) {
      HList[Hi++] = i;
      }
    }

  // Remove attached hydrogen atoms
  HList.sort(function(a,b){
    return(b-a);
    });
  for (i=0; i < Hi; i++) {
  	delAtom(HList[i]);
    }
  atomNum = newNum;

  // Remove atom and shift 'higher' atoms in molecule object to fill gaps
  for (i=atomNum; i < molecule[0].numatoms; i++) {
  	j=i+1;
    molecule[i].atomicnumber = molecule[j].atomicnumber;
    molecule[i].x = molecule[j].x;
    molecule[i].y = molecule[j].y;
    molecule[i].z = molecule[j].z;
    molecule[i].charge = molecule[j].charge;
    molecule[i].highlite = molecule[j].highlite;
    molecule[i].originalx = molecule[j].originalx;
    molecule[i].originaly = molecule[j].originaly;
    molecule[i].originalz = molecule[j].originalz;
    molecule[i].ishide = molecule[j].ishide;
    molecule[i].cysid = molecule[j].cysid;
    molecule[i].iscleaveatom = molecule[j].iscleaveatom;
    molecule[i].color = molecule[j].color;
    }
  molecule[0].numatoms--;

  // Remove bonds to atom being deleted
  numatoms = molecule[0].numatoms;
  for (i=1; i < atomNum; i++) {
    if ( bonds[i][atomNum] > 0 )
      bonds[i][0]--;
    for (j=atomNum; j <= numatoms; j++)
      bonds[i][j] = bonds[i][j+1];
    bonds[i][numatoms+1] = 0;
    }
  for (i=atomNum; i <= numatoms; i++) {
    if ( bonds[i+1][atomNum] > 0 )
      bonds[i+1][0]--;
    for (j=0; j < atomNum ; j++)
      bonds[i][j] = bonds[i+1][j];
    for (j=atomNum; j <= numatoms; j++)
      bonds[i][j] = bonds[i+1][j+1];
    bonds[i][numatoms+1] = 0;
    }
  for (i=0; i<=numatoms+1; i++)
    bonds[numatoms+1][i] = 0;

  // Finished with delAtom routine
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  if(cys[0].cleave == 1){
    drawsurface();
  }
  drawAxis();
  }

function deleteAtom(atomNum) {

  // Declare local variables
  var i, j;
  var molecule = Mol();

  for (i=atomNum; i < molecule[0].numatoms; i++) {
    j=i+1;
    molecule[i].atomicnumber = molecule[j].atomicnumber;
    molecule[i].x = molecule[j].x;
    molecule[i].y = molecule[j].y;
    molecule[i].z = molecule[j].z;
    molecule[i].originalx = molecule[j].originalx;
    molecule[i].originaly = molecule[j].originaly;
    molecule[i].originalz = molecule[j].originalz;
    molecule[i].iscleaveatom = molecule[j].iscleaveatom;
    molecule[i].charge = molecule[j].charge;
    molecule[i].highlite = molecule[j].highlite;
    }
  molecule[0].numatoms--;
  }

///
///   Routine to add/change atoms and add H
///
function newAtom(OnAtom) {

  // Declare local variables
  var i, j, k, numbonds;
  var vx, vy, vz, vd;
  var Rij, Rnew;
  var elem, pos;
  var errorH;
  var bondlist = [];
  var param = parameters();
  var molecule = Mol();
  var bonds = BondMatrix();
  var activeCanvas = activeWin("");
  var cys = OriCrystal();
  var mycanvas = activeWin("");
  var canvas = document.getElementById(mycanvas);
  if ( ! canvas )
    return;
  var ctx = canvas.getContext('2d');
  var centerx = canvas.width/2;
  var centery = canvas.height/2;
  // Lookup information for current element 
  atomicNumber = lookupSymbol(param.element);

  // Set number of bonds on selected atom
  if( OnAtom !== 0 ){
    numbonds = bonds[OnAtom][0];
  }

  //If mousedown and up on the same blank area,
  //then add a new atom in the mousedown area
  if(OnAtom == 0){
    // var relobj = document.getElementById("content");
    //Obtain canvas' bound
    var canvasBox = canvas.getBoundingClientRect(); 
    //Scaled by difference between canvas' width-height and the real canvas'piex.
    var cx = (param.mousedownxyz[0]-canvasBox.left)*(canvas.width/canvasBox.width)-centerx;
    var cy = (param.mousedownxyz[1]-canvasBox.top)*(canvas.height/canvasBox.height)-centery;
    var x = cx/molecule[0].AtomScale;
    var y = cy/molecule[0].AtomScale;
    addAtom(atomicNumber, x , y , 0 , cys[0].numcys);
    if(molecule[0].numatoms == 1){
      centerMove();
    }
    drawMolecule();
    if(molecule[0].type == "crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    if(cys[0].cleave == 1){
      drawsurface();
    }
    drawAxis();
    return;
  }
  
  // If number of bonds == 0, arbitrarily add new atom along x axis
  // and attach the appropriate number of hydrogen atoms.
  if (numbonds == 0) {
    Rnew = element(atomicNumber,"radius") + element(molecule[OnAtom].atomicnumber,"radius");
    dx = molecule[OnAtom].x + Rnew;
    dy = molecule[OnAtom].y;
    dz = molecule[OnAtom].z;
    // cys[0].numcys++;//This is not reasonable for is now in molecule mode.This may be a potential bug left.Pay attention to!

    addAtom(atomicNumber, dx, dy, dz, cys[0].numcys);
    addBond(OnAtom,molecule[0].numatoms,param.bondtype);
    // if(element(molecule[OnAtom].atomicnumber,"symbol")=="H"){
    //   addH(molecule[0].numatoms);
    // }
    addH(molecule[0].numatoms);
    centerMolecule();
    drawMolecule(activeCanvas);
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    if(cys[0].cleave == 1){
      drawsurface();
    }
    drawAxis();
    return;
    }

  // Create list of atoms bonded to current atom
  pos = 0;
  for (i=1; i <= molecule[0].numatoms; i++) {
    if ( (bonds[OnAtom][i] > 0) && (i != OnAtom))
      bondlist[++pos] = i;
    }
  bondlist[0] = pos;
  if ( bondlist[0] != bonds[OnAtom][0])
    alert("ERROR: Supposed to be "+numbonds+" bonds on atom "+OnAtom+", but "+pos+" bonds found.");

  // If atom to add is H, add one H
  if (atomicNumber == 1) {
    vx = 0.0;
    vy = 0.0;
    vz = 0.0;
    for (i=1; i <= numbonds; i++) {
      j = bondlist[i];
      dx = molecule[j].x - molecule[OnAtom].x;
      dy = molecule[j].y - molecule[OnAtom].y;
      dz = molecule[j].z - molecule[OnAtom].z;
      dd = Math.sqrt(dx*dx+dy*dy+dz*dz);
      vx += dx/dd;
      vy += dy/dd;
      vz += dz/dd;
      }
    vd = Math.sqrt(vx*vx+vy*vy+vz*vz);
    Rnew = element(1,"radius") + element(molecule[OnAtom].atomicnumber,"radius");
    vx = molecule[OnAtom].x - vx*Rnew/vd;
    vy = molecule[OnAtom].y - vy*Rnew/vd;
    vz = molecule[OnAtom].z - vz*Rnew/vd;
    // cys[0].numcys++;
    addAtom(1, vx, vy, vz,cys[0].numcys);
    // Check to be sure new H atom not too close to other bonded atoms
    for (pos=1; pos <= numbonds; pos++) {
      errorH = 0;
      Rij = distance(molecule,bondlist[pos],molecule[0].numatoms);
      if ( Rij < 0.2 )
        errorH = 1;
      }
    if ( (errorH)  &&  (numbonds>1) ) {
    // If bonded atoms all close to a plane, place H above/below plane
      i = bondlist[1];
      j = bondlist[2];
      vx  = (molecule[i].y-molecule[OnAtom].y) * (molecule[j].z-molecule[OnAtom].z);
      vx -= (molecule[i].z-molecule[OnAtom].z) * (molecule[j].y-molecule[OnAtom].y);
      vy  = (molecule[i].z-molecule[OnAtom].z) * (molecule[j].x-molecule[OnAtom].x);
      vy -= (molecule[i].x-molecule[OnAtom].x) * (molecule[j].z-molecule[OnAtom].z);
      vz  = (molecule[i].x-molecule[OnAtom].x) * (molecule[j].y-molecule[OnAtom].y);
      vz -= (molecule[i].y-molecule[OnAtom].y) * (molecule[j].x-molecule[OnAtom].x);
      vd = Math.sqrt(vx*vx+vy*vy+vz*vz);
      molecule[molecule[0].numatoms].x = molecule[OnAtom].x - vx*Rnew/vd;
      molecule[molecule[0].numatoms].y = molecule[OnAtom].y - vy*Rnew/vd;
      molecule[molecule[0].numatoms].z = molecule[OnAtom].z - vz*Rnew/vd;
      molecule[molecule[0].numatoms].color = element(molecule[molecule[0].numatoms].atomicnumber,"color");
      errorH = 0;
      for (pos=1; pos <= numbonds; pos++) {
        Rij = distance(molecule,bondlist[pos],molecule[0].numatoms);
        if ( Rij < 0.2 )
          errorH = 1;
        }
      }
    if ( errorH ) {
      alert("Error adding H atom");
      delAtom(molecule[0].numatoms);
      return;
      }

    // If no errors, continue
    addBond(OnAtom,molecule[0].numatoms,param.bondtype);
    centerMolecule();
    drawMolecule(activeCanvas);
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    if(cys[0].cleave == 1){
      drawsurface();
    }
    drawAxis();
    numbonds = 0;
    return;
    }


  // If number of bonds == 1
  if (numbonds == 1) {
    //If atom is H, then change to new atom type,
    //change bond length , and add appropriate # of H
    if(element(molecule[OnAtom].atomicnumber,"symbol")=="H"){
      i = OnAtom;
      j =bondlist[1];
      dx = molecule[i].x - molecule[j].x;
      dy = molecule[i].y - molecule[j].y;
      dz = molecule[i].z - molecule[j].z;
      Rij = Math.sqrt(dx*dx+dy*dy+dz*dz);
      Rnew = element(atomicNumber,"radius") + element(molecule[j].atomicnumber,"radius");
      dx *= Rnew/Rij;
      dy *= Rnew/Rij;
      dz *= Rnew/Rij;
      molecule[i].atomicnumber = atomicNumber;
      molecule[i].x = dx + molecule[j].x;
      molecule[i].y = dy + molecule[j].y;
      molecule[i].z = dz + molecule[j].z;
      molecule[i].color = element(atomicNumber,"color");
      addH(OnAtom);
    }else if(param.action == "press"){
      //If it is not H, and action is press, then just change the atom type 
      molecule[OnAtom].atomicnumber = atomicNumber;
      molecule[OnAtom].color = element(atomicNumber,"color");
    }else if(param.action == "pull" ){
      //If it is not H and action is pull,then add a new atom with # H
      vx = 0.0;
      vy = 0.0;
      vz = 0.0;
      for (i=1; i <= numbonds; i++) {
        j = bondlist[i];
        dx = molecule[j].x - molecule[OnAtom].x;
        dy = molecule[j].y - molecule[OnAtom].y;
        dz = molecule[j].z - molecule[OnAtom].z;
        dd = Math.sqrt(dx*dx+dy*dy+dz*dz);
        vx += dx/dd;
        vy += dy/dd;
        vz += dz/dd;
        }
      vd = Math.sqrt(vx*vx+vy*vy+vz*vz);
      Rnew = element(atomicNumber,"radius") + element(molecule[OnAtom].atomicnumber,"radius");
      vx = molecule[OnAtom].x - vx*Rnew/vd;
      vy = molecule[OnAtom].y - vy*Rnew/vd;
      vz = molecule[OnAtom].z - vz*Rnew/vd;
      // cys[0].numcys++;
      addAtom(atomicNumber, vx, vy, vz, cys[0].numcys);
      // Check to be sure new atom not too close to other bonded atoms
      for (pos=1; pos <= numbonds; pos++) {
        errorH = 0;
        Rij = distance(molecule,bondlist[pos],molecule[0].numatoms);
        if ( Rij < 0.2 )
          errorH = 1;
        }
      if ( (errorH)  &&  (numbonds>1) ) {
      // If bonded atoms all close to a plane, place the new atom above/below plane
        i = bondlist[1];
        j = bondlist[2];
        vx  = (molecule[i].y-molecule[OnAtom].y) * (molecule[j].z-molecule[OnAtom].z);
        vx -= (molecule[i].z-molecule[OnAtom].z) * (molecule[j].y-molecule[OnAtom].y);
        vy  = (molecule[i].z-molecule[OnAtom].z) * (molecule[j].x-molecule[OnAtom].x);
        vy -= (molecule[i].x-molecule[OnAtom].x) * (molecule[j].z-molecule[OnAtom].z);
        vz  = (molecule[i].x-molecule[OnAtom].x) * (molecule[j].y-molecule[OnAtom].y);
        vz -= (molecule[i].y-molecule[OnAtom].y) * (molecule[j].x-molecule[OnAtom].x);
        vd = Math.sqrt(vx*vx+vy*vy+vz*vz);
        molecule[molecule[0].numatoms].x = molecule[OnAtom].x - vx*Rnew/vd;
        molecule[molecule[0].numatoms].y = molecule[OnAtom].y - vy*Rnew/vd;
        molecule[molecule[0].numatoms].z = molecule[OnAtom].z - vz*Rnew/vd;
        molecule[molecule[0].numatoms].color = element(molecule[molecule[0].numatoms].atomicnumber,"color");
        errorH = 0;
        for (pos=1; pos <= numbonds; pos++) {
          Rij = distance(molecule,bondlist[pos],molecule[0].numatoms);
          if ( Rij < 0.2 )
            errorH = 1;
          }
        }
      if ( errorH ) {
        alert("Error adding atom");
        delAtom(molecule[0].numatoms);
        return;
        }
        addBond(OnAtom,molecule[0].numatoms,param.bondtype);
        addH(molecule[0].numatoms);
        numbonds = 0;
      }
      centerMolecule();
      drawMolecule(activeCanvas);
      if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      if(cys[0].cleave == 1){
        drawsurface();
      }
      drawAxis();
  }

  // If number of bonds > 1, then simply change atom type
  if (numbonds > 1 && param.action == "press") {
    molecule[OnAtom].atomicnumber = atomicNumber;
    molecule[OnAtom].color = element(atomicNumber,"color");
    drawMolecule(activeCanvas);
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    if(cys[0].cleave == 1){
      drawsurface();
    }
    drawAxis();
    }
  //If number of bonds > 1 and the current action is pull,
  //then addbond and add new atoms 
  if (numbonds > 1 && param.action == "pull" && element(molecule[OnAtom].atomicnumber,"symbol")!="H") {
    vx = 0.0;
    vy = 0.0;
    vz = 0.0;
    for (i=1; i <= numbonds; i++) {
      j = bondlist[i];
      dx = molecule[j].x - molecule[OnAtom].x;
      dy = molecule[j].y - molecule[OnAtom].y;
      dz = molecule[j].z - molecule[OnAtom].z;
      dd = Math.sqrt(dx*dx+dy*dy+dz*dz);
      vx += dx/dd;
      vy += dy/dd;
      vz += dz/dd;
      }
    vd = Math.sqrt(vx*vx+vy*vy+vz*vz);
    Rnew = element(atomicNumber,"radius") + element(molecule[OnAtom].atomicnumber,"radius");
    vx = molecule[OnAtom].x - vx*Rnew/vd;
    vy = molecule[OnAtom].y - vy*Rnew/vd;
    vz = molecule[OnAtom].z - vz*Rnew/vd;
    // cys[0].numcys++;
    addAtom(atomicNumber, vx, vy, vz, cys[0].numcys);
    // Check to be sure new atom not too close to other bonded atoms
    for (pos=1; pos <= numbonds; pos++) {
      errorH = 0;
      Rij = distance(molecule,bondlist[pos],molecule[0].numatoms);
      if ( Rij < 0.2 )
        errorH = 1;
      }
    if ( (errorH)  &&  (numbonds>1) ) {
    // If bonded atoms all close to a plane, place the new atom above/below plane
      i = bondlist[1];
      j = bondlist[2];
      vx  = (molecule[i].y-molecule[OnAtom].y) * (molecule[j].z-molecule[OnAtom].z);
      vx -= (molecule[i].z-molecule[OnAtom].z) * (molecule[j].y-molecule[OnAtom].y);
      vy  = (molecule[i].z-molecule[OnAtom].z) * (molecule[j].x-molecule[OnAtom].x);
      vy -= (molecule[i].x-molecule[OnAtom].x) * (molecule[j].z-molecule[OnAtom].z);
      vz  = (molecule[i].x-molecule[OnAtom].x) * (molecule[j].y-molecule[OnAtom].y);
      vz -= (molecule[i].y-molecule[OnAtom].y) * (molecule[j].x-molecule[OnAtom].x);
      vd = Math.sqrt(vx*vx+vy*vy+vz*vz);
      molecule[molecule[0].numatoms].x = molecule[OnAtom].x - vx*Rnew/vd;
      molecule[molecule[0].numatoms].y = molecule[OnAtom].y - vy*Rnew/vd;
      molecule[molecule[0].numatoms].z = molecule[OnAtom].z - vz*Rnew/vd;
      molecule[molecule[0].numatoms].color = element(molecule[molecule[0].numatoms].atomicnumber,"color");
      errorH = 0;
      for (pos=1; pos <= numbonds; pos++) {
        Rij = distance(molecule,bondlist[pos],molecule[0].numatoms);
        if ( Rij < 0.2 )
          errorH = 1;
        }
      }
    if ( errorH ) {
      alert("Error adding atom");
      delAtom(molecule[0].numatoms);
      return;
      }

    // If no errors, continue
    addBond(OnAtom,molecule[0].numatoms,param.bondtype);
    addH(molecule[0].numatoms);
    numbonds = 0;
    centerMolecule();
    drawMolecule(activeCanvas);
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    if(cys[0].cleave == 1){
      drawsurface();
    }
    drawAxis();
    return;
    }
  // Finished with newAtom routine
  }


///
///   Routine to add H atoms to 'atom'
///
function addH(atom) {

  var i, j, clouds, Z, numH;
  var atom1, atom2;
  var errmsg;
  var param = parameters();
  var molecule = Mol();
  var cys = OriCrystal();
  var bonds = BondMatrix();
  var activeCanvas = activeWin("");
  // Only automatically add H atoms to p-block elements
  if ( element(molecule[atom].atomicnumber,"block") != "p" )
    return;
 
  // Determine how many H atoms to add
  clouds = param.clouds;
  Z = molecule[atom].atomicnumber;
  valence = element(Z,"valence");
  numH = 3 + clouds - valence;
  if (numH < 1)
    clouds = 1;
  if ( clouds <= 1 )
    return;
  // Find first atom bonded to current atom
  atom1 = 0;
  i = 0;
  while ( (atom1==0) && (i < molecule[0].numatoms) ) {
    i++;
    if ( (bonds[atom][i]>0) && (i != atom) )
      atom1 = i;
    }
  // Find first atom bonded to atom1
  atom2 = 0;
  if ( atom1 ) {
    i = 0;
    while ( (atom2==0) && (i < molecule[0].numatoms) ) {
      i++;
      if ( bonds[atom1][i]>0 )
        if ( (i != atom) && (i != atom1) )
          atom2 = i;
      }
    }
  // Call appropriate routines to add hydrogen atom(s)
  switch (clouds) {
    case 2:
          add1H(atom,atom1);
          break;
    case 3:
          add2H(atom,atom1,atom2,numH);
          break;
    case 4:
          add3H(atom,atom1,atom2,numH);
          break;
    default:
          break;
    }
  // // Draw molecule
  // centerMolecule();
  // drawMolecule();//alert("problem?");
  // if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
  //   drawCube();
  // }
  // if(cys[0].preview == 1){
  //   drawCube();
  // }
  // drawAxis();
  return;
  // Finished
  }
  
//#   function hideH()
//#
//#   Do not display any hydrogen atoms in molecule
//#
function hideH() {
  var i;
  var molecule = Mol();
  var cys = OriCrystal();
  // Loop over all atoms, setting hide flag to 0 for all atoms
  for (i=1; i <= molecule[0].numatoms; i++) {
    if ( molecule[i].atomicnumber == 1 ) {
      molecule[i].hide = 1;
      }
    }

  // Finished with hideH routine
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  if(cys[0].cleave == 1){
    drawsurface();
  }
  }

function addAllH(){
  var mol = Mol();
  for(var i = 1; i <= mol[0].numatoms; i++){
    mol[i].hide = 0;
  }
  drawMolecule(); 
  
  if(mol[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  var cys = OriCrystal();
  if(cys[0].cleave == 1){
    drawsurface();
  }
  return;
}

function changeH(){
  var param = parameters();
  if(param.mode == 'Draw') {
    alert("In Draw mode,cannot hide or show H!");
  return;}
  var mol = Mol();
  var cys = OriCrystal();
  for(var i = 1; i <= mol[0].numatoms; i++){
    //addH(i);
    if ( mol[i].atomicnumber == 1 ) {
    if(mol[i].hide == 1){
      mol[i].hide = 0;
    }else{
      mol[i].hide = 1;
    }
  }
  }
  drawMolecule(); 
  
  if(mol[0].type == "crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  var cys = OriCrystal();
  if(cys[0].cleave == 1){
    drawsurface();
  }
  return;
}
///
///   Routine to add one H atom to sp hybridized atom
///
function add1H(atom,i) {

  // Declare local variables
  var j, dx, dy, dz;
  var Za, Rai, RH;
  var Hx, Hy, Hz;
  var molecule = Mol();
  var param = parameters();
  // Calculate H--atom bond length
  Za = molecule[atom].atomicnumber;
  RH = element(Za,"radius") + element(1,"radius");
  var cys = OriCrystal();
  // If atom has zero bonds, add H along x-axis
  if (i == 0) {
    dx = molecule[atom].x + RH;
    dy = molecule[atom].y;
    dz = molecule[atom].z;
    // cys[0].numcys++;
    addAtom(1, Hx, Hy, Hz, cys[0].numcys);
    addBond(atom,molecule[0].numatoms,param.bondtype);
    return;
    }

  // Calculate vector atom->i
  dx = molecule[i].x - molecule[atom].x;
  dy = molecule[i].y - molecule[atom].y;
  dz = molecule[i].z - molecule[atom].z;
  Rai = Math.sqrt(dx*dx+dy*dy+dz*dz);

  // Calculate position of new H
  Hx = molecule[atom].x - dx*RH/Rai;
  Hy = molecule[atom].y - dy*RH/Rai;
  Hz = molecule[atom].z - dz*RH/Rai;
  // cys[0].numcys++;
  addAtom(1, Hx, Hy, Hz,cys[0].numcys);
  addBond(atom,molecule[0].numatoms,param.bondtype);

  // End add1H routine
  }


///
///   Routine to add up to 2 H atoms to sp2 hybridized atom
///
function add2H(atom,i,j,numH) {
  // Declare local variables
  var Za, Zi, Zj, RaH;
  var daiX, daiY, daiZ, Rai;
  var dijX, dijY, dijZ, Rij, ang;
  var dpX, dpY, dpZ, dpd;
  var Hx, Hy, Hz, dHx, dHy, dHz;
  var LX, LY, LZ, Lscale;
  var base;
  var aug = new Array();
  var molecule = Mol();
  var param = parameters();
  var cys = OriCrystal();
  // Lookup atomic numbers and calculate X-H Bond length
  Za = molecule[atom].atomicnumber;
  RaH = element(Za,"radius") + element(1,"radius");

  // If atom contains zero bonds, add 2H in xy plane
  if (i == 0) {
    Hx = molecule[atom].x + 0.5*RaH;    
    Hy = molecule[atom].y + RaH*Math.sqrt(3)/2;    
    Hz = molecule[atom].z;
    // cys[0].numcys++;
    addAtom(1, Hx, Hy, Hz,cys[0].numcys);
    addBond(atom,molecule[0].numatoms,param.bondtype);
    if (numH > 1) {
      Hy = molecule[atom].y - RaH*Math.sqrt(3)/2;
      cys[0].numcys++;
      addAtom(1, Hx, Hy, Hz, cys[0].numcys);
      addBond(atom,molecule[0].numatoms,param.bondtype);
      }
    return;
    }

  // Lookup atomic numbers for first bonded atom
  Zi = molecule[i].atomicnumber;
  daiX = molecule[i].x - molecule[atom].x;
  daiY = molecule[i].y - molecule[atom].y;
  daiZ = molecule[i].z - molecule[atom].z;
  Rai = Math.sqrt(daiX*daiX + daiY*daiY + daiZ*daiZ);

  // If atom contains only one bond, pick arbitrary atom for second point
  if (j == 0) {
    for (var ii=1; ii<molecule[0].numatoms; ii++) {
      if ( (ii!=atom) && (ii!=i) ) {
        j = ii;
        ii = molecule[0].numatoms;
        }
      }
    }

  // If molecule contains only two atoms, shift all atoms to xy plane
  if (j == 0) {
    molecule[atom].x = 0.0;
    molecule[atom].y = 0.0;
    molecule[atom].z = 0.0;
    molecule[i].x = -Rai;
    molecule[i].y = 0.0;
    molecule[i].z = 0.0;
    Hx = molecule[atom].x + 0.5*RaH;    
    Hy = molecule[atom].y + RaH*Math.sqrt(3)/2;    
    Hz = molecule[atom].z;
    // cys[0].numcys++;
    addAtom(1, Hx, Hy, Hz, cys[0].numcys);
    addBond(atom,molecule[0].numatoms,param.bondtype);
    if (numH > 1) {
      Hy = molecule[atom].y - RaH*Math.sqrt(3)/2;
      cys[0].numcys++;
      addAtom(1, Hx, Hy, Hz, cys[0].numcys);
      addBond(atom,molecule[0].numatoms,param.bondtype);
      }
    return;
    }

  // Lookup atomic numbers for second bonded atom
  Zj = molecule[j].atomicnumber;
  if(j==0){
    dijX = 0 - molecule[i].x;
    dijY = 0 - molecule[i].y;
    dijZ = 0 - molecule[i].z; 
  }else{
    dijX = molecule[j].x - molecule[i].x;
    dijY = molecule[j].y - molecule[i].y;
    dijZ = molecule[j].z - molecule[i].z;
  }
  
  Rij = Math.sqrt(dijX*dijX + dijY*dijY + dijZ*dijZ);

  // ----- Add first H -----
  // Dot-product of HA*Ai
  aug[0] = daiX;
  aug[1] = daiY;
  aug[2] = daiZ;
  aug[3] = -RaH*Rai/2;

  // Dot-product of HA*ij
  ang = (-daiX*dijX-daiY*dijY-daiZ*dijZ)/(Rai*Rij);
  ang = Math.acos(-1/2) + Math.PI - Math.acos(ang);
  aug[4] = dijX;
  aug[5] = dijY;
  aug[6] = dijZ;
  aug[7] = RaH*Rij*Math.cos(ang);

  // Calculate cross product (ji x ai)
  dpX =  dijZ*daiY - dijY*daiZ;
  dpY =  dijX*daiZ - dijZ*daiX;
  dpZ =  dijY*daiX - dijX*daiY;
  dpd = Math.sqrt(dpX*dpX+dpY*dpY+dpZ*dpZ);

  // Dot-product of HA * ( ji X ai )
  aug[8] = dpX;
  aug[9] = dpY;
  aug[10] = dpZ;
  aug[11] = 0.0;

  // Calculate coordinates of H1
  var coord = gaussElim(aug);
  Hx = molecule[atom].x + coord[0];
  Hy = molecule[atom].y + coord[1];
  Hz = molecule[atom].z + coord[2];
  addAtom(1, Hx, Hy, Hz, cys[0].numcys);
  addBond(atom,molecule[0].numatoms,param.bondtype);

  // ----- Add second H -----
  if (numH == 1) {
    return;
    }

  // Dot-product of HA*Ai
  aug[0] = daiX;
  aug[1] = daiY;
  aug[2] = daiZ;
  aug[3] = -RaH*Rai/2;

  // Dot-product of HA*ij
  ang = (-daiX*dijX-daiY*dijY-daiZ*dijZ)/(Rai*Rij);
  ang = Math.acos(ang) - Math.acos(0.5);
  aug[4] = dijX;
  aug[5] = dijY;
  aug[6] = dijZ;
  aug[7] = RaH*Rij*Math.cos(ang);

  // Dot-product of LH2* (iA x ij)
  aug[8]  = dpX;
  aug[9]  = dpY;
  aug[10] = dpZ;
  aug[11] = 0.0;

  // Calculate coordinates for H2
  debug  = "\nRow 1: "+aug[0].toFixed(4)+" "+aug[1].toFixed(4);
  debug += " "+aug[2].toFixed(4)+" "+aug[3].toFixed(4);
  debug += "\nRow 2: "+aug[4].toFixed(4)+" "+aug[5].toFixed(4);
  debug += " "+aug[6].toFixed(4)+" "+aug[7].toFixed(4);
  debug += "\nRow 3: "+aug[8].toFixed(4)+" "+aug[9].toFixed(4);
  debug += " "+aug[10].toFixed(4)+" "+aug[11].toFixed(4);
  coord = gaussElim(aug);
  Hx = molecule[atom].x + coord[0];
  Hy = molecule[atom].y + coord[1];
  Hz = molecule[atom].z + coord[2];
  debug = "H2 at: ("+Hx.toFixed(4)+", "+Hy.toFixed(4)+", "+Hz.toFixed(4)+")";
  // cys[0].numcys++;
  addAtom(1, Hx, Hy, Hz, cys[0].numcys);
  addBond(atom,molecule[0].numatoms,param.bondtype);

  debug  = "atom = "+atom+"  i = "+i+"  numatoms = "+molecule[0].numatoms;
  debug += "\n"+element(molecule[molecule[0].numatoms].atomicnumber,"symbol");
  debug += "\nRow 1: "+aug[0].toFixed(4)+" "+aug[1].toFixed(4);
  debug += " "+aug[2].toFixed(4)+" "+aug[3].toFixed(4);
  debug += "\nRow 2: "+aug[4].toFixed(4)+" "+aug[5].toFixed(4);
  debug += " "+aug[6].toFixed(4)+" "+aug[7].toFixed(4);
  debug += "\nRow 3: "+aug[8].toFixed(4)+" "+aug[9].toFixed(4);
  debug += " "+aug[10].toFixed(4)+" "+aug[11].toFixed(4);
  debug += "\nCross: "+dpX.toFixed(4)+" "+dpY.toFixed(4)+" "+dpZ.toFixed(4);
  //alert(debug);

  // End of add2H routine
  }


///
///   Routine to add H atoms to sp3 hybridized atom
///
function add3H(atom,i,j,numH) {
  // Declare local variables
  var Za, Zi, Zj, RaH;
  var daiX, daiY, daiZ, Rai;
  var dijX, dijY, dijZ, Rij, ang;
  var dpX, dpY, dpZ, dpd;
  var Hx, Hy, Hz, dHx, dHy, dHz;
  var LX, LY, LZ, Lscale;
  var base;
  var aug = new Array();
  var molecule = Mol();
  var param = parameters();
  var cys = OriCrystal();
  // Lookup atomic numbers and calculate X-H Bond length
  Za = molecule[atom].atomicnumber;
  Zi = molecule[i].atomicnumber;
  Zj = molecule[j].atomicnumber;
  RaH = element(Za,"radius") + element(1,"radius");

  // ----- Add first H -----

  // Dot-product of HA*Ai
  daiX = molecule[i].x - molecule[atom].x;
  daiY = molecule[i].y - molecule[atom].y;
  daiZ = molecule[i].z - molecule[atom].z;
  Rai = Math.sqrt(daiX*daiX + daiY*daiY + daiZ*daiZ);
  aug[0] = daiX;
  aug[1] = daiY;
  aug[2] = daiZ;
  aug[3] = -RaH*Rai/3;

  // Dot-product of HA*ij
  if(j==0){
    dijX = 0 - molecule[i].x;
    dijY = 0 - molecule[i].y;
    dijZ = 0 - molecule[i].z;
  }else{
    dijX = molecule[j].x - molecule[i].x;
    dijY = molecule[j].y - molecule[i].y;
    dijZ = molecule[j].z - molecule[i].z;
  }
  
  Rij = Math.sqrt(dijX*dijX + dijY*dijY + dijZ*dijZ);
  ang = (-daiX*dijX-daiY*dijY-daiZ*dijZ)/(Rai*Rij);
  ang = Math.acos(-1/3) + Math.PI - Math.acos(ang);
  aug[4] = dijX;
  aug[5] = dijY;
  aug[6] = dijZ;
  aug[7] = RaH*Rij*Math.cos(ang);

  // Cross-product ji X ai
  dpX =  dijZ*daiY - dijY*daiZ;
  dpY =  dijX*daiZ - dijZ*daiX;
  dpZ =  dijY*daiX - dijX*daiY;
  dpd = Math.sqrt(dpX*dpX+dpY*dpY+dpZ*dpZ);
  // Handle special case where j=0 and i located at (0,0,0)
  if (dpd == 0) {
    dpX =  molecule[atom].y;
    dpY = -molecule[atom].x;
    dpZ =  molecule[atom].z;
    dpd = Math.sqrt(dpX*dpX+dpY*dpY+dpZ*dpZ);
    }

  // Dot-product of HA * ( ji X ai )
  aug[8] = dpX;
  aug[9] = dpY;
  aug[10] = dpZ;
  aug[11] = 0.0;

  var coord = gaussElim(aug);
  Hx = molecule[atom].x + coord[0];
  Hy = molecule[atom].y + coord[1];
  Hz = molecule[atom].z + coord[2];
  // InfoWin("H: "+Hx+" "+Hy+"\n");
  addAtom(1, Hx, Hy, Hz, cys[0].numcys);
  addBond(atom,molecule[0].numatoms,param.bondtype);

  // ----- Add second H -----
  if (numH == 1) {
    return;
    }

  // Create point L
  base = molecule[0].numatoms;
  Lscale = RaH/(Rai*3);
  LX = molecule[atom].x - daiX*Lscale;
  LY = molecule[atom].y - daiY*Lscale;
  LZ = molecule[atom].z - daiZ*Lscale;

  // Dot-product of LH2*LH
  aug[0] = molecule[base].x - LX;
  aug[1] = molecule[base].y - LY;
  aug[2] = molecule[base].z - LZ;
  aug[3] = -RaH*RaH*4/9;

  // Dot-product of LH2*LA
  dHx = coord[0];
  dHy = coord[1];
  dHz = coord[2];
  aug[4] = molecule[atom].x - LX;
  aug[5] = molecule[atom].y - LY;
  aug[6] = molecule[atom].z - LZ;
  aug[7] = 0.0;

  // Dot-product of LH2* (iA x ij)
  aug[8]  = dpX;
  aug[9]  = dpY;
  aug[10] = dpZ;
  aug[11] = RaH*dpd*Math.sqrt(2/3);

  // Calculate coordinates for H2
  coord = gaussElim(aug);
  Hx = LX + coord[0];
  Hy = LY + coord[1];
  Hz = LZ + coord[2];
  // cys[0].numcys++;
  addAtom(1, Hx, Hy, Hz, cys[0].numcys);
  addBond(atom,molecule[0].numatoms,param.bondtype);

  // ----- Add third H -----
  if (numH == 2) {
    return;
    }

  // Dot-product of LH2*LH
  aug[0] = molecule[base].x - LX;
  aug[1] = molecule[base].y - LY;
  aug[2] = molecule[base].z - LZ;
  aug[3] = -RaH*RaH*4/9;

  // Dot-product of LH2*LA
  dHx = coord[0];
  dHy = coord[1];
  dHz = coord[2];
  aug[4] = molecule[atom].x - LX;
  aug[5] = molecule[atom].y - LY;
  aug[6] = molecule[atom].z - LZ;
  aug[7] = 0.0;

  // Dot-product of LH2* (iA x ij)
  dpd = Math.sqrt(dpX*dpX+dpY*dpY+dpZ*dpZ);
  aug[8]  = dpX;
  aug[9]  = dpY;
  aug[10] = dpZ;
  aug[11] = -RaH*dpd*Math.sqrt(2/3);
  debug  = "atom = "+atom+"  i = "+i+"  numatoms = "+molecule[0].numatoms;
  debug += "\n"+element(molecule[molecule[0].numatoms].atomicnumber,"symbol");
  debug += "\nRow 1: "+aug[0].toFixed(4)+" "+aug[1].toFixed(4);
  debug += " "+aug[2].toFixed(4)+" "+aug[3].toFixed(4);
  debug += "\nRow 2: "+aug[4].toFixed(4)+" "+aug[5].toFixed(4);
  debug += " "+aug[6].toFixed(4)+" "+aug[7].toFixed(4);
  debug += "\nRow 3: "+aug[8].toFixed(4)+" "+aug[9].toFixed(4);
  debug += " "+aug[10].toFixed(4)+" "+aug[11].toFixed(4);
  debug += "\nCross: "+dpX.toFixed(4)+" "+dpY.toFixed(4)+" "+dpZ.toFixed(4);
  //alert(debug);

  // Calculate coordinates for H3
  coord = gaussElim(aug);
  //  Hx = molecule[atom].x + coord[0];
  //  Hy = molecule[atom].y + coord[1];
  //  Hz = molecule[atom].z + coord[2];
  Hx = LX + coord[0];
  Hy = LY + coord[1];
  Hz = LZ + coord[2];
  // cys[0].numcys++;
  addAtom(1, Hx, Hy, Hz, cys[0].numcys);
  addBond(atom,molecule[0].numatoms,param.bondtype);

  // End of add3H routine
  }


///
///   Use gaussian elimination to solve for new coordinates.
///   Argument is augmented matrix of the form:
///     | ax  ay  az  =  ac |
///     | bx  by  bz  =  bc |
///     | cx  cy  cz  =  cc |
///
///   Returns a matrix containing the solution (x,y,z)
///
function gaussElim(aug) {
  var x, y, z, c;
  var coord = new Array();

  var ax = parseFloat(aug[0]);
  var ay = parseFloat(aug[1]);
  var az = parseFloat(aug[2]);
  var ac = parseFloat(aug[3]);
  var bx = parseFloat(aug[4]);
  var by = parseFloat(aug[5]);
  var bz = parseFloat(aug[6]);
  var bc = parseFloat(aug[7]);
  var cx = parseFloat(aug[8]);
  var cy = parseFloat(aug[9]);
  var cz = parseFloat(aug[10]);
  var cc = parseFloat(aug[11]);

  // Swap rows to place largest X variable in first row
  if ( (Math.abs(bx) > Math.abs(ax))  &&  (Math.abs(bx) > Math.abs(cx)) ) {
  	 x=ax;  y=ay;  z=az;  c=ac;
  	 ax=bx; ay=by; az=bz; ac=bc;
  	 bx=x;  by=y;  bz=z;  bc=c;
    }  

  if ( (Math.abs(cx) > Math.abs(ax))  &&  (Math.abs(cx) > Math.abs(bx)) ) {
  	 x=ax;  y=ay;  z=az;  c=ac;
  	 ax=cx; ay=cy; az=cz; ac=cc;
  	 cx=x;  cy=y;  cz=z;  cc=c;
    }

  if ( Math.abs(cx) > Math.abs(bx) ) {
    x=bx;  y=by;  z=bz;  c=bc;
  	 bx=cx; by=cy; bz=cz; bc=cc;
  	 cx=x;  cy=y;  cz=z;  cc=c;
    }

  // Add rows to "zero-out" first column
  if ( (ax != 0)  && (bx != 0 ) ) {
    factor = -ax/bx;
    bx = 0.0;
    by = by*factor + ay;
    bz = bz*factor + az;
    bc = bc*factor + ac;
    }
  if ( (ax != 0)  && (cx != 0 ) ) {
    factor = -ax/cx;
    cx = 0.0;
    cy = cy*factor + ay;
    cz = cz*factor + az;
    cc = cc*factor + ac;
    }

  // Swap rows to place largest Y variable in second row
  if (Math.abs(cy) > Math.abs(by)) {
    y=by;  z=bz;  c=bc;
    by=cy; bz=cz; bc=cc;
    cy=y;  cz=z;  cc=c;
    }

  // Add rows to "zero-out" second column
  if ( (by != 0)  && (cy != 0 ) ) {
    factor = -by/cy;
    cy = 0.0;
    cz = cz*factor + bz;
    cc = cc*factor + bc;
    }

  // Solve
  coord[2] = 0.0;
  if (cz != 0) {
    coord[2] = cc/cz;
    }
  coord[1] = 0.0;
  if (by != 0) {
    coord[1] = (bc-(bz*coord[2]))/by;
    }
  coord[0] = 0.0;
  if (ax != 0) {
    coord[0] = (ac - (az*coord[2]) - (ay*coord[1]))/ax;
    }

  // Return answer
  return coord;
  }

///
///   Routine to draw a single atom
///
function drawAtom(ctx, atomNum, AtomSize, centerx, centery) {
  // Define local variables
  var A;
  var x, y, r;
  var xoff, yoff, roff;
  var molecule = Mol();
  var activeCanvas = activeWin("");
  // Get parameters for atom
  A = molecule[atomNum].atomicnumber;
  x = molecule[0].AtomScale*molecule[atomNum].x + centerx;
  y = molecule[0].AtomScale*molecule[atomNum].y + centery;
  r = molecule[0].AtomScale*AtomSize*element(A,"radius");

  xoff = x-(0.20*r);
  yoff = y-(0.20*r);  
  roff = 0.30*r;
  x = Math.floor(x+0.5);
  y = Math.floor(y+0.5);
  r = Math.floor(r+0.5);

  xoff = Math.floor(xoff+0.5);
  yoff = Math.floor(yoff+0.5);

  AtomColor = ctx.createRadialGradient(xoff, yoff, roff, x, y, r);
  AtomColor.addColorStop(0, element(A,"color"));
  AtomColor.addColorStop(1, element(A,"gradient"));

  var show = showstyle();
  if(show.type=="ball and stick 1" || show.type == "ball and stick 2"){
  // Plot atom as a gradient shaded circle
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2*Math.PI, false);
  ctx.fillStyle = AtomColor;
  ctx.fill();
  ctx.lineWidth = 0.01;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();
  }
  // Draw label for atom
  if ( molecule[0].showlabels != 0 )
  atomLabel(ctx,A,atomNum,x,y);
  // End of drawAtom routine
}


///
///   Routine to draw a single atom without gradient
///
function drawAtomPlain(ctx, atomNum, AtomSize, centerx, centery) {
  // Define local variables
  var A;
  var x, y, r;
  var xoff, yoff, roff;
  var molecule = Mol();
  var activeCanvas = activeWin("");

  // Get parameters for atom
  A = molecule[atomNum].atomicnumber;
  x = molecule[0].AtomScale*molecule[atomNum].x + centerx;
  y = molecule[0].AtomScale*molecule[atomNum].y + centery;
  r = molecule[0].AtomScale*AtomSize*element(A,"radius");
  xoff = x-(0.20*r);
  yoff = y-(0.20*r);  
  roff = 0.30*r;
  x = Math.floor(x+0.5);
  y = Math.floor(y+0.5);
  r = Math.floor(r+0.5);
  xoff = Math.floor(xoff+0.5);
  yoff = Math.floor(yoff+0.5);

  // Plot atom as a solid shaded circle
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2*Math.PI, false);
  ctx.fillStyle = element(A,"color");
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();

  // Draw label for atom
  if ( molecule[0].showlabels != 0 )
  atomLabel(ctx,A,atomNum,x,y);

  // End of drawAtomPlain routine
}


///
///   Routine to draw charge cloud around a single atom
///
function DrawChargeCloud(ctx, atomNum, AtomSize, centerx, centery) {
  // Define local variables
  var A;
  var x, y, r;
  var colR, colB, colG, deltaRGB;
  var molecule = Mol();
  var activeCanvas = activeWin("");

  // Get parameters for atom
  A = molecule[atomNum].atomicnumber;
  x = molecule[0].AtomScale*molecule[atomNum].x + centerx;
  y = molecule[0].AtomScale*molecule[atomNum].y + centery;
  r = molecule[0].AtomScale*AtomSize*element(A,"radius");

  // Set colors based on charge
  var q = molecule[atomNum].charge;
  // Positive charges shown in blue
  if (q >= 0) {
  (q > 1.0) ? deltaRGB = 1.0 : deltaRGB = q;
  colR =   0;
  colG =   0;
  colB = 255;
  }
  // Positive charges shown in red
  if (q < 0) {
  (q < -1.0) ? deltaRGB = 1.0 : deltaRGB = -q;
  colR = 255;
  colG =   0;
  colB =   0;
  }
  AtomColor = "rgba("+colR+","+colG+","+colB+","+deltaRGB+")";
  //    AtomColor = "rgba("+colR+","+colG+","+colB+",0.75)";

  // Plot charge cloud as a semi-transparent circle
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2*Math.PI, false);
  ctx.fillStyle = AtomColor;
  ctx.fill();
  ctx.lineWidth = 0.01;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();

  // End DrawChargeCloud routine
}


///
///   Routine to draw a single atom with a highlight
///
function DrawAtomHilite(ctx, atomNum, AtomSize, centerx, centery) {

  // Define local variables
  var A;
  var x, y, r;
  var colR, colB, colG, deltaRGB;
  var molecule = Mol();
  var activeCanvas = activeWin("");

  // Get parameters for atom
  A = molecule[atomNum].atomicnumber;
  x = molecule[0].AtomScale*molecule[atomNum].x + centerx;
  y = molecule[0].AtomScale*molecule[atomNum].y + centery;
  r = molecule[0].AtomScale*AtomSize*element(A,"radius");

  // Set highlight color to yellow
  AtomColor = "rgba(255,255,0,0.5)";

  // Plot charge cloud as a semi-transparent circle
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2*Math.PI, false);
  ctx.fillStyle = AtomColor;
  ctx.fill();
  ctx.lineWidth = 0.01;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();

  // End DrawAtomHilite routine
}


///
///   Helper routine to draw label for atom
///   Parameters:
///     Atomic number, atom #, (x,y) coordinates
///
function atomLabel(ctx,A,i,ax,ay) {
  var label = element(A,"symbol");
  var fontsize = 14;
  var x = parseFloat(ax);
  var y = parseFloat(ay) + fontsize/2;
  var molecule = Mol();
  var show = showstyle();
  var color = element(A,"label")
  if(show.type=="line"){
  color = "rgb(255,255,255)";
  }
  ctx.lineWidth = 1.0;
  ctx.textAlign = "center";
  ctx.font = "normal " + fontsize + "px sans-serif";
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.fillText(label,x,y);

  var w = 10.0 / molecule[0].AtomScale;
  ctx.fillRect(x,y,w*1.5,w);
  ctx.closePath();
}


///
///   Draw atoms and bonds with highlighting
///
function drawHighlight(mycanvas, sequence, AtomSize, centerx, centery) {

  // Define local variables
  var i, j, k;
  var x, y, r;
  var A;
  var maxBonds, bondto;
  var x1, y1, x2, y2;
  var molecule = Mol();
  var bonds = BondMatrix();

  // Create connection to Canvas
  var canvas = document.getElementById(mycanvas);
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // Clear screen before drawing molecule
  clear(ctx, width, height);

  // Define properties of lines
  ctx.strokeStyle = "rgb(0, 0, 255)";
  ctx.lineWidth = 3.0;

  // Depth sort: Draw from back to front
  if ( typeof drawHighlight.deep == 'undefined' ) {
    drawHighlight.deep = [];
    }
  if ( drawHighlight.deep.length != molecule[0].numatoms ) {
    j=0;
    drawHighlight.deep = [];
    for (i=drawHighlight.deep.length; i<molecule[0].numatoms; i++) {
      j++;
      drawHighlight.deep[i] = [];
      drawHighlight.deep[i]["id"] = j;
      drawHighlight.deep[i]["sz"] = molecule[j].z;
      }
    }
  for (i=0; i<molecule[0].numatoms; i++) {
    j = drawHighlight.deep[i].id;
    drawHighlight.deep[i].z = molecule[j].z;
    }
  drawHighlight.deep.sort(function(a,b){
    return(b.z - a.z);
    });

  // Loop over all atoms in molecule
  for (i = 0; i < molecule[0].numatoms; i++) {
    atom = drawHighlight.deep[i].id;
    hilite = 0;
    for (ih=1; ih <= sequence[0]*3; ih++) {
      if (atom == sequence[ih])
        hilite = 1;
      }
    HighlightAtom(ctx, atom, hilite, AtomSize, centerx, centery);
    // Loop over all bonds on current atom
    for (bondto = 1; bondto <= molecule[0].numatoms; bondto++) {
      if ( bonds[atom][bondto] > 0) {
        highbond = 0;
        if (hilite > 0) {
          for (ih=1; ih < sequence[0]*3; ih++) {
            if (bondto == sequence[ih])
              highbond = 1;
            }
          }
        for (k=i+1; k < molecule[0].numatoms; k++) {
          if (drawHighlight.deep[k].id == bondto) {
            HighlightBond(ctx,atom,bondto,highbond, AtomSize, centerx, centery);
            }
          }
        }
      }
    }

  // Finished with drawHighlight routine
  }


///
///   Routine to draw a single highlighted atom
///
function HighlightAtom(ctx, atomNum, hilite, AtomSize, centerx, centery) {
  // Define local variables
  var A;
  var x, y, r;
  var xoff, yoff, roff;
  var istart, ilength, colorstr;
  var myrgb = new Array();
  var bcolor = "rgb(191,191,191)";
  var hcolor = "rgb(255,  0,  0)";
  var gcolor = "rgb(127,  0,  0)";
  var molecule = Mol();
  var activeCanvas = activeWin("");

  // Get parameters for atom
  A = molecule[atomNum].atomicnumber;
  x = molecule[0].AtomScale*molecule[atomNum].x + centerx;
  y = molecule[0].AtomScale*molecule[atomNum].y + centery;
  r = molecule[0].AtomScale*AtomSize*element(A,"radius");
  xoff = x-(0.20*r);
  yoff = y-(0.20*r);  
  roff = 0.30*r;
  x = Math.floor(x+0.5);
  y = Math.floor(y+0.5);
  r = Math.floor(r+0.5);
  xoff = Math.floor(xoff+0.5);
  yoff = Math.floor(yoff+0.5);
  AtomColor = ctx.createRadialGradient(xoff, yoff, roff, x, y, r);

  alpha = 0.33;
  if (hilite > 0)
    alpha = 1.0;
  istart  = element(A,"color").indexOf("(") + 1;
  ilength = element(A,"color").indexOf(")") - istart;
  colorstr = element(A,"color").substr(istart,ilength);
  myrgb = colorstr.replace(/,/g," ").split(' ');
  hcolor = "rgba("+myrgb[0]+","+myrgb[1]+","+myrgb[2]+","+alpha+")";
  istart  = element(A,"gradient").indexOf("(") + 1;
  ilength = element(A,"gradient").indexOf(")") - istart;
  colorstr = element(A,"gradient").substr(istart,ilength);
  myrgb = colorstr.replace(/,/g," ").split(' ');
  gcolor = "rgba("+myrgb[0]+","+myrgb[1]+","+myrgb[2]+","+alpha+")";
  AtomColor.addColorStop(0, hcolor);
  AtomColor.addColorStop(1, gcolor);

  // Plot atom as a gradient shaded circle
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2*Math.PI, false);
  ctx.fillStyle = AtomColor;
  ctx.fill();
  ctx.lineWidth = 0.01;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();

  // Draw label if highlighted atom
  if (hilite > 0)
    atomLabel(ctx,A,atomNum,x,y);
  }


// ------ (2) Molecule ------

//#   function Mol(value)
//#
//#   Define public routine to store and return molecule arrays
//#
//#   Parameter:
//#     value = If value given, then set as active molecule
//# 
//#   Return value:
//#     Pointer to current array for molecular coordinates, ex.
//#        var molecule = Mol();
//#
//#   Molecular values stored in 'zeroth' element of array
//#     molecule[0].molIndex    - ID number for this molecule 
//#     molecule[0].numatoms    - # of atoms in this molecule 
//#     molecule[0].AtomScale   - Scale factor to control size of molecule displayed 
//#     molecule[0].showlabels  - 0=don't show elemental symbols, 1=show symbols 
//#     molecule[0].showcharges - 0=don't show charges, 1=show charges 
//#     molecule[0].gradients   - 0=don't shade atoms, 1=use shading 
//#     molecule[0].highlite    - 0=don't highlight atoms, 1=highlight atoms
//#     molecule[0].formula     - Simple text string containing molecular formula 
//#     molecule[0].weight      - Molecular weight 
//#     molecule[0].charge      - Charge of molecule 
//#
//#   Atomic values in remaining elements of array
//#     molecule[i].atomicnumber - Atomic number (Z) for atom 
//#     molecule[i].x            - x coordinate of atom 
//#     molecule[i].y            - y coordinate of atom 
//#     molecule[i].z            - z coordinate of atom 
//#     molecule[i].charge       - Estimate of atomic charge 
//#     molecule[i].highlite     - 0=don't highlight atom, 1=highlight atom 
//#     molecule[i].hide         - 0=display atom, 1=do not display atom 
//#
function Mol(value) {
  // Declare local variables
  var id;
  var param = value || 0;

  // Determine which molecule to use
  if(typeof Mol.molecule === "undefined")
    Mol.molecule = 1;
  if ( param > 0 ) {
    Mol.molecule = param;
    BondMatrix(param);
    Div(param);
    }
  id = Mol.molecule;

  // Initialize molecular array if necessary
  if ( typeof Mol.moly === "undefined" )
    Mol.moly = [];
  if ( typeof Mol.moly[id] === "undefined" ) {
    Mol.moly[id] = [];
    Mol.moly[id][0] = new molObject();
    Mol.moly[id][0].molIndex = id;
    Mol.moly[id][0].numatoms = 0;
    Mol.moly[id][0].AtomScale = 1.0;
    Mol.moly[id][0].showlabels = 0;
    Mol.moly[id][0].showcharges = 0;
    Mol.moly[id][0].gradients = 1;
    Mol.moly[id][0].highlite = 0;
    Mol.moly[id][0].formula = "";
    Mol.moly[id][0].weight = 0.0;
    Mol.moly[id][0].charge = 999;
    }

  // End of Mol routine
  return Mol.moly[id];
  }

///
/// Define structure for molecular information
///
function molObject() {
  this.molIndex = 1;
  this.numatoms = 0;
  this.AtomScale = 1.0;
  this.showlabels = 1;
  this.showcharges = 0;
  this.gradients = 1;
  this.highlite = 0;
  this.hide = 0;
  this.formula = "";
  this.weight = 0.0;
  this.charge = 999;
  this.type = "molecule";
  this.crystalstyle = "in-cell";
  this.moveAck = 0;
  this.showbonds = 1;
  this.mousemove = "rotate";
  this.axis = [
      [0,0,0],
      [1,0,0],
      [0,1,0],
      [1,1,0],
      [0,0,1],
      [1,0,1],
      [0,1,1],
      [1,1,1]
    ];
  this.axisLabelShow = true;
  }


///
///   Routine to remove and initialize molecule object
///
function delMolecule() {
  var molecule = Mol();

  molecule[0] = new molObject();
  molecule[0].molIndex = 1;
  molecule[0].numatoms = 0;
  molecule[0].AtomScale = 1.0;
  molecule[0].showlabels = 0;
  molecule[0].showcharges = 0;
  buttonColor("ChargeButton",0);
  }

///
///  Showstyle for Atom-Bond model.
///
function showstyle(){
  if(typeof showstyle.type === "undefined"){
    showstyle.type="ball and stick 2";
  }
  return showstyle;
}

///
///  onchange function monitors showstyle's changes for Atom-Bond model.
///
function changeshowstyle(style){
  var cys = OriCrystal();
  var molecule = Mol();
  var show = showstyle();
  if( style == "ball and stick 1" ){
    show.type = "ball and stick 1";
  }else if(style == "ball and stick 2"){
    show.type = "ball and stick 2";
  }else if( style == "line" ){
    show.type = "line";
    element.label = "rgb(255,255,255)";
  }else if( style == "stick" ){
    show.type = "stick";
  }
  drawMolecule();
  if(cys[0].cleave == 0 && molecule[0].type == "crystal"){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
}  

///
///   Display parameters (mainly for debugging)
///
function showGlobal() {

  // Declare local variables
    var i;
    var molecule = Mol();
  
    InfoWin("numatoms = " + molecule[0].numatoms,1);
    InfoWin("\nAtomScale = " + molecule[0].AtomScale.toFixed(6));
    InfoWin("\n");
  
    for (i=1; i<=molecule[0].numatoms; i++) {
      A = molecule[i].atomicnumber;
      InfoWin(i + "  " + element(A,"symbol"));
      InfoWin(" (" + molecule[i].x.toFixed(4));
      InfoWin(", " + molecule[i].y.toFixed(4));
      InfoWin(", " + molecule[i].z.toFixed(4));
      InfoWin(")\n");
      }
  
  }
  
  
  //#   function showCoord(mode)
  //#
  //#   Display molecular coordinates and bonds in information window.
  //#
  //#   Parameter:
  //#      mode=0:  Write .xyz formatted file
  //#      mode>0:  Write coordinates and bond information
  //#
function showCoord(mode) {
  var param = parameters();
  if(param.mode == 'Draw'){
    alert("In Draw mode,cannot showCoord!");
    return;
  } 
  // Declare local variables
  var i;
  var space;
  var molecule = Mol();
  var bonds = BondMatrix();

  // If no coordinates available, return
  if ( molecule[0].weight <= 0.0 )
    return;

  // Loop over all atoms and bonds
  if ( mode ) {
      InfoWin("Molecular Coordinates and Bond Information\n\n",1);
      InfoWin("   "+molecule[0].formula+"  ("+molecule[0].weight.toFixed(2)+" g/mol)");
      if ( (molecule[0].charge != 999) && (molecule[0].charge != 0) )
        InfoWin("   Charge = "+molecule[0].charge);
      InfoWin("\n");
    } else {
      InfoWin("Molecular Coordinates in .xyz format\n",1);
      InfoWin("From 3DStructGen"+"\n");
      InfoWin("-----------------------------------------\n");
      InfoWin("Atoms in Total : "+molecule[0].numatoms + "\n");
      InfoWin(molecule[0].formula+"  ("+molecule[0].weight.toFixed(2)+" g/mol) \n");
    }
  for (i=1; i<=molecule[0].numatoms; i++) {
    space = "";
    if (i < 100)
      space = " ";
    if (i < 10)
      space = "  ";
    if ( mode ) {
      InfoWin(space+i+": ");
      }
    InfoWin(element(molecule[i].atomicnumber,"symbol") + " ");
    if ( element(molecule[i].atomicnumber,"symbol").length < 2 )
      InfoWin(" ");
    InfoWin(XYZpretty(molecule[i].x));
    InfoWin(XYZpretty(molecule[i].y));
    InfoWin(XYZpretty(molecule[i].z));
    if ( mode ) {
      InfoWin("  ");
      for (j=1; j <=molecule[0].numatoms; j++) {
        if ( bonds[i][j] > 0 )
          InfoWin(" "+j+",");
        }
      }
    InfoWin("\n");

    }
InfoWin("-----------------------------------------------\n");
  // End of showCoord routine
  }

//#   function loadMolecule()
//#
//#   Routine to load molecular information for methane molecule.
//#
function loadMolecule() {

  // Add atomic coordinates to molecule array
  addAtom(6,  0.000,  0.000,  0.000);
  addAtom(1,  0.874,  0.618,  0.000);
  addAtom(1, -0.874,  0.618,  0.000);
  addAtom(1,  0.000, -0.618,  0.874);
  addAtom(1,  0.000, -0.618, -0.874);
  // Add bonds to bond array
  addBond(1, 2, "single");
  addBond(1, 3, "single");
  addBond(1, 4, "single");
  addBond(1, 5, "single");
  }


//#   function drawMolecule()
//#
//#   Draw atoms and bonds.
//#
function drawMolecule() {
  // Define local variables
  var i, j, k;
  var bonds = BondMatrix();
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;
  var AtomSize = 0.40;
  var SimpleSwitch = 3000;
  // Create connection to active Canvas
  var mycanvas = activeWin("");
  var canvas = document.getElementById(mycanvas);
  if ( ! canvas )
    return;
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var centerx = canvas.width/2;
  var centery = canvas.height/2;

  // Clear screen before drawing molecule
  clear(ctx, width, height);

  // Define properties of lines
  ctx.strokeStyle = "rgb(0, 0, 255)";
  ctx.lineWidth = 3.0;
  // Depth sort: Draw from back to front
  if ( typeof drawMolecule.deep == 'undefined' ) {
    drawMolecule.deep = [];
    }
  if ( drawMolecule.deep.length != numatoms ) {
    j=0;
    drawMolecule.deep = [];
    for (i=drawMolecule.deep.length; i<numatoms; i++) {
      j++;
      drawMolecule.deep[i] = [];
      drawMolecule.deep[i]["id"] = j;
      drawMolecule.deep[i]["sz"] = molecule[j].z;
      }
    }
  for (i=0; i<numatoms; i++) {
    j = drawMolecule.deep[i].id;
    drawMolecule.deep[i].z = molecule[j].z;
    }
  drawMolecule.deep.sort(function(a,b){
    return(b.z - a.z);
    });

  // If too many atoms, do not use gradients
  if ( numatoms > SimpleSwitch )
    molecule[0].gradients = 0;

  // Loop over all atoms in molecule
  for (i = 0; i < numatoms; i++) {
    atom = drawMolecule.deep[i].id;
    if ( ! molecule[atom].hide ) {
      if ( molecule[0].gradients ) {
          drawAtom(ctx, atom, AtomSize, centerx, centery);//alert("no problem");
        } else {
          drawAtomPlain(ctx, atom, AtomSize, centerx, centery);
        }
      if ( molecule[0].showcharges != 0 )
        DrawChargeCloud(ctx, atom, AtomSize*1.5, centerx, centery);
      if ( molecule[atom].highlite != 0 ){
        DrawAtomHilite(ctx, atom, AtomSize*1.5, centerx, centery);
      }
      // Loop over all bonds on current atom
      for (j = 1; j <= numatoms; j++) {
        if ( (bonds[atom][j] > 0) && (j != atom) && !molecule[j].hide ) {
          for (k=i+1; k < numatoms; k++) {
            if (drawMolecule.deep[k].id == j && molecule[0].showbonds == 1) {
              drawBond(ctx, atom, j, AtomSize, centerx, centery, molecule[0].gradients,bonds[atom][j]);
              }
            }
          }
        }
      }
    }
  // Finished with drawMolecule routine
  }


//#   function showLabels()
//#
//#   Routine to toggle display of atomic labels.
//#
function showLabels() {
  var param = parameters();
  if(param.mode == 'Draw') {
    alert("In Draw mode,cannot show label!");
    return;}
  // Local variables
  var molecule = Mol();
  var cys = OriCrystal();
  if ( molecule[0].showlabels == 0 ) {
    buttonColor("LabelButton",1);
    molecule[0].showlabels = 1;
    drawMolecule();
    if(molecule[0].type=="crystal" && cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    drawAxis();
    if(cys[0].cleave == 1){
      drawsurface();
    }
    return;
    }
  buttonColor("LabelButton",0);
  molecule[0].showlabels = 0;
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  if(cys[0].cleave == 1){
    drawsurface();
  }
  return;
}

///
///Draw line of different color and dash
///
function drawline(ctx,x0,y0,x1,y1,mode,dash){
  var ifdash = dash || 0;
  ctx.beginPath();
  ctx.setLineDash([]);
  var cys = OriCrystal();
  if (typeof drawline.color === "undefined"){
    drawline.color = "rgb(0, 0, 0)";
  }
  if(cys[0].showcube==0&&cys[0].cleave==0)return;
  else{
    if(mode==0){
      ctx.strokeStyle = drawline.color;
    }else if(mode==1){
      ctx.strokeStyle = "rgb(255,0,0)";
    }else if(mode==2){
      ctx.strokeStyle = "rgb(0,0,255)";
    }else if(mode==3){
      ctx.strokeStyle = "rgb(0,255,0)";
    }else if(mode==4){
      if(ifdash==1){
        ctx.setLineDash([5]);
      }
      ctx.strokeStyle = "rgb(0,255,255)";
    }
  }    
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.lineWidth = 1.5;
  ctx.stroke();
}


//
//Hide axis labels
//
function hideAxisLabel(){
  var molecule = Mol();
  if(molecule[0].type == "molecule"){
    alert("Not Executable Here.");
    return;
  }
  var cys = OriCrystal();
  molecule.axisLabelShow = !molecule.axisLabelShow;
  if(cys[0].cleave == 0) {
    drawCube(); 
    drawAxis();
  }
  else if(cys[0].cleave == 1){
    drawsurface();
  }
  
}


function drawlabel(ctx,content,x,y,color,fontsize){
  var molecule = Mol();
  ctx.lineWidth = 1.0;
  ctx.textAlign = "center";
  ctx.font = "normal " + fontsize + "px sans-serif";
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.fillText(content,x,y);
  var w = 10.0 / molecule[0].AtomScale;
  ctx.fillRect(x,y,w*1.5,w);
  ctx.closePath();
}

function drawAxis(){
  var cys = OriCrystal();
  var mycanvas = activeWin("");
  if (typeof drawAxis.labelColor === "undefined"){
  drawAxis.labelColor = "#ffffff";
  }
  var canvas = document.getElementById(mycanvas);
  if ( ! canvas )
  return;
  var ctx = canvas.getContext('2d');
  var centerx = canvas.width/2;
  var centery = canvas.height/2;
  var molecule = Mol();
  var points=molecule[0].axis;
  var cubeindex=[
  [0,1],
  [0,2],
  [0,4],
  ]; 
  var axisname="a";
  for(var i=0;i<cubeindex.length;i++){
  var indexx0=cubeindex[i][0];
  var indexy0=cubeindex[i][1];
  var point0 = points[indexx0];
  var point1 = points[indexy0];
  var point0x = Math.floor(point0[0]*35+centerx+230+0.5);
  var point1x = Math.floor(point1[0]*35+centerx+230+0.5);
  var point0y = Math.floor(point0[1]*35+centery+230+0.5);
  var point1y = Math.floor(point1[1]*35+centery+230+0.5);
  if(indexx0==0&&indexy0==1){   
    drawArrow(ctx,point0x,point0y,point1x,point1y,30,8,4,'rgb(255,0,0)');
    axisname="a";
  }else if(indexx0==0&&indexy0==4){
    drawArrow(ctx,point0x,point0y,point1x,point1y,30,8,4,'rgb(0,255,0)');
    axisname="c";
  }else if(indexx0==0&&indexy0==2){
    drawArrow(ctx,point0x,point0y,point1x,point1y,30,8,4,'rgb(0,0,255)');
    axisname="b";
  }    
    //draw labels for axis
    var a=10;
    var dis = Math.sqrt(Math.pow(point0x-point1x,2)+Math.pow(point0y-point1y,2));
    var x1=point0x;var y1=point0y;
    var x2=point1x;var y2=point1y;
    var x3;var y3;
    x3 = x2 + (x2-x1)*a/dis;
    y3 = y2 + (y2-y1)*a/dis;
    ctx.lineWidth = 1.0;
    ctx.textAlign = "center";
    var fontsize = 14;
    ctx.font = "normal " + fontsize + "px sans-serif";
    var color = drawAxis.labelColor;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillText(axisname,x3,y3);
    ctx.closePath();
  }
}

//#  CTX: Canvas drawing environment
//#  fromX, fromY: starting point (or p1, but it's an array)
//#  toX, toY: terminal coordinates (can also be changed to p2, but it is an array)
//#  theta: the Angle between a straight line and the hypotenuse
//#  headlen: length of triangular hypotenuse
//#  width: arrow line width
//#  color: arrow color

function drawArrow(ctx, fromX, fromY, toX, toY,theta,headlen,width,color) {

  theta = typeof(theta) != 'undefined' ? theta : 30;
  headlen = typeof(theta) != 'undefined' ? headlen : 10;
  width = typeof(width) != 'undefined' ? width : 1;
  color = typeof(color) != 'color' ? color : '#000';

  // Calculate the angles and corresponding coordinates P2 and P3
  var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
    angle1 = (angle + theta) * Math.PI / 180,
    angle2 = (angle - theta) * Math.PI / 180,
    topX = headlen * Math.cos(angle1),
    topY = headlen * Math.sin(angle1),
    botX = headlen * Math.cos(angle2),
    botY = headlen * Math.sin(angle2);

  ctx.save();
  ctx.beginPath();

  var arrowX = fromX - topX,
    arrowY = fromY - topY;

  ctx.moveTo(arrowX, arrowY);
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  arrowX = toX + topX;
  arrowY = toY + topY;
  ctx.moveTo(arrowX, arrowY);
  ctx.lineTo(toX, toY);
  arrowX = toX + botX;
  arrowY = toY + botY;
  ctx.lineTo(arrowX, arrowY);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
  ctx.restore();
}

//#   function showAll()
//#
//#   Show all atoms in molecule
//#
function showAll() {
  var i;
  var molecule = Mol();

  // Loop over all atoms, setting hide flag to 0 for all atoms
  for (i=1; i < molecule[0].numatoms; i++) {
    molecule[i].hide = 0;
    }
  // Finished with showAll routine
}

function centerMove() {

  // Define local variables
  var i, A, numatoms;
  var molSize = 0.0;
  var xc, yc, zc;
  var xyz;
  var activeCanvas = activeWin("");
  var molecule = Mol();
  var cys = OriCrystal();
  // Get height of Canvas
  var canvas = document.getElementById(activeCanvas);
  var height = canvas.height;

  // Find center of molecule
  xc = 0.0;
  yc = 0.0;
  zc = 0.0;
  numatoms = molecule[0].numatoms;
  if(molecule[0].type=="molecule"){
    for (i=1; i <= numatoms; i++) {
    xc += molecule[i].x;
    yc += molecule[i].y;
    zc += molecule[i].z;
    }
    xc /= numatoms;
    yc /= numatoms;
    zc /= numatoms;
  }else{
    for (i=1; i <= numatoms; i++) {
      xc += molecule[i].x;
      yc += molecule[i].y;
      zc += molecule[i].z;
      }
    for(var j=0;j<8;j++){
      xc +=cys[0].points[j][0];
      yc +=cys[0].points[j][1];
      zc +=cys[0].points[j][2];
    }
    if(cys[0].cleave == 1){
      for(var j=0;j<8;j++){
        xc +=cys[0].cleavesurface[j][0];
        yc +=cys[0].cleavesurface[j][1];
        zc +=cys[0].cleavesurface[j][2];
      }
      xc /= (numatoms+16);
      yc /= (numatoms+16);
      zc /= (numatoms+16);
    }else{
      xc /= (numatoms+8);
      yc /= (numatoms+8);
      zc /= (numatoms+8);
    }  
  }
  
  // Translate coordinates to center
  molSize = 0.0;

  for (i=1; i <= numatoms; i++) {
    A = molecule[i].atomicnumber;
    molecule[i].x -= xc;
    molecule[i].y -= yc;
    molecule[i].z -= zc;
    xyz = Math.abs(molecule[i].x);
    xyz = Math.max(xyz,Math.abs(molecule[i].y));
    xyz = Math.max(xyz,Math.abs(molecule[i].z));
    xyz += element(A,"radius");
    molSize = Math.max(molSize,xyz);
    }
  molecule[0].AtomScale = 0.25*height/molSize;
  // Finished with centerMolecule routine
  }

//#   function centerMolecule()
//#
//#   Find center of molecule and move coordinates to center.
//#
function centerMolecule() {

  // Define local variables
  var i, A, numatoms;
  var molSize = 0.0;
  var xc, yc, zc;
  var xyz;
  var activeCanvas = activeWin("");
  var molecule = Mol();
  var cys = OriCrystal();
  // Get height of Canvas
  var canvas = document.getElementById(activeCanvas);
  var height = canvas.height;
  var param = parameters();
  // Find center of molecule
  xc = 0.0;
  yc = 0.0;
  zc = 0.0;
  numatoms = molecule[0].numatoms;
  // if(molecule[0].type=="molecule"){
    for (i=1; i <= numatoms; i++) {
      xc += molecule[i].x;
      yc += molecule[i].y;
      zc += molecule[i].z;
    }
    xc /= numatoms;
    yc /= numatoms;
    zc /= numatoms;
  // }else{
  //   // for (i=1; i <= numatoms; i++) {
  //   //   xc += molecule[i].x;
  //   //   yc += molecule[i].y;
  //   //   zc += molecule[i].z;
  //   //   }
    
  //   if(cys[0].cleave == 1){
  //     for(var j=0;j<8;j++){
  //       xc +=cys[0].cleavesurface[j][0];
  //       yc +=cys[0].cleavesurface[j][1];
  //       zc +=cys[0].cleavesurface[j][2];
  //     }
  //     // xc /= (numatoms+16);
  //     // yc /= (numatoms+16);
  //     // zc /= (numatoms+16);
  //     xc /= 8;
  //     yc /= 8;
  //     zc /= 8;
  //   }else{
  //     for(var j=0;j<8;j++){
  //       xc +=cys[0].points[j][0];
  //       yc +=cys[0].points[j][1];
  //       zc +=cys[0].points[j][2];
  //     }
  //     // xc /= (numatoms+8);
  //     // yc /= (numatoms+8);
  //     // zc /= (numatoms+8);
  //     xc /= 8;
  //     yc /= 8;
  //     zc /= 8;
  //   }  
  // }
  param.centermove = [];
  param.centermove.push(xc);
  param.centermove.push(yc);
  param.centermove.push(zc);
  if(cys[0].cleave == 1){
     for(var i = 0 ; i < 8 ; i++){
      cys[0].cleavesurface[i][0]-=xc;
      cys[0].cleavesurface[i][1]-=yc;
      cys[0].cleavesurface[i][2]-=zc;
    }
  }
  // Translate coordinates to center
  molSize = 0.0;
  for(var j=0;j<8;j++){
      cys[0].points[j][0]-=xc;
      cys[0].points[j][1]-=yc;
      cys[0].points[j][2]-=zc;
  }

  for (i=1; i <= numatoms; i++) {
    A = molecule[i].atomicnumber;
    molecule[i].x -= xc;
    molecule[i].y -= yc;
    molecule[i].z -= zc;
    
    xyz = Math.abs(molecule[i].x);
    xyz = Math.max(xyz,Math.abs(molecule[i].y));
    xyz = Math.max(xyz,Math.abs(molecule[i].z));
    xyz += element(A,"radius");
    molSize = Math.max(molSize,xyz);
    }
  molecule[0].AtomScale = 0.25*height/molSize;
  // Finished with centerMolecule routine
  }

///
///   Helper routine to make coordinates line up in columns
///
function XYZpretty(coord) {
  // Declare local variables
  var space = "   ";
  var mystr = new Array();

  if ( coord >=  100.0) {
    mystr = space + "" + coord.toFixed(4);
    return mystr;
    }

  if ( coord >=   10.0) {
    mystr = space + " " + coord.toFixed(4);
    return mystr;
    }

  if ( coord >=    0.0) {
    mystr = space + "  " + coord.toFixed(4);
    return mystr;
    }
  
  if ( coord >=  -10.0) {
    mystr = space + " " + coord.toFixed(4);
    return mystr;
    }
  
  if ( coord >=  -100.0) {
    mystr = space + "" + coord.toFixed(4);
    return mystr;
    }
  
  mystr = space + coord.toFixed(4);
  return mystr;

  // Finished with XYZpretty
  }

//#   function resetView()
//#
//#   Routine to reset view. Center, rescale, and remove highlights.
//#
function resetView() {
  var param = parameters();
  if(param.mode == 'Draw') {
    alert("In Draw mode,cannot reset view!");
  return;
  }
  // Define local variables
  var i;
  var molecule = Mol();
  var cys = OriCrystal();
  // Remove highlights and show all atoms
  for ( i=1; i <= molecule[0].numatoms; i++ ) {
    molecule[i].highlite = 0;
    molecule[i].hide = 0;
    }

  // Clear Information Window
  InfoWin("",1);

  // Formula, center, scale, and draw
  formula();
  centerMolecule();

  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  if(cys[0].cleave == 1) {
    drawsurface();
  }
  drawAxis();
}

//#   function formula()
//#
//#   Display molecular formula to division with an id = "formula".
//#   Note that the contents of this division will be overwritten.
//#
function formula() {
  var i, j, A;
  var found, num;
  var molweight;
  var molformula = new Array();
  var formulaStr="<p style='padding-top:15px;'>Formula = &nbsp;";
  var molecule = Mol();

  // If no molecule loaded, return
  if (molecule[0].numatoms < 1){
    formulaStr += "</p>";

    // Write formula to screen
    if ( document.getElementById("formula") )
      document.getElementById("formula").innerHTML = formulaStr;
    return;
  }

  // Look for carbon and place in first slot
  num = 0;
  for (i=1; i<=molecule[0].numatoms; i++)
    if ( molecule[i].atomicnumber == 6 ) {
      molformula[num] = [];
      molformula[num][0] = 6;
      molformula[num][1] = 0;
      num++;
      i = molecule[0].numatoms+1;
      }

  // Look for hydrogen in next slot
  for (i=1; i<=molecule[0].numatoms; i++)
    if ( molecule[i].atomicnumber == 1 ) {
      molformula[num] = [];
      molformula[num][0] = 1;
      molformula[num][1] = 0;
      num++;
      i = molecule[0].numatoms+1;
      }

  // Loop over all atoms in molecule
  for (i=1; i<=molecule[0].numatoms; i++) {
    A = molecule[i].atomicnumber;
    found = 0;
    for (j=0; j < num; j++) {
      if (molformula[j][0] == A) {
        molformula[j][1]++;
        found = 1;
        j = num;
        }
      }
    if (found == 0) {
      molformula[num] = new Array(2);
      molformula[num][0] = molecule[i].atomicnumber;
      molformula[num][1] = 1;
      num++;
      }
    }

  // Calculate molecular weight and output formula
  molweight = 0.0;
  molecule[0].formula = "";
  for (i=0; i<num; i++) {
    A = molformula[i][0];
    molweight += element(A,"mass") * molformula[i][1];
    formulaStr += element(A,"symbol");
    molecule[0].formula += element(A,"symbol");
    if (molformula[i][1] > 1) {
      formulaStr += "<sub>"+molformula[i][1]+"</sub>";
      molecule[0].formula += molformula[i][1] + " ";
      }
    }
  formulaStr += "</p>";
  molecule[0].weight = molweight;

  // Write formula to screen
  if ( document.getElementById("formula") )
    document.getElementById("formula").innerHTML = formulaStr;
  if ( molweight > 0.0 )
    InfoWin(molecule[0].formula+" has a molecular weight of "+molweight.toFixed(2)+"\n");

  // End formula routine
  }


// ------ (3) Bond ------

//#   function BondMatrix(value)
//#
//#   Define public routine to store and return Bond Matrix
//#
//#   Parameter:
//#      value = If value given, then set as active matrix
//# 
//#   Return value:
//#      Pointer to current bond matrix, ex.
//#        var bonds = BondMatrix();
//#        bonds[i][j] then gives indication of bond between atoms "i" and "j"
//#
function BondMatrix(value) {
  // Declare local variables
  var id;
  var param = value || 0;

  // Determine which bond matrix to use
  if(typeof BondMatrix.id === "undefined")
    BondMatrix.id = 1;
  if ( param > 0 )
    BondMatrix.id = param;
  id = BondMatrix.id;

  // Initialize molecular array if necessary
  if ( typeof BondMatrix.bonds === "undefined" )
    BondMatrix.bonds = [];
  if ( typeof BondMatrix.bonds[id] === "undefined" ) {
    BondMatrix.bonds[id] = [];
    }

  // End of BondMatrix routine
  return BondMatrix.bonds[id];
  }


///
/// Define routine for bonds creation
///
function createbonds(){
  var molecule = Mol();
  // two tolerences for atom pairs included in bvparm.cif and those not included.
  var tolerence_up = 1.2;
  var tolerence_down = 0.5;


  //Create bonds
  for (var i=1; i < molecule[0].numatoms; i++) {
    for (var j=i+1; j <= molecule[0].numatoms; j++) {
      if (!element(molecule[i].atomicnumber,"bondElements").includes(molecule[j].atomicnumber) &&
      !element(molecule[j].atomicnumber,"bondElements").includes(molecule[i].atomicnumber)) continue;
      var dx = molecule[i].x - molecule[j].x;
      var dy = molecule[i].y - molecule[j].y;
      var dz = molecule[i].z - molecule[j].z;
      var r = Math.sqrt(dx*dx+dy*dy+dz*dz);

      var bond = (element(molecule[i].atomicnumber,"radius") + element(molecule[j].atomicnumber,"radius"));
      if (r <= bond*tolerence_up && r > bond*tolerence_down)
	  //if (r <= bond + 0.3 && r > bond*tolerence_down)
        addBond(i,j,"single");
    }
  } 
}



//#   function addBond(atom1, atom2)
//#
//#   Routine to add bonding information to bonds array
//#   (Note that atom numbers start at 1) 
//#
function addBond(atom1, atom2, bondtype) {

  // Define local variables
  var bonds = BondMatrix();
  var num = 1;
  if(bondtype == "single") {
    num = 1;
  }else if(bondtype == "double"){
    num = 2;
  }else{
    num = 3;
  }
  // Add bonds to matrix
  bonds[atom1][0]++;
  bonds[atom1][atom2] = num;
  bonds[atom2][0]++;
  bonds[atom2][atom1] = num;

  // End of addBond routine
  }


//#   function delBond(atom1, atom2)
//#
//#   Routine to remove bond from bonds array.
//#
function delBond(atom1, atom2) {
  var bonds = BondMatrix();
  //var param = parameter();
  // Remove bond on atom1
  if ( bonds[atom1][atom2] > 0 ) {
    bonds[atom1][atom2] = 0;
    bonds[atom1][0]--;
    }
  // Remove bond on atom2
  if ( bonds[atom2][atom1] > 0 ) {
    bonds[atom2][atom1] = 0;
    bonds[atom2][0]--;
    }
  //param.bondmode="Add";
  //buttonColor("delbond",0);
  // Finished with delBond routine
  }


///
///  deletebonds
///
function deletebonds(){
  var molecule = Mol();
  var cys = OriCrystal();
  //delete bonds
  for (var i=1; i < molecule[0].numatoms; i++) {
    for (var j=i+1; j <= molecule[0].numatoms; j++) {
      var bond = 1.2 * (element(molecule[i].atomicnumber,"radius") + element(molecule[j].atomicnumber,"radius"));
      var dx = molecule[i].x - molecule[j].x;
      var dy = molecule[i].y - molecule[j].y;
      var dz = molecule[i].z - molecule[j].z;
      var r = Math.sqrt(dx*dx+dy*dy+dz*dz);
      if (r <= bond)
        delBond(i,j);
      }
  }  
  drawMolecule();
  if(molecule[0].type == "crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  if(cys[0].cleave == 1){
    drawsurface();
  }
}

///
///  showbonds
///
function showbonds(){
  createbonds();
  drawMolecule();
  var cys = OriCrystal();
  var molecule = Mol();
  if(molecule[0].type == "crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  if(cys[0].cleave == 1){
    drawsurface();
  }
}

///
/// hide and show of bonds switch
///
function changebonds(){
  var param = parameters();
  if(param.mode == 'Draw'){
    alert("In Draw mode,cannot show or hide bond!");
    return;
  }
  var molecule = Mol();
  if(molecule[0].showbonds==1){
    molecule[0].showbonds = 0;
    deletebonds();
  }else{
    molecule[0].showbonds = 1;
    showbonds();
  }
}

///
///   Routine to draw a single bond
///
function drawBond(ctx, atom1, atom2, AtomSize, centerx, centery, smallMolecule, bondsnum) {
  // Define local variables
  var i, j, k;
  var x1, y1, z1, x2, y2, z2;
  var dx, dy, dz;
  var xoff, yoff;
  var dist, r;  
  var molecule = Mol();
  var activeCanvas = activeWin("");
  var AtomScale = molecule[0].AtomScale;
  var BondWidth = Math.floor(0.1*AtomScale + 0.5);
  var bondWidth_line = BondWidth*0.5;
  var bondWidth_stick = BondWidth*1.5;
  // var bondGap = BondWidth * 0.6;
  //var BondWidth = Math.floor(0.05*AtomScale + 0.5);
  var BondColor = "rgb(223,223,223)";
  ctx.setLineDash([]);
  // Get parameters for atoms
  r =  AtomScale * AtomSize * element(molecule[atom1].atomicnumber,"radius") - 2;
  x1 = AtomScale*molecule[atom1].x + centerx;
  y1 = AtomScale*molecule[atom1].y + centery;
  z1 = AtomScale*molecule[atom1].z;
  x2 = AtomScale*molecule[atom2].x + centerx;
  y2 = AtomScale*molecule[atom2].y + centery;
  z2 = AtomScale*molecule[atom2].z;

  // For large molecules, use simpler plot
  if ( ! smallMolecule ) {
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = BondWidth;
  ctx.strokeStyle = BondColor;
  ctx.stroke();
  ctx.closePath();
  }

  // Calculate intersection of bond with sphere
  dx = x2 - x1;
  dy = y2 - y1;
  dz = z2 - z1;
  // dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
  // xoff = x1 + r*dx/dist;
  // yoff = y1 + r*dy/dist;
  var show = showstyle();
  if(bondsnum === 1){
  dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
  xoff = x1 + r*dx/dist;
  yoff = y1 + r*dy/dist;
  // Draw one bond
  if(show.type=="ball and stick 1"){
    ctx.beginPath();
    ctx.moveTo(xoff, yoff);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = BondWidth;
    ctx.strokeStyle =BondColor;
    ctx.lineCap = "round";
    ctx.stroke();
    
  }else if (show.type =="ball and stick 2"){
    var A1=molecule[atom1].atomicnumber;
    var color1=element(A1,"color");
    var A2=molecule[atom2].atomicnumber;
    var color2=element(A2,"color");

    var x3=(x1+x2)/2;
    var y3=(y1+y2)/2;
    ctx.beginPath();
    ctx.moveTo(xoff, yoff);
    ctx.lineTo(x3, y3);
    ctx.lineWidth = bondWidth_stick;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x3, y3);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = bondWidth_stick;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();

  }else if(show.type=="line"){
    var A1=molecule[atom1].atomicnumber;
    var color1=element(A1,"color");
    var A2=molecule[atom2].atomicnumber;
    var color2=element(A2,"color");

    var x3=(x1+x2)/2;
    var y3=(y1+y2)/2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x3, y3);
    ctx.lineWidth = bondWidth_line;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x3, y3);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = bondWidth_line;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();
    
  }else if(show.type=="stick"){
    var A1=molecule[atom1].atomicnumber;
    var color1=element(A1,"color");
    var A2=molecule[atom2].atomicnumber;
    var color2=element(A2,"color");

    var x3=(x1+x2)/2;
    var y3=(y1+y2)/2;      
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x3, y3);
    ctx.lineWidth = bondWidth_stick;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x3, y3);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = bondWidth_stick;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();
  }         
  }
  else if(bondsnum === 2) {
  dist = Math.sqrt(dx*dx + dy*dy + dz*dz) + 2*r;
  xoff = x1 + r*dx/dist;
  yoff = y1 + r*dy/dist;
  var bondGap = BondWidth * 0.6;
  //Draw two bonds
  if (show.type == "ball and stick 1"){
    var bondWidth_stick_2 = (BondWidth + 2) * 0.6;

    ctx.beginPath();
    ctx.moveTo(xoff+bondGap, yoff+bondGap);
    ctx.lineTo(x2+bondGap, y2+bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();
    ctx.moveTo(xoff+bondGap, yoff+bondGap);
    ctx.lineTo(x2+bondGap, y2+bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle = BondColor;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xoff-bondGap, yoff-bondGap);
    ctx.lineTo(x2-bondGap, y2-bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();
    ctx.moveTo(xoff-bondGap, yoff-bondGap);
    ctx.lineTo(x2-bondGap, y2-bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle = BondColor;
    ctx.stroke();

  }else if (show.type == "ball and stick 2"){
    var A1=molecule[atom1].atomicnumber;
    var color1=element(A1,"color");
    var A2=molecule[atom2].atomicnumber;
    var color2=element(A2,"color");
    var bondWidth_stick_2 = bondWidth_stick * 0.6;

    var x3=(x1+x2)/2;
    var y3=(y1+y2)/2;
    ctx.beginPath();
    ctx.moveTo(xoff-bondGap, yoff-bondGap);
    ctx.lineTo(x3-bondGap, y3-bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x3-bondGap, y3-bondGap);
    ctx.lineTo(x2-bondGap, y2-bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();

    var x3=(x1+x2)/2;
    var y3=(y1+y2)/2;
    ctx.beginPath();
    ctx.moveTo(xoff+bondGap, yoff+bondGap);
    ctx.lineTo(x3+bondGap, y3+bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x3+bondGap, y3+bondGap);
    ctx.lineTo(x2+bondGap, y2+bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();

  }else if (show.type == "line"){
    var A1=molecule[atom1].atomicnumber;
    var color1=element(A1,"color");
    var A2=molecule[atom2].atomicnumber;
    var color2=element(A2,"color");
    var bondWidth_line_2 = bondWidth_line * 0.6;

    var x3=(x1+x2)/2;
    var y3=(y1+y2)/2;
    ctx.beginPath();
    ctx.moveTo(x1+bondGap, y1+bondGap);
    ctx.lineTo(x3+bondGap, y3+bondGap);
    ctx.lineWidth = bondWidth_line_2;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x3+bondGap, y3+bondGap);
    ctx.lineTo(x2+bondGap, y2+bondGap);
    ctx.lineWidth = bondWidth_line_2;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x1-bondGap, y1-bondGap);
    ctx.lineTo(x3-bondGap, y3-bondGap);
    ctx.lineWidth = bondWidth_line_2;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x3-bondGap, y3-bondGap);
    ctx.lineTo(x2-bondGap, y2-bondGap);
    ctx.lineWidth = bondWidth_line_2;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();

  } else if (show.type == "stick"){
    var A1=molecule[atom1].atomicnumber;
    var color1=element(A1,"color");
    var A2=molecule[atom2].atomicnumber;
    var color2=element(A2,"color");
    var bondWidth_stick_2 = bondWidth_stick * 0.6;

    var x3=(x1+x2)/2;
    var y3=(y1+y2)/2;      
    ctx.beginPath();
    ctx.moveTo(x1+bondGap, y1+bondGap);
    ctx.lineTo(x3+bondGap, y3+bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x3+bondGap, y3+bondGap);
    ctx.lineTo(x2+bondGap, y2+bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x1-bondGap, y1-bondGap);
    ctx.lineTo(x3-bondGap, y3-bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle =color1;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x3-bondGap, y3-bondGap);
    ctx.lineTo(x2-bondGap, y2-bondGap);
    ctx.lineWidth = bondWidth_stick_2;
    ctx.strokeStyle =color2;
    ctx.lineCap = "round";
    ctx.stroke();
  }
  }

  else{
  dist = Math.sqrt(dx*dx + dy*dy + dz*dz) + 2*r;
  xoff = x1 + r*dx/dist;
  yoff = y1 + r*dy/dist;
  var bondGap = BondWidth * 0.6;
  //Draw Three bonds
  if (show.type == "ball and stick 1"){
  var bondWidth_3 = (BondWidth + 2) * 0.4;

  ctx.beginPath();
  ctx.moveTo(xoff-bondGap, yoff-bondGap);
  ctx.lineTo(x2-bondGap, y2-bondGap);
  ctx.lineWidth = bondWidth_3;
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.stroke();
  ctx.moveTo(xoff-bondGap, yoff-bondGap);
  ctx.lineTo(x2-bondGap, y2-bondGap);
  ctx.lineWidth = BondWidth;
  ctx.strokeStyle = BondColor;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = bondWidth_3;
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.stroke();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = bondWidth_3;
  ctx.strokeStyle = BondColor;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(xoff+bondGap, yoff+bondGap);
  ctx.lineTo(x2+bondGap, y2+bondGap);
  ctx.lineWidth = BbondWidth_3;
  ctx.strokeStyle = "rgb(0,0,0)";
  ctx.stroke();
  ctx.moveTo(xoff+bondGap, yoff+bondGap);
  ctx.lineTo(x2+bondGap, y2+bondGap);
  ctx.lineWidth = bondWidth_3;
  ctx.strokeStyle = BondColor;
  ctx.stroke();
  ctx.closePath();

  }else if (show.type == "ball and stick 2"){
  var A1=molecule[atom1].atomicnumber;
  var color1=element(A1,"color");
  var A2=molecule[atom2].atomicnumber;
  var color2=element(A2,"color");
  var bondWidth_stick_3 = bondWidth_stick * 0.4;

  var x3=(x1+x2)/2;
  var y3=(y1+y2)/2;
  ctx.beginPath();
  ctx.moveTo(xoff-bondGap, yoff-bondGap);
  ctx.lineTo(x3-bondGap, y3-bondGap);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x3-bondGap, y3-bondGap);
  ctx.lineTo(x2-bondGap, y2-bondGap);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(x3, y3);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x3, y3);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(xoff+bondGap, yoff+bondGap);
  ctx.lineTo(x3+bondGap, y3+bondGap);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x3+bondGap, y3+bondGap);
  ctx.lineTo(x2+bondGap, y2+bondGap);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();

  } else if (show.type == "line"){
  var A1=molecule[atom1].atomicnumber;
  var color1=element(A1,"color");
  var A2=molecule[atom2].atomicnumber;
  var color2=element(A2,"color");
  var bondWidth_line_3 = bondWidth_line * 0.4;

  var x3=(x1+x2)/2;
  var y3=(y1+y2)/2;
  ctx.beginPath();
  ctx.moveTo(x1+bondGap, y1+bondGap);
  ctx.lineTo(x3+bondGap, y3+bondGap);
  ctx.lineWidth = bondWidth_line_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x3+bondGap, y3+bondGap);
  ctx.lineTo(x2+bondGap, y2+bondGap);
  ctx.lineWidth = bondWidth_line_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x3, y3);
  ctx.lineWidth = bondWidth_line_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x3, y3);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = bondWidth_line_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x1-bondGap, y1-bondGap);
  ctx.lineTo(x3-bondGap, y3-bondGap);
  ctx.lineWidth = bondWidth_line_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x3-bondGap, y3-bondGap);
  ctx.lineTo(x2-bondGap, y2-bondGap);
  ctx.lineWidth = bondWidth_line_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();

  } else if (show.type == "stick"){
  var A1=molecule[atom1].atomicnumber;
  var color1=element(A1,"color");
  var A2=molecule[atom2].atomicnumber;
  var color2=element(A2,"color");
  var bondWidth_stick_3 = bondWidth_stick * 0.4;

  var x3=(x1+x2)/2;
  var y3=(y1+y2)/2;      
  ctx.beginPath();
  ctx.moveTo(x1+bondGap, y1+bondGap);
  ctx.lineTo(x3+bondGap, y3+bondGap);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x3+bondGap, y3+bondGap);
  ctx.lineTo(x2+bondGap, y2+bondGap);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x3, y3);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x3, y3);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x1-bondGap, y1-bondGap);
  ctx.lineTo(x3-bondGap, y3-bondGap);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color1;
  ctx.lineCap = "round";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x3-bondGap, y3-bondGap);
  ctx.lineTo(x2-bondGap, y2-bondGap);
  ctx.lineWidth = bondWidth_stick_3;
  ctx.strokeStyle =color2;
  ctx.lineCap = "round";
  ctx.stroke();
  }
  }
  return;
}


///
///   Routine to draw a single highlighted bond
///
function HighlightBond(ctx, atom1, atom2, highlite, AtomSize, centerx, centery) {
  // Define local variables
  var i, j, k;
  var x1, y1, z1, x2, y2, z2;
  var dx, dy, dz;
  var xoff, yoff;
  var dist, r;
  var AtomScale = molecule[0].AtomScale;
  var BondWidth = Math.floor(0.10*AtomScale + 0.5);
  var BondColor = "rgba(200,128,51,1.0)";
  var bcolor = "rgba(191,191,191,0.33)";
  var molecule = Mol();
  var activeCanvas = activeWin("");

  // Get parameters for atoms
  r = AtomScale * AtomSize * element(molecule[atom1].atomicnumber,"radius");
  x1 = AtomScale*molecule[atom1].x + centerx;
  y1 = AtomScale*molecule[atom1].y + centery;
  z1 = AtomScale*molecule[atom1].z;
  x2 = AtomScale*molecule[atom2].x + centerx;
  y2 = AtomScale*molecule[atom2].y + centery;
  z2 = AtomScale*molecule[atom2].z;

  // Calculate intersection of bond with sphere
  dx = x2 - x1;
  dy = y2 - y1;
  dz = z2 - z1;
  dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
  xoff = x1 + r*dx/dist;
  yoff = y1 + r*dy/dist;

  // Draw bond
  ctx.beginPath();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = BondWidth + 2;
  ctx.strokeStyle = "rgba(0,0,0,0.33)";
  if ( highlite > 0 )
    ctx.strokeStyle = "rgba(0,0,0,1.0)";
  ctx.stroke();
  ctx.moveTo(xoff, yoff);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = BondWidth;
  if ( highlite > 0 ) {
      ctx.strokeStyle = BondColor;
    } else {
      ctx.strokeStyle = bcolor;
    }
  ctx.stroke();
  ctx.closePath();
  }

//#   function showBondMatrix(BondMtx,BondWin)
//#
//#   Write Bond information to output window.
//#
function showBondMatrix(BondMtx,BondWin) {

  // Define local variables
  var i, j;
  var numstr, plus;
  var dq, dipole;
  var qsign = "";
  var symbol;
  var molcharge;
  var bondtable = new Array();
  var entry = new Array();
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;

  // Calculate molecular charge
  molcharge = 0;
  for (i=1; i <= numatoms; i++)
    molcharge += molecule[i].charge;

  // Show Charge and Dipole moment
  dipole = dipoleMoment();
  BondWin.innerHTML = "<p><strong>Molecular charge = "+molcharge.toFixed(1)+
                      ", Dipole &approx; "+dipole.toFixed(1)+" D</strong>";

  // Write Bond matrix to Information Window
  //--- Header ---
  InfoWin("Bond Matrix:  Off-diagonal = e- in bonds, diagonal = unshared e-\n");
  InfoWin("      ");
  for (i=1; i <= numatoms; i++) {
    symbol = element(molecule[i].atomicnumber,"symbol");
    if (symbol.length < 2)
      symbol += " ";
    InfoWin(" "+symbol+" ");
    if ( (i%5) == 0 )
      InfoWin(" ");
    }
  InfoWin("\n");
  //--- One row for each atom ---
  for (i=1; i <= numatoms; i++) {
    symbol = element(molecule[i].atomicnumber,"symbol");
    if (symbol.length < 2)
      symbol += " ";
    if ( i < 10 )
      InfoWin(" ");
    InfoWin(i+" "+symbol+" ");
    for (j=1; j <= numatoms; j++) {
      InfoWin(BondMtx[i][j].toFixed(1)+" ");
      if ( (j%5) == 0 )
        InfoWin(" ");
      }
    InfoWin(" q = ");
    if ( molecule[i].charge > 0 )
      InfoWin("+");
    InfoWin(molecule[i].charge.toFixed(2)+"\n");
    if ( (i%5) == 0 )
      InfoWin("\n");
    }

  // End of showBondMatrix routine
  return;
  }


// ------ (4) Geometry & Mechanics ------

//#   function mechanics()
//#
//#   Simple routine to perform crude optimization of structure.
//#
function mechanics() {
  var param = parameters();
  if(param.mode == 'View'){
    alert("In View mode,cannot use this function!");
    return;
  }
  // Define local variables
  var i, j, k;
  var Z;
  var loop;
  var erg, deltaE;
  var molOLD = new Array();
  var molNEW = new Array();
  var molecule = Mol();
  var cys = OriCrystal();
  // Drawing Canvas info
  var activecanvas = activeWin("");
  var canvas = document.getElementById(activecanvas);
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  // Parameters
  var MAXSTEP=0.2;
  var MAXLOOP=500;
  var ETHRESH = 0.0000002;

  // Save Molecular information
  Undo("save");

  // Clear information window
  InfoWin("Simple Geometry Optimization starting\n",1);
  geomLabel(ctx,"Simple Geometry Optimization Started.",width);

  // Determine hybridization of all atoms in molecule
  molOLD = hybridization();
  var DEBUG=0;  // Debug hybridization routine
  if (DEBUG > 0) {
    InfoWin("Hybridization\n");
    for (i=1; i <= molecule[0].numatoms; i++) {
      Z = molecule[i].atomicnumber;
      InfoWin(element(Z,"symbol")+" has "+molOLD[i].hybrid+" hybrid orbitals\n");
      }
    }

  // Calculate energy of initial geometry
  erg = mechEnergy(molOLD);
  molOLD[0].energy = erg;
  molOLD[0].step = MAXSTEP;

  // Populate molNEW array
  molNEW[0] = new energyObject();
  molNEW[0].energy = molOLD[0].energy;
  molNEW[0].step = molOLD[0].step;
  for (i=1; i <= molecule[0].numatoms; i++) {
    molNEW[i] = new mechanicsObject();
    molNEW[i].hybrid = molOLD[i].hybrid;
    molNEW[i].x = molOLD[i].x;
    molNEW[i].y = molOLD[i].y;
    molNEW[i].z = molOLD[i].z;
    }

  // Call routine to calculate new geometry
  loop = 0;
  deltaE = ETHRESH*2.0;
  InfoWin(0+": Energy = "+erg.toFixed(8)+"\n");
  while ( (loop<MAXLOOP) && (deltaE>ETHRESH) ) {
    molNEW = optimize(molOLD);
    deltaE = Math.abs( molOLD[0].energy - molNEW[0].energy );

    // Don't allow step size to increase too much
    if ( molNEW[0].step > MAXSTEP )
      molNEW[0].step = MAXSTEP;

    // Copy values from molNEW array into molOLD
    molOLD[0].energy = molNEW[0].energy;
    molOLD[0].step = molNEW[0].step;
    for (i=1; i <= molecule[0].numatoms; i++) {
      molOLD[i].hybrid = molNEW[i].hybrid;
      molOLD[i].x = molNEW[i].x;
      molOLD[i].y = molNEW[i].y;
      molOLD[i].z = molNEW[i].z;
      }

    // Force at least 3 iterations
    loop++;
    if (loop < 3)
      if ( deltaE < ETHRESH )
        deltaE = ETHRESH*2.0;

    // If structure approaching convergence, increase step size
    if ( deltaE < ETHRESH ) {
      if ( molNEW[0].step < MAXSTEP ) {
        molOLD[0].step *= 1.5;
        molNEW = optimize(molOLD);
        deltaE = Math.abs( molOLD[0].energy - molNEW[0].energy );
        if ( deltaE > ETHRESH ) {
          molOLD[0].energy = molNEW[0].energy;
          molOLD[0].step = molNEW[0].step;
          for (i=1; i <= molecule[0].numatoms; i++) {
            molOLD[i].hybrid = molNEW[i].hybrid;
            molOLD[i].x = molNEW[i].x;
            molOLD[i].y = molNEW[i].y;
            molOLD[i].z = molNEW[i].z;
            }
          }
        }
      }

    // Save current structure and display geometry every 5 steps
    InfoWin(loop+": Energy = "+molNEW[0].energy.toFixed(8)+"\n");
    //InfoWin(" Step = "+molNEW[0].step.toFixed(5)+"\n");
    DEBUG=1;
    if ( (DEBUG>0) && (loop%5 == 0) ) {
      for (i=1; i <= molecule[0].numatoms; i++) {
        molecule[i].x = molNEW[i].x;
        molecule[i].y = molNEW[i].y;
        molecule[i].z = molNEW[i].z;
        }
      centerMolecule();
      drawMolecule();
      if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      drawAxis();
      geomLabel(ctx,"Simple Geometry Optimization in progress.",width);
      }
    }

  // Save optimized coordinates and display structure
  InfoWin("Final Energy at loop "+loop+" = "+molNEW[0].energy.toFixed(8)+"\n");
  InfoWin("Geometry Optimization complete.\n");
  if ( loop >= MAXLOOP )
    InfoWin("Too many steps. Optimization may not be complete.\n");
  for (i=1; i <= molecule[0].numatoms; i++) {
    molecule[i].x = molNEW[i].x;
    molecule[i].y = molNEW[i].y;
    molecule[i].z = molNEW[i].z;
    }
  centerMolecule();
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  // Finished with mechanics routine
  }


///
///   Define object to hold temporary molecular information
///
function mechanicsObject() {
  this.hybrid = 0;
  this.x = 0.0;
  this.y = 0.0;
  this.z = 0.0;
  }


///
///   Define object to hold temporary energy/optimization information
///
function energyObject() {
  this.energy = 0.0;
  this.rstep = 0;
  this.astep = 0;
  }


//#   function distance(mol, atomA, atomB)
//#
//#   Calculate the distance between two atoms in mol array.
//#
function distance(mol, atomA, atomB) {

  // Calculate distance between atoms
  var dx = mol[atomA].x - mol[atomB].x;
  var dy = mol[atomA].y - mol[atomB].y;
  var dz = mol[atomA].z - mol[atomB].z;
  var r = Math.sqrt(dx*dx+dy*dy+dz*dz);

  // Exit distance routine
  return r;
  }


//#   function angle(mol, atomA, atomB, atomC)
//#
//#   Calculate the angle between A--B--C in mol array
//#
function angle(mol, atomA, atomB, atomC) {

  // Calculate vector BA
  var dax = mol[atomA].x - mol[atomB].x;
  var day = mol[atomA].y - mol[atomB].y;
  var daz = mol[atomA].z - mol[atomB].z;
  var ra = Math.sqrt(dax*dax+day*day+daz*daz);

  // Calculate vector BC
  var dbx = mol[atomC].x - mol[atomB].x;
  var dby = mol[atomC].y - mol[atomB].y;
  var dbz = mol[atomC].z - mol[atomB].z;
  var rb = Math.sqrt(dbx*dbx+dby*dby+dbz*dbz);

  // Calculate bond angle
  var ang = (dax*dbx + day*dby + daz*dbz) / (ra*rb);
  if (ang >  1.0) ang = 1.0;
  if (ang < -1.0) ang = -1.0;
  ang = Math.acos(ang) * 180.0 / Math.PI;

  // Exit distance routine
  return ang;
  }

///
///reset the position to make the center of cube overlap with the canvas' center
///
function resetPos(){
  var molecule = Mol();
  var cys = OriCrystal();
  centerMolecule();
  drawMolecule();
  if(molecule[0].type == "crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  if(cys[0].cleave == 1){
    drawsurface();
  }
}

//green
function green(){
  var cys = OriCrystal();
  var molecule = Mol();
  for(var i=0;i<20;i++){
    var point1 = molecule[0].axis[0];
    var point2 = molecule[0].axis[1];
    var point3 = molecule[0].axis[2];
    var x1 = point1[0];var y1 = point1[1];var z1 = point1[2];
    var x2 = point2[0];var y2 = point2[1];var z2 = point2[2];
    var x3 = point3[0];var y3 = point3[1];var z3 = point3[2];
    var a=(y2-y1)*(z3-z1)-(y3-y1)*(z2-z1);
    var b=(z2-z1)*(x3-x1)-(z3-z1)*(x2-x1);
    var c=(x2-x1)*(y3-y1)-(x3-x1)*(y2-y1);
    var mycanvas = activeWin("");
    var canvas = document.getElementById(mycanvas);
    if ( ! canvas )
      return;
    var ctx = canvas.getContext('2d');
    var xx=a*500+500;
    var yy=b*500+500;
    var fvec = [a,b,c];
    var vec = [0,0,100];
    //rotate around x axis
    var angx = Math.acos(c/Math.sqrt(b*b+c*c))*180/Math.PI;
    
    //rotate around y axis
    var angy = Math.acos(c/Math.sqrt(a*a+c*c))*180/Math.PI;
    rotateX(angx);
    rotateY(angy);
  }
  //rotate around z axis
  var o1 = molecule[0].axis[1][0]-molecule[0].axis[0][0];
  var o2 = molecule[0].axis[1][1]-molecule[0].axis[0][1];
  var o3 = molecule[0].axis[1][2]-molecule[0].axis[0][2];
  var angz = Math.acos(o1/Math.sqrt(o1*o1+o2*o2))*180/Math.PI;
  if(o1 >= 0 && o2 >= 0){
    angz=-1*angz;
  }
  if(o1 <= 0 && o2 >= 0){
    angz=-1*angz;
  }
  rotateZ(angz);
}

function red(){
  var cys = OriCrystal();
  var molecule = Mol();
  for(var i=0;i<20;i++){
    var point1 = molecule[0].axis[0];
    var point2 = molecule[0].axis[2];
    var point3 = molecule[0].axis[4];
    var x1 = point1[0];var y1 = point1[1];var z1 = point1[2];
    var x2 = point2[0];var y2 = point2[1];var z2 = point2[2];
    var x3 = point3[0];var y3 = point3[1];var z3 = point3[2];
    var a=(y2-y1)*(z3-z1)-(y3-y1)*(z2-z1);
    var b=(z2-z1)*(x3-x1)-(z3-z1)*(x2-x1);
    var c=(x2-x1)*(y3-y1)-(x3-x1)*(y2-y1);
    var mycanvas = activeWin("");
    var canvas = document.getElementById(mycanvas);
    if ( ! canvas )
      return;
    var ctx = canvas.getContext('2d');
    var xx=a*500+500;
    var yy=b*500+500;
    var fvec = [a,b,c];
    var vec = [0,0,100];
    //rotate round x axis
    var angx = Math.acos(c/Math.sqrt(b*b+c*c))*180/Math.PI;
    
    //rotate around y axis
    var angy = Math.acos(c/Math.sqrt(a*a+c*c))*180/Math.PI;
    rotateX(angx);
    rotateY(angy);
  }
  //rotate around z axis
  var o1 = molecule[0].axis[2][0]-molecule[0].axis[0][0];
  var o2 = molecule[0].axis[2][1]-molecule[0].axis[0][1];
  var o3 = molecule[0].axis[2][2]-molecule[0].axis[0][2];
  var angz = Math.acos(o1/Math.sqrt(o1*o1+o2*o2))*180/Math.PI;
  if(o1 >= 0 && o2 >= 0){
    angz = -1*angz;
  }
  if(o1 <=0 && o2 >= 0){
    angz = -1*angz;
  }
  rotateZ(angz);
}

function blue(){
  var cys = OriCrystal();
  var molecule = Mol();
  for(var i=0;i<20;i++){
    var point1 = molecule[0].axis[0];
    var point2 = molecule[0].axis[1];
    var point3 = molecule[0].axis[4];
    var x1 = point1[0];var y1 = point1[1];var z1 = point1[2];
    var x2 = point2[0];var y2 = point2[1];var z2 = point2[2];
    var x3 = point3[0];var y3 = point3[1];var z3 = point3[2];
    var a=(y2-y1)*(z3-z1)-(y3-y1)*(z2-z1);
    var b=(z2-z1)*(x3-x1)-(z3-z1)*(x2-x1);
    var c=(x2-x1)*(y3-y1)-(x3-x1)*(y2-y1);
    var mycanvas = activeWin("");
    var canvas = document.getElementById(mycanvas);
    if ( ! canvas )
      return;
    var ctx = canvas.getContext('2d');
    var xx=a*500+500;
    var yy=b*500+500;
    var fvec = [a,b,c];
    var vec = [0,0,100];
    //rotate around x axis
    var angx = Math.acos(c/Math.sqrt(b*b+c*c))*180/Math.PI;
    
    //rotate around y axis
    var angy = Math.acos(c/Math.sqrt(a*a+c*c))*180/Math.PI;
    rotateX(angx);
    rotateY(angy);
  }
  //绕z轴旋转
  var o1 = molecule[0].axis[4][0]-molecule[0].axis[0][0];
  var o2 = molecule[0].axis[4][1]-molecule[0].axis[0][1];
  var o3 = molecule[0].axis[4][2]-molecule[0].axis[0][2];
  var angz = Math.acos(o1/Math.sqrt(o1*o1+o2*o2))*180/Math.PI;
  if(o1 >=0 && o2>=0){
    angz = -1*angz;
  }
  if(o1 <=0 && o2>=0){
    angz = -1*angz;
  }
  rotateZ(angz);
}

//#   function dihedral(mol, atomA, atomB, atomC, atomD)
//#
//#   Routine to calculate the dihedral angle for A--B--C--D
//#
function dihedral(mol, atomA, atomB, atomC, atomD) {

  // Define local variables
  var i, j, k;
  var dux, duy, duz;
  var dvx, dvy, dvz;
  var crossA, crossAx, crossAy, crossAz;
  var crossB, crossBx, crossBy, crossBz;

  // Calculate cross product of BA x BC
  dux = mol[atomA].x - mol[atomB].x;
  duy = mol[atomA].y - mol[atomB].y;
  duz = mol[atomA].z - mol[atomB].z;
  dvx = mol[atomC].x - mol[atomB].x;
  dvy = mol[atomC].y - mol[atomB].y;
  dvz = mol[atomC].z - mol[atomB].z;
  crossAx = duy*dvz - duz*dvy;
  crossAy = duz*dvx - dux*dvz;
  crossAz = dux*dvy - duy*dvx;
  crossA  = Math.sqrt(crossAx*crossAx + crossAy*crossAy + crossAz*crossAz);

  // Calculate cross product of CD x CB
  dux = mol[atomD].x - mol[atomC].x;
  duy = mol[atomD].y - mol[atomC].y;
  duz = mol[atomD].z - mol[atomC].z;
  crossBx = duz*dvy - duy*dvz;
  crossBy = dux*dvz - duz*dvx;
  crossBz = duy*dvx - dux*dvy;
  crossB  = Math.sqrt(crossBx*crossBx + crossBy*crossBy + crossBz*crossBz);

  // Use dot product to calculate dihedral angle
  ang = (-crossAx*crossBx-crossAy*crossBy-crossAz*crossBz)/(crossA*crossB);
  if (ang >  1.0) ang = 1.0;
  if (ang < -1.0) ang = -1.0;
  ang = Math.acos(ang) * 180.0 / Math.PI;

  // Finished with dihedral routine
  return ang;
  }


///
///   Determine number of hybrid orbitals on all atoms
///
function hybridization() {

  // Define local variables
  var i, j, k;
  var valence;
  var optmol = new Array();
  var molecule = Mol();
  var bonds = BondMatrix();

  // Copy molecule data into local array
  optmol[0] = new energyObject();
  optmol[0].energy = 0.0;
  optmol[0].step = 0.0;
  for (i=1; i <= molecule[0].numatoms; i++) {
    optmol[i] = new mechanicsObject();
    optmol[i].hybrid = 0;
    optmol[i].x = molecule[i].x;
    optmol[i].y = molecule[i].y;
    optmol[i].z = molecule[i].z;
    }

  // Loop over all atoms in molecule
  for (i=1; i <= molecule[0].numatoms; i++) {
    valence = element(molecule[i].atomicnumber,"valence");
    switch (valence) {
      case 1:
      case 2:
      case 3:
          optmol[i].hybrid = bonds[i][0];
          break;
      default:
          optmol[i].hybrid = valence + bonds[i][0] - 4;
          break;
      }
    while ( (optmol[i].hybrid>bonds[i][0]) && (optmol[i].hybrid>=5) ) {
      optmol[i].hybrid = optmol[i].hybrid-1;
      }
    }

  // Look for delocalized lone pairs
  for (i=1; i <= molecule[0].numatoms; i++) {
    if ( (optmol[i].hybrid == 4) && (bonds[i][0]<4) ) {
      for (j=1; j <= molecule[0].numatoms; j++) {
        k = bonds[i][j];
        if (k > 0) {
          if ( optmol[k].hybrid == 3 ) {
            optmol[i].hybrid = 3;
            // InfoWin("Delocalized lone pair found on atom "+i+" bonded to "+bonds[i][j]+"\n");
            }
          }
        }
      }
    }

  // End hybridization routine
  return optmol;
  }


///
///   Calculate the mechanics energy of the current geometry
///
function mechEnergy(current) {

  // Define local variables
  var i, j, k;
  var ii, bi, bj, ia, ja;
  var r0, r1, r2;
  var dx, dy, dz, r, dr;
  var atomA, atomB, maxBonds;
  var da, dax, day, daz;
  var db, dbx, dby, dbz;
  var ang;
  var tetra = Math.acos(-1/3.0) * 180.0 / Math.PI;
  var energy = 0.0;
  var molecule = Mol();
  var bonds = BondMatrix();

  // Parameters
  var penaltyR  = 20000.0;
  var penaltyA  =    10.0;
  var penaltyD  =     5.0;
  var penaltyVDW =  500.0;

  // Look for hybridization error
  DEBUG=1;
  if ( DEBUG > 0 ) {
    var hytotal = 0;
    for (i=1; i <= molecule[0].numatoms; i++) {
      hytotal += current[i].hybrid;
      }
    if (hytotal < molecule[0].numatoms)
      InfoWin("*** Too few hybrid orbitals ("+hytotal+") returned at end of optimize\n");
    }

  // Calculate energy penalty for bond lengths
  for (i=1; i <= molecule[0].numatoms; i++) {
    r1 = element(molecule[i].atomicnumber,"radius");
    if ( current[i].hybrid == 3 )
      r1 -= 0.05;
    if ( current[i].hybrid == 2 )
      r1 -= 0.10;
    for (j=1; j <= molecule[0].numatoms; j++) {
      if ( bonds[i][j] > 0) {
        k = j;
        r2 = element(molecule[k].atomicnumber,"radius");
        if ( current[k].hybrid == 3 )
          r2 -= 0.05;
        if ( current[k].hybrid == 2 )
          r2 -= 0.10;
        r0 = r1 + r2;  // Ideal bond length
        dx = current[i].x - current[k].x;
        dy = current[i].y - current[k].y;
        dz = current[i].z - current[k].z;
        r = Math.sqrt(dx*dx+dy*dy+dz*dz);
        energy += penaltyR*(r-r0)*(r-r0);
        }
      }
    }

  // Calculate energy penalty for bond angles
  for (i=1; i <= molecule[0].numatoms; i++) {
    if (current[i].hybrid > 1) {
      for (j=1; j < molecule[0].numatoms; j++) {
        if (bonds[i][j] > 0) {
          atomA = j;
          dax = current[atomA].x  - current[i].x;
          day = current[atomA].y  - current[i].y;
          daz = current[atomA].z  - current[i].z;
          da = Math.sqrt(dax*dax + day*day + daz*daz);
          for (k=j+1; k <= molecule[0].numatoms; k++) {
          	if (bonds[i][k] > 0) {
              atomB = k;
              dbx = current[atomB].x  - current[i].x;
              dby = current[atomB].y  - current[i].y;
              dbz = current[atomB].z  - current[i].z;
              db = Math.sqrt(dbx*dbx + dby*dby + dbz*dbz);
              ang = (dax*dbx+day*dby+daz*dbz)/(da*db);
              if (ang >  1.0) ang = 1.0;
              if (ang < -1.0) ang = -1.0;
              ang = Math.acos(ang) * 180.0 / Math.PI;
              switch (current[i].hybrid) {
                case 2:
                    energy += penaltyA*(ang-180.0)*(ang-180.0);
                    break;
                case 3:
                    energy += penaltyA*(ang-120.0)*(ang-120.0);
                    break;
                case 4:
                    energy += penaltyA*(ang-tetra)*(ang-tetra);
                    break;
                case 5:
                case 6:
                    if (ang < 100.0)
                      energy += penaltyA*(ang-90.0)*(ang-90.0);
                    break;
                }
          	  }
            }
          }
        }
      }
    }

  // Calculate energy penalty for sp3-sp3 dihedral angles
  for (i=1; i < molecule[0].numatoms; i++) {
    if (current[i].hybrid == 4) {
      for (ii=i+1; ii<=molecule[0].numatoms; ii++) {
        if ( (bonds[i][ii] > 0) && (current[ii].hybrid == 4) ) {
          j = ii;
          for (bi=1; bi<=molecule[0].numatoms; bi++) {
            if ( (bonds[i][bi]>0) && (bi!=j) && (bi!=i) ) {
              ia = bi;
              for (bj=1; bj<=molecule[j].numatoms; bj++) {
                if ( (bonds[j][bj]>0) && (bj!=j) && (bj!=i) && (bj!=ia) ) {
                  ja = molecule[j].bonds[bj];
                  ang = Math.abs(dihedral(current, ia, i, j, ja));
                  while (ang > 120.0)
                    ang -= 120.0;
                  energy += penaltyD*(ang-60.0)*(ang-60.0);
//                  InfoWin("Dihedral: "+ia+"-"+i+"-"+j+"-"+ja);
//                  InfoWin(" = "+ang+"\n");
                  }
                }
              }
            }
          }
        }
      }
    }

  // Calculate energy penalty for sp2-sp2 dihedral angles (pi bonds)
  for (i=1; i < molecule[0].numatoms; i++) {
    if (current[i].hybrid == 3) {
      for (ii=i+1; ii<=molecule[i].numatoms; ii++) {
        if ( (bonds[i][ii]>0) && (current[j].hybrid == 3) ) {
          j = ii;
          for (bi=1; bi<=molecule[i].numatoms; bi++) {
            if ( (bonds[i][bi]>0) && (bi!=j) && (bi!=i) ) {
              ia = bi;
              for (bj=1; bj<=molecule[j].numatoms; bj++) {
                if ( (bonds[j][bj]>0) && (bj!=i) && (bj!=j) && (bj!=ia)  ) {
                  ja = bj;
                  ang = Math.abs(dihedral(current, ia, i, j, ja));
                  if (ang > 180.0)
                    ang -= 180.0;
                  if (ang > 135.0)
                    ang = 180.0 - ang;
                  energy += penaltyD*ang*ang;
                  // InfoWin("Dihedral: "+ia+"-"+i+"-"+j+"-"+ja);
                  // InfoWin(" = "+ang+"\n");
                  }
                }
              }
            }
          }
        }
      }
    }

  // Calculate energy penalty for van der Waal's repulsion
  for (i=1; i < molecule[0].numatoms; i++) {
    r1 = element(molecule[i].atomicnumber,"radius");
    for (j=i+1; j <= molecule[0].numatoms; j++) {
      r2 = element(molecule[j].atomicnumber,"radius");
      r = distance(current, i, j);
      if ( r < 0.1 )
        r = 0.1;
      r = r/(r1+r2);
      energy += penaltyVDW / (r*r*r*r*r*r);
      }
    }

  // End of mechEnergy routine
  return energy;
  }


///
///   Calculate 'optimal' change in all coordinates
///
function changexyz(current) {

  // Define local variables
  var molecule = Mol();
  var i, j, k;
  var ixyz;
  var delta = [];
  var EZero, energyX, energyY, energyZ;
  var stepx, stepy, stepz;
  var stepfactor;
  var oldx, oldy, oldz;
  var randomnumber;

  // Parameters
  var stepsize = current[0].step;

  // Debug hybridization routine
  var DEBUG=0;
  if (DEBUG > 0) {
    InfoWin("Hybridization\n");
    for (i=1; i <= molecule[0].numatoms; i++) {
      Z = molecule[i].atomicnumber;
      InfoWin(element(Z,"symbol")+" has "+current[i].hybrid+" hybrid orbitals\n");
      }
    }

  // Initialize delta array
  for (i=0; i <= molecule[0].numatoms; i++) {
    delta[i] = [0.0, 0.0, 0.0];
    }

  // Populate trial array
  var trial = new Array(); 
  trial[0] = new energyObject();
  trial[0].energy = current[0].energy;
  trial[0].step = current[0].step;
  for (i=1; i <= molecule[0].numatoms; i++) {
    trial[i] = new mechanicsObject();
    trial[i].hybrid = current[i].hybrid;
    trial[i].x = current[i].x;
    trial[i].y = current[i].y;
    trial[i].z = current[i].z;
    }

  // Loop over all coordinates, looking for 'best' changes
  EZero = mechEnergy(trial);
  for (i=1; i <= molecule[0].numatoms; i++) {

    // Save current coordinates
    oldx = trial[i].x;
    oldy = trial[i].y;
    oldz = trial[i].z;

    // Loop over changes in all coordinates
    for (ixyz=0; ixyz<6; ixyz++) {
      stepx = 0.0;
      stepy = 0.0;
      stepz = 0.0;
      energyX = EZero;
      energyY = EZero;
      energyZ = EZero;
      (ixyz%2) ? stepfactor=1.0 : stepfactor=-1.0;
      switch (ixyz) {
        case 0:
        case 1:
            trial[i].x = oldx + stepfactor*stepsize;
            Energy = mechEnergy(trial);
            while ( (Energy>EZero) && (stepfactor>0.1) ) {
              stepfactor *= 0.75;
              trial[i].x = oldx + stepfactor*stepsize;
              Energy = mechEnergy(trial);
              }
            if ( Energy < energyX )
              stepx = stepfactor;
            trial[i].x = oldx;
            delta[i][0] = stepx*stepsize;
            break;
        case 2:
        case 3:
            trial[i].y = oldy + stepfactor*stepsize;
            Energy = mechEnergy(trial);
            while ( (Energy>EZero) && (stepfactor>0.1) ) {
              stepfactor *= 0.75;
              trial[i].y = oldy + stepfactor*stepsize;
              Energy = mechEnergy(trial);
              }
            if ( Energy < energyY )
              stepy = stepfactor;
            trial[i].y = oldy;
            delta[i][1] = stepy*stepsize;
            break;
        case 4:
        case 5:
            trial[i].z = oldz + stepfactor*stepsize;
            Energy = mechEnergy(trial);
            while ( (Energy>EZero) && (stepfactor>0.1) ) {
              stepfactor *= 0.75;
              trial[i].z = oldz + stepfactor*stepsize;
              Energy = mechEnergy(trial);
              }
            if ( Energy < energyZ )
              stepz = stepfactor;
            trial[i].z = oldz;
            delta[i][2] = stepz*stepsize;
            break;
        }
      }

    // Finished loop for atom 'i'
    }

  // End of changexyz routine
  return delta;
  }


///
///   Simple molecular mechanics (kind of) geometry optimization
///
function optimize(current) {

  // Define local variables
  var i, j, k;
  var ib;
  var newstep;
  var EFit;
  var EMin;
  var beststep, trial;
  var maxstep;
  var delta  = new Array();
  var molNEW  = new Array();
  var molecule = Mol();

  // Parameters
  var MINSTEP=0.001;
  var step = current[0].step;
  var eINITIAL = current[0].energy;

  // Look for a few obvious errors
  DEBUG=1;
  if ( DEBUG > 0 ) {
    var erg = mechEnergy(current);
    if (erg != eINITIAL)
      InfoWin("*** Call to mechEnergy changed energy from "+eINITIAL+" to "+erg+"\n");
    var hytotal = 0;
    for (i=1; i <= molecule[0].numatoms; i++) {
      hytotal += current[i].hybrid;
      }
    if (hytotal < molecule[0].numatoms)
      InfoWin("*** Too few hybrid orbitals ("+hytotal+")\n");
    }

  // Initialize delta array
  for (i=0; i <= molecule[0].numatoms; i++) {
    delta[i] = [0.0, 0.0, 0.0];
    }

  // Call routine to calculate changes in coordinates
  // and find maximum change.
  delta = changexyz(current);
  maxstep = 0.0;
  for (i=0; i <= molecule[0].numatoms; i++) {
    for (j=0; j < 3; j++) {
      if ( Math.abs(delta[i][j]) > maxstep )
        maxstep = Math.abs(delta[i][j]);
      }
    }

  // Simple line search to find best change in coordinates
  EMin = current[0].energy;
  beststep = 0.0;
  trial = 1.0;
  EFit = trialEnergy(current,delta,trial);
  while ( (EFit > EMin) && (trial > 0.002) ) {
    trial *= 0.75;
    EFit = trialEnergy(current,delta,trial);
    }
  if (EFit < EMin) {
    beststep = trial;
    EMin = EFit;
    }

  // Determine new step sizes for next iteration
  newstep = (beststep+0.5) * (current[0].step + maxstep);
  if (newstep < MINSTEP)
    newstep = MINSTEP;

  // Populate molNEW object with new geometry
  molNEW[0] = new energyObject();
  molNEW[0].energy = EMin;
  molNEW[0].step = newstep;
  for (i=1; i <= molecule[0].numatoms; i++) {
    molNEW[i] = new mechanicsObject();
    molNEW[i].hybrid = current[i].hybrid;
    molNEW[i].x = current[i].x + beststep*delta[i][0];
    molNEW[i].y = current[i].y + beststep*delta[i][1];
    molNEW[i].z = current[i].z + beststep*delta[i][2];
    }

  // DEBUG: Show changes in coordinates from optimization
  DEBUG = 0;
  if (DEBUG > 0) {
    for (i=0; i <= molecule[0].numatoms; i++) {
      InfoWin("Change in coordinates = (");
      for (j=0; j < 3; j++) {
        InfoWin(delta[i][j].toFixed(5));
        if (j<2)
          InfoWin(", ");
        }
      InfoWin(")\n");
      }
    InfoWin("--- Max change = "+maxstep.toFixed(5)+"\n");
    }

  // Finished with optimize routine
  return (molNEW);
  }


///
///   Calculate the mechanics energy of the current geometry
///
function trialEnergy(current,delta,step) {

  // Define local variables
  var i;
  var trial = new Array(); 
  var molecule = Mol();

  // Populate array
  trial[0] = new energyObject();
  trial[0].energy = current[0].energy;
  trial[0].step = current[0].step;
  for (i=1; i <= molecule[0].numatoms; i++) {
    trial[i] = new mechanicsObject();
    trial[i].hybrid = current[i].hybrid;
    trial[i].x = current[i].x + step*delta[i][0];
    trial[i].y = current[i].y + step*delta[i][1];
    trial[i].z = current[i].z + step*delta[i][2];
    }

  // End of trialEnergy routine
  return mechEnergy(trial);
  }





//
// -------------------- MOF RECOGNITION --------------------
//


// ------ (1) Solvent ------

//#     function Sol():
//#     Sol.solvent             - all molecules that are considered solvents
//#     Sol.solNum              - number of solvents recorded
//#     Sol.solvent[i].name     - name of the solvent
//#     Sol.solvent[i].atoms    - array of atoms in of this solvent
//#     Sol.solvent[i].atomNum  - number of atoms in this solvent

function Sol() {
  if (typeof Sol.solvent === "undefined") {
      Sol.solvent = [];
      Sol.solvent[0] = addSolvent("C2Cl3H3", ["C", "C", "Cl", "Cl", "Cl", "H", "H", "H"]);
      Sol.solvent[1] = addSolvent("C2Cl3H3O", ["C", "C", "Cl", "Cl", "Cl", "H", "H", "H", "O"]);
      Sol.solvent[2] = addSolvent("C2Cl3H", ["C", "C", "Cl", "Cl", "Cl", "H"]);
      Sol.solvent[3] = addSolvent("C2Cl2H2", ["C", "C", "Cl", "Cl", "Cl", "H", "H"]);
      Sol.solvent[4] = addSolvent("C7H16O2", ["C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[5] = addSolvent("C3H8O2", ["C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[6] = addSolvent("C2Cl2H4", ["C", "C", "Cl", "Cl", "H", "H", "H", "H"]);
      Sol.solvent[7] = addSolvent("C2Cl2H2", ["C", "C", "Cl", "Cl", "H", "H"]);
      Sol.solvent[8] = addSolvent("C4H10O2", ["C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[9] = addSolvent("C4H8O2", ["C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[10] = addSolvent("C4H10O", ["C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[11] = addSolvent("C5H12O", ["C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[12] = addSolvent("C3H8O", ["C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[13] = addSolvent("C5H12O2", ["C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[14] = addSolvent("C3H8O2", ["C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[15] = addSolvent("C5H10O", ["C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[16] = addSolvent("C2H4O2", ["C", "C", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[17] = addSolvent("C3H6O", ["C", "C", "C", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[18] = addSolvent("C2H3N", ["C", "C", "H", "H", "H", "N"]);
      Sol.solvent[19] = addSolvent("C6H6", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[20] = addSolvent("C6H12O2", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[21] = addSolvent("CCl4", ["C", "Cl", "Cl", "Cl", "Cl"]);
      Sol.solvent[22] = addSolvent("C6H5Cl", ["C", "C", "C", "C", "C", "C", "Cl", "H", "H", "H", "H", "H"]);
      Sol.solvent[23] = addSolvent("CCl3H", ["C", "Cl", "Cl", "Cl", "H"]);
      Sol.solvent[24] = addSolvent("C9H12", ["C", "C", "C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[25] = addSolvent("C6H12", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[26] = addSolvent("CCl2H2", ["C", "Cl", "Cl", "H", "H"]);
      Sol.solvent[27] = addSolvent("C6H15N", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "N"]);
      Sol.solvent[28] = addSolvent("C3H7O", ["C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[29] = addSolvent("C2H6NoO", ["C", "C", "H", "H", "H", "H", "H", "H", "No", "O"]);
      Sol.solvent[30] = addSolvent("C2H6O", ["C", "C", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[31] = addSolvent("C3H6O2", ["C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[32] = addSolvent("C2H6O2", ["C", "C", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[33] = addSolvent("CH3NO", ["C", "H", "H", "H", "N", "O"]);
      Sol.solvent[34] = addSolvent("CH2O2", ["C", "H", "H", "O", "O"]);
      Sol.solvent[35] = addSolvent("C7H16", ["C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[36] = addSolvent("C6H14", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[37] = addSolvent("C8H18", ["C", "C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[38] = addSolvent("C6H14O", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[39] = addSolvent("C8H10", ["C", "C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[40] = addSolvent("CH4O", ["C", "H", "H", "H", "H", "O"]);
      Sol.solvent[41] = addSolvent("C7H8O", ["C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[42] = addSolvent("C6H12O", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[43] = addSolvent("C7H14", ["C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[44] = addSolvent("C4H8O", ["C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[45] = addSolvent("C4H9NO", ["C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "N", "O"]);
      Sol.solvent[46] = addSolvent("CH3NO2", ["C", "H", "H", "H", "N", "O", "O"]);
      Sol.solvent[47] = addSolvent("C5H9NO", ["C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "N", "O"]);
      Sol.solvent[48] = addSolvent("C8H10", ["C", "C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[49] = addSolvent("C5H12", ["C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[50] = addSolvent("C5H10O2", ["C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O"]);
      Sol.solvent[51] = addSolvent("C5H5N", ["C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "N"]);
      Sol.solvent[52] = addSolvent("C4H8O2S", ["C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O", "O", "S"]);
      Sol.solvent[53] = addSolvent("C10H12", ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[54] = addSolvent("C4H8O", ["C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "O"]);
      Sol.solvent[55] = addSolvent("C7H8", ["C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H"]);
      Sol.solvent[56] = addSolvent("C2F3HO2", ["C", "C", "F", "F", "F", "H", "O", "O"]);
      Sol.solvent[57] = addSolvent("H2O", ["H", "H", "O"]);
      Sol.solvent[58] = addSolvent("C5H11NO", ["C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "N", "O"]);
      Sol.solvent[59] = addSolvent("CH5N", ["C", "H", "H", "H", "H", "H", "N"]);
      Sol.solvent[60] = addSolvent("HO", ["H", "O"]);
      Sol.solvent[61] = addSolvent("C4H10N2", ["C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "N", "N"]);
      Sol.solvent[62] = addSolvent("C2H7N", ["C", "C", "H", "H", "H", "H", "H", "H", "H", "N"]);
      Sol.solvent[63] = addSolvent("C6H12N2O", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "N", "N", "O"]);
      Sol.solvent[64] = addSolvent("C6H5NO2", ["C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "N", "O", "O"]);
      Sol.solvent[65] = addSolvent("C3H7NO", ["C", "C", "C", "H", "H", "H", "H", "H", "H", "H", "N", "O"]);
      Sol.solvent[66] = addSolvent("C6Cl2H4", ["C", "C", "C", "C", "C", "C", "Cl", "Cl", "H", "H", "H", "H"]);
      Sol.solvent[67] = addSolvent("C7H5N", ["C", "C", "C", "C", "C", "C", "C", "H", "H", "H", "H", "H", "N"]);
  }

  // End of Sol routine
  return Sol.solvent;
}

///
/// Define solvent object
///
function solObject() {
  this.name = "";
  this.atoms = [];
  this.atomNum = 0;
}

///
/// function addSolvent(name, atoms)
/// add new solvent
///
function addSolvent(name, atoms) {
  var solvent = new solObject();
  solvent.name = name;
  solvent.atoms = atoms;
  solvent.atomNum = atoms.length;

  // End of addSolvent routine
  return solvent;
}

///
/// function isSolvent(molElement)
/// check if molElement is one of solvents
/// built by Shen Dawei
///
function isSolvent(molElement) {
  var solvents = Sol();
  for(var i = 0; i < solvents.length; i++) {
      if(molElement.toString() === solvents[i].atoms.toString()) {
          return true;
      }
  }
  return false;
}


// ------ (2) Division ------

//#  function Div(value)
//# 
//#  Information of division of all atoms, each molecule is divided into some subMolecules
//#
//#  
function Div(value) {
  // Declare local variables
  var id;
  var param = value || 0;
  // Determine which sub_molecule to use
  if (typeof Div.id === "undefined")
      Div.id = 1;
  if (param > 0)
      Div.id = param;
  id = Div.id;

  if (typeof Div.subMol === "undefined") {
      Div.subMol = [];
  }
  if (typeof Div.subMol[id] === "undefined") {
      Div.subMol[id] = [];
  }

  // End of Div routine
  return Div.subMol[id];
}

///
/// function delDiv(): reset Div content
///
function delDiv() {
  var subMol = Div();
  while(subMol.length > 0)
      subMol.pop();
}

///
/// function divideMol()   Divide atoms into groups
///
function divideMol() {
  delDiv();
  var molecules = Mol();
  var bonds = BondMatrix();
  var subMol = Div();
  var subMolecule = [];

  // put two atoms of each bond into subMolecule
  for (var i = 1; i < molecules[0].numatoms+1; i++) {
    var isolatedAtom = true;  
      for (var j = i + 1; j < molecules[0].numatoms+1; j++) {
          if (bonds[i][j] > 0){
            subMolecule.push([i, j]);
            isolatedAtom = false;
          }
      }
      // atoms that have no bond with other atoms, considered as a subMolecule as well.
      if ( isolatedAtom == true )
        subMolecule.push([i]);
  }

  // combine groups into larger subMolecule with atoms connected
  while (true) {
      var core = subMolecule[subMolecule.length - 1];
      var coreLength = core.length;
      for (var i = 0; i < subMolecule.length - 1; i++) {
          for (var k = 0; k < subMolecule[i].length; k++) {
              if (core.includes(subMolecule[i][k])) {
                  core = combine(core, subMolecule[i]);
                  subMolecule[i] = [];
                  break;
              }
          }
      }

      if (core.length == coreLength) {
          if (core.length > 0)
              subMol.push(core);
          subMolecule.pop();
          if (subMolecule.length <= 0) break;
      }
  }
  // End of divideMol routine
}

///
/// function combine(), combine two groups
///
function combine(group1, group2) {
  for (var i = 0; i < group2.length; i++) {
      if (!group1.includes(group2[i]))
          group1.push(group2[i]);
  }
  return group1;
}

function match(array1, array2) {
  if (array1.length != array2.length) return false;
  for (var i = 0; i < array1.length; i++) {
      if (array1[i] != array2[i]) return false;
  }
  return true;
}

// test if the subMolecule contains metal atom
function containMetal(subMolElements){
  for (var i=0; i < subMolElements.length; i++){
      if (element(lookupSymbol(subMolElements[i]), "isMetal"))
          return true;
  }
  return false;
}


// ------ (3) Highlight & Hide ------

//#  function highliteSubMol(option):   -  highlight subMolecule which is solvent or object
//#  option                       -  0=none    1=highlight Framework    2=highlight Solvent   3=highlight Guest
//#  Framework: those submolecules with metal atom and carbon atom
//#  Solvent:   water only
//#  Guest: Other submolecule
//#
function highliteSubMol(option) {
  var molecule = Mol();
  divideMol();
  var subMol = Div();
  var cys = OriCrystal();

  if (!(cys[0].cleave == 0 && molecule[0].type == "crystal")) {
      alert("Only MOF materials can use this function!");
      return;
  }

  // determine which submolecule to highlight
  var highliteFramework;
  var highliteSolvent;
  var highliteGuest;
  if (option === 1) {
      highliteFramework = 1;
      highliteSolvent = 0;
      highliteGuest = 0;
  } else if (option === 2) {
      highliteFramework = 0;
      highliteSolvent = 1;
      highliteGuest = 0;
  } else if (option === 3){
      highliteFramework = 0;
      highliteSolvent = 0;
      highliteGuest = 1;
  } else if (option === 0) {
      highliteFramework = highliteSolvent = highliteGuest = 0;
  } else {
      InfoWin("No highlite option input");
      return;
  }

  // divide all subMolecules into classes
  var frameworkIndices = [];
  var solventIndices = [];
  var guestIndices = [];

  // sort all the subMolecules
  for (var i = 0; i < subMol.length; i++) {
      var subMolElements = [];
      for (var j = 0; j < subMol[i].length; j++) {
          var atom = subMol[i][j];
          var symbol = element(molecule[atom].atomicnumber, "symbol");
          subMolElements.push(symbol);
      }
      subMolElements.sort();
      // if (match(subMolElements, ["O"]) || match(subMolElements, ["H", "O"]) || match(subMolElements, ["H","H","O"]))
      if(isSolvent(subMolElements))
          solventIndices.push(i);
      else if (subMolElements.includes("C") && containMetal(subMolElements))
          frameworkIndices.push(i);
      else
          guestIndices.push(i);
  }
  // highlight frameworks
  for (var i = 0; i < frameworkIndices.length; i++) {
      var subMolecule = subMol[frameworkIndices[i]];
      for (var j = 0; j < subMolecule.length; j++) {
          molecule[subMolecule[j]].highlite = highliteFramework;
      }
  }
  // highlight solvents
  for (var i = 0; i < solventIndices.length; i++) {
      var subMolecule = subMol[solventIndices[i]];
      for (var j = 0; j < subMolecule.length; j++) {
          molecule[subMolecule[j]].highlite = highliteSolvent;
      }
  }
  // highlight guests
  for (var i = 0; i < guestIndices.length; i++) {
      var subMolecule = subMol[guestIndices[i]];
      for (var j = 0; j < subMolecule.length; j++) {
          molecule[subMolecule[j]].highlite = highliteGuest;
      }
  }
  drawMolecule();
  if (cys[0].cleave == 0 && molecule[0].type == "crystal") {
      drawCube();
  }
  if (cys[0].preview == 1) {
      drawCube();
  }
  drawAxis();
  // End of highliteSubMol routine!
}


//#  function hideSubMol(option):    - hide subMolecule which is solvent or object
//#  option                    - 0=none    1=hide Framework    2=hide Solvent   3=hide Guest
//#
function hideSubMol(option) {
  var molecule = Mol();
  divideMol();
  var subMol = Div();
  var cys = OriCrystal();

  if (!(cys[0].cleave == 0 && molecule[0].type == "crystal")) {
      alert("Only MOF materials can use this function!");
      return;
  }

  // determine which submolecule to hide
  var hideFramework;
  var hideSolvent;
  var hideGuest;
  if (option === 1) {
      hideFramework = 1;
      hideSolvent = 0;
      hideGuest = 0;
  } else if (option === 2) {
      hideFramework = 0;
      hideSolvent = 1;
      hideGuest = 0;
  } else if (option === 3){
      hideFramework = 0;
      hideSolvent = 0;
      hideGuest = 1;
  } else if (option === 0) {
      hideFramework = hideSolvent = hideGuest = 0;
  } else {
      InfoWin("No hide option input");
      return;
  }

  // divide all subMolecules into classes
  var frameworkIndices = [];
  var solventIndices = [];
  var guestIndices = [];

  // sort all the subMolecules
  for (var i = 0; i < subMol.length; i++) {
      var subMolElements = [];
      for (var j = 0; j < subMol[i].length; j++) {
          var atom = subMol[i][j];
          var symbol = element(molecule[atom].atomicnumber, "symbol");
          subMolElements.push(symbol);
      }
      subMolElements.sort();

      // if (match(subMolElements, ["O"]) || match(subMolElements, ["H", "O"]) || match(subMolElements, ["H","H","O"]))
      if(isSolvent(subMolElements))
          solventIndices.push(i);
      else if (subMolElements.includes("C") && containMetal(subMolElements))
          frameworkIndices.push(i);
      else
          guestIndices.push(i);
  }
  // hide frameworks
  for (var i = 0; i < frameworkIndices.length; i++) {
      var subMolecule = subMol[frameworkIndices[i]];
      for (var j = 0; j < subMolecule.length; j++) {
          molecule[subMolecule[j]].hide = hideFramework;
      }
  }
  // hide solvents
  for (var i = 0; i < solventIndices.length; i++) {
      var subMolecule = subMol[solventIndices[i]];
      for (var j = 0; j < subMolecule.length; j++) {
          molecule[subMolecule[j]].hide = hideSolvent;
      }
  }
  // hide guests
  for (var i = 0; i < guestIndices.length; i++) {
      var subMolecule = subMol[guestIndices[i]];
      for (var j = 0; j < subMolecule.length; j++) {
          molecule[subMolecule[j]].hide = hideGuest;
      }
  }
  drawMolecule();
  if (cys[0].cleave == 0 && molecule[0].type == "crystal") {
      drawCube();
  }
  if (cys[0].preview == 1) {
      drawCube();
  }
  drawAxis();
  // End of hideSubMol routine!
}





//
// -------------------- CRYSTAL & SLAB SURFACE--------------------
//


// ------ (1) Crystal ------

//#  function OriCrystal()
//#
//#  Define public routine to store crystal information (generated by CIF file)
//#  
//#  Return value:
//#    Pointer to current crystal structure
//#

function OriCrystal(){
  if ( typeof OriCrystal.cry === "undefined"){
    OriCrystal.cry=[];
  }
  if(typeof OriCrystal.cry[0] === "undefined"){
    OriCrystal.cry[0] = new crystalObject();
  }
  return OriCrystal.cry;
}

///   
///   Define structure for each crystal, information from CIF file.
///
///   Property:
///    numcys                    - number of crystal
///    points                    - coordinates of eight vertices in cube
///    cleavesurface             -  coordinates of eight vertices in cleaved cube
///    aLength, bLength, cLength - lattice parameter a b c
///    alpha, beta, gamma        - lattice parameter alpha beta gamma
///    space_group               - space group name
///    transformLoop             - sapce group transform table
///    showcube                  - whether show cube or not(1 - show,0 - not show)
///    supercell                 - whether in supercell mode or not(1 - in,0 - not in)
///    cleave                    - whether in cleave surface mode or not(1 - in,0 - not in)
///    cleavethickness           - the cleave surface parameter - "cleavethickness"
///    vacuum                    - whether in vacuum mode or not(1 - in,0 - not in)
///    vacuumthickness           - the cleave surface parameter - "vacuumthickness"
///    preview                   - whether in cleave surface preview mode or not(1 - in,0 - not in)
///
function crystalObject(){
  this.numcys = 0;
  this.points = [
      [0,0,0],
      [1,0,0],
      [0,1,0],
      [1,1,0],
      [0,0,1],
      [1,0,1],
      [0,1,1],
      [1,1,1]
  ];
  this.cleavesurface = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [0,0,0]
  ];
  this.aLength = 1;
  this.bLength = 1;
  this.cLength = 1;
  this.alpha = Math.PI*90/180;
  this.beta = Math.PI*90/180;
  this.gamma = Math.PI*90/180;
  this.space_group = "P a 3";
  this.transformLoop = [];
  this.showcube = 1;
  this.supercell = 0;
  this.cleave = 0;
  this.cleavethickness = 0;
  this.vacuum = 0;
  this.vacuumthickness = 0;
  this.preview = 0;
}

///
/// Define structure for each atom of crystal
///
function cryAtomObject(){
  //The atoms get directly from CIF each has one id
  //Atoms get from space group transform has one id related to the above atoms's id.
  this.cysid=-1;
  this.A=1;
  this.x=0;
  this.y=0;
  this.z=0;
}

///
/// Build a crystal structure according to the preset parameters
///
function buildcrystal(){
  var str = "P1 P-1 P2 P2(1) C2 Pm c Cm Cc P2/m P2(1)/m C2/m P2/c P2(1)/c C2/c P222 P222(1) P2(1)2(1)2 P2(1)2(1)2(1) C222(1) C222 F222 I222 I2(1)2(1)2(1) Pmm2 Pmc2(1) Pcc2 Pma2 Pca2(1) Pnc2 Pmn2(1) Pba2 Pna2(1) Pnn2 Cmm2 Cmc2(1) Ccc2 Amm2 Abm2 Ama2 Aba2 Fmm2 Fdd2 Imm2 Iba2 Ima2 Pmmm Pnnn Pccm Pban Pmma Pnna Pmna Pcca Pbam Pccn Pbcm Pnnm Pmmn Pbcn Pbca Pnma Cmcm Cmca Cmmm Cccm Cmma Ccca Fmmm Fddd Immm Ibam Ibca Imma P4 P4(1) P4(2) P4(3) I4 I4(1) P-4 I-4 P4/m P4(2)/m P4/n P4(2)/n I4/m I4(1)/a P422 P42(1)2 P4(1)22 P4(1)2(1)2 P4(2)22 P4(2)2(1)2 P4(3)22 P4(3)2(1)2 I422 I4(1)22 P4mm P4bm P4(2)cm P4(2)nm P4cc P4nc P4(2)mc P4(2)bc I4mm I4cm I4(1)md I4(1)cd P-42m P-42c P-42(1)m P-42(1)c P-4m2 P-4c2 P-4b2 P-4n2 I-4m2 I-4c2 I-42m I-42d P4/mmm P4/mcc P4/nbm P4/nnc P4/mbm P4/mnc P4/nmm P4/ncc P4(2)/mmc P4(2)/mcm P4(2)/nbc P4(2)/nnm P4(2)/mbc P4(2)/mnm P4(2)/nmc P4(2)/ncm I4/mmm I4/mcm I4(1)/amd I4(1)/acd P3 P3(1) P3(2) R3 P-3 R-3 P312 P321 P3(1)12 P3(1)21 P3(2)12 P3(2)21 R32 P3m1 P31m P3c1 P31c R3m R3c P-31m P-31c P-3m1 P-3c1 R-3m R-3c P6 P6(1) P6(5) P6(2) P6(4) P6(3) P-6 P6/m P6(3)/m P622 P6(1)22 P6(5)22 P6(2)22 P6(4)22 P6(3)22 P6mm P6cc P6(3)cm P6(3)mc P-6m2 P-6c2 P-62m P-62c P6/mmm P6/mcc P6(3)/mcm P6(3)/mmc P23 F23 I23 P2(1)3 I2(1)3 Pm-3 Pn-3 Fm-3 Fd-3 Im-3 Pa-3 Ia-3 P432 P4(2)32 F432 F4(1)32 I432 P4(3)32 P4(1)32 I4(1)32 P-43m F4-3m I-43m P-43n F-43c I-43d Pm-3m Pn-3n Pm-3n Pn-3m Fm-3m Fm-3c Fd-3m Fd-3c Im-3m Ia-3d";
  var space_group = str.split(' ');    //String transfer to array  
  var _select = document.getElementById("space group");
  _select.options.length = 0;
  
  for(var i = 0;i < space_group.length; i++){
        var index = i + 1;
        var _option = new Option(index+" "+space_group[i],space_group[i]);
        _select.options.add(_option);
  }
  var elems = element.elem;
  var _select2 = document.getElementById("addCrystalAtoms1");
  _select2.options.length = 0;
  for(var i = 1;i <= elems.length; i++){
   var _option2 = new Option(elems[i].symbol,elems[i].symbol);
    _select2.options.add(_option2);
  }
}

///
/// Fetch the lattice, atoms parameters from font-end input and then build crystal
///
function buildcrystalACK(){
  //Get the space group name
  var index=document.getElementById("space group").selectedIndex;
  var space_group=document.getElementById("space group").options[index].value;

  // Search the space group transform of the above name according to the space group table
  var symmetrys = spacegroup_table();
  var operation_table = symmetrys[index];

  //Get the lattice and atoms parameters and then build the crystal
  delMolecule();
  delCrystal();
  
  var molecule = Mol();    
  molecule[0].type = "crystal";
  molecule[0].showbonds = 0;
  var cys = OriCrystal();
  var cell_length_a = document.getElementById("aLen").value;
  var cell_length_b = document.getElementById("bLen").value;
  var cell_length_c = document.getElementById("cLen").value;
  var cell_angle_alpha = document.getElementById("alpha").value;
  var cell_angle_beta = document.getElementById("beta").value;
  var cell_angle_gamma = document.getElementById("gamma").value;
  InfoWin("cell_length_a: "+cell_length_a+"\n");
  InfoWin("cell_length_b: "+cell_length_b+"\n");
  InfoWin("cell_length_c: "+cell_length_c+"\n");
  InfoWin("cell_angle_alpha: "+cell_angle_alpha+"\n");
  InfoWin("cell_angle_beta: "+cell_angle_beta+"\n");
  InfoWin("cell_angle_gamma: "+cell_angle_gamma+"\n");
  cys[0].aLength = cell_length_a;
  cys[0].bLength = cell_length_b;
  cys[0].cLength = cell_length_c;
  cys[0].alpha = cell_angle_alpha/180*Math.PI;
  cys[0].beta = cell_angle_beta/180*Math.PI;
  cys[0].gamma = cell_angle_gamma/180*Math.PI;
  cys[0].space_group = space_group;
  var alen = cys[0].aLength;
  var blen = cys[0].bLength;
  var clen = cys[0].cLength;
  var alpha = cys[0].alpha;
  var beta = cys[0].beta;
  var gamma = cys[0].gamma;
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);
  cys[0].transformLoop = operation_table;
  //draw the cube
  var points = cys[0].points; 
  for(var i=0;i<8;i++){
    var x = points[i][0];
    var y = points[i][1];
    var z = points[i][2];      
    points[i][0] = x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);
    points[i][1] = y*blen*Math.sin(gamma)+z*clen*d;
    points[i][2] = z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d);
  }
  var atomnum = document.getElementsByClassName("addatompos").length/3;
  var atoms = document.getElementsByClassName("selectatom");
  for(var i = 0 ; i < atomnum ; i++){
    var symbol = atoms[i].value;
    var A = lookupSymbol(symbol);
    var cysid = i+1;
    cys[0].numcys++;
    cys[cysid] = new cryAtomObject();
    cys[cysid].A = A;
    var xid = "apos"+cysid;
    var yid = "bpos"+cysid;
    var zid = "cpos"+cysid;
    cys[cysid].x = document.getElementById(xid).value;
    cys[cysid].y = document.getElementById(yid).value;
    cys[cysid].z = document.getElementById(zid).value;
    cys[cysid].cysid = cysid; 
  }
  
  // var styleindex = document.getElementById("crystalstyle").selectedIndex;
  // var now = document.getElementById("crystalstyle").options[styleindex].value;
  // if(now == "asymmetric"){
  //   mode_asymmetric();
  // }
  // if(now == "default"){
  //   mode_default();
  // }
  // if(now == "in-cell"){
    mode_incell();
  // }
  // if(now == "origin"){
  //   mode_origin();
  // }  
  createbonds();
  formula();
  centerMolecule();
  drawMolecule();
  drawCube();
  drawAxis();
}

///
/// Delete crystal
///
function delCrystal(){
  var cys = OriCrystal();
  cys[0] = new crystalObject();
  var sc = supercell();
  sc.extendx = 1;
  sc.extendy = 1;
  sc.extendz = 1;
  document.getElementById('extendx').value = 1;
  document.getElementById('extendy').value = 1;
  document.getElementById('extendz').value = 1;
}

///
/// Define the function of font-end addmoreatoms button in crystal-build mode
///
addatomindex = 1;
function addmoreatoms(){  
  var sourceNode = document.getElementById("atom-1"); // 获得被克隆的节点对象   
  var clonedNode = sourceNode.cloneNode(true); // 克隆节点
  addatomindex = addatomindex + 1;   
  clonedNode.setAttribute("id", "atom-" + addatomindex); // 修改一下id 值，避免id 重复   
  sourceNode.parentNode.appendChild(clonedNode); // 在父节点插入克隆的节点 
  document.getElementsByClassName("atomstrong")[addatomindex - 1].innerText="atom " + addatomindex;
  document.getElementsByClassName("selectatom")[addatomindex - 1].setAttribute("id","addCrystalAtoms" + addatomindex);
  document.getElementsByClassName("addatompos")[(addatomindex - 1)*3].setAttribute("id","apos" + addatomindex);
  document.getElementsByClassName("addatompos")[(addatomindex - 1)*3+1].setAttribute("id","bpos" + addatomindex);
  document.getElementsByClassName("addatompos")[(addatomindex - 1)*3+2].setAttribute("id","cpos" + addatomindex);
  var elems = element.elem;
  var selectid = "addCrystalAtoms" + addatomindex; 
  var _select2 = document.getElementById(selectid);
  _select2.options.length = 0;
  for(var i = 1;i <= elems.length; i++){
   var _option2 = new Option(elems[i].symbol,elems[i].symbol);
    _select2.options.add(_option2);
  }
}

///
/// Define the function of font-end deleteatom button in crystal-build mode
///
function deleteatom(){
  var atoms = document.getElementsByClassName("atominfo");
  var parent = document.getElementById("addAtoms");
  var lastchild = atoms[atoms.length-1];
  if(atoms.length==1){
    alert("only one atom left,cannot be deleted!"+"\n");
  }
  parent.removeChild(lastchild);
}

///
///  Onchange function monitors the crystal lattice showstyle changes.
///
function changecrystalstyle(style){
  var molecule = Mol();
  if(molecule[0].type == "crystal"){
    var bondstatus = molecule[0].showbonds;
    delMolecule();
    var molecule = Mol();
    molecule[0].showbonds = bondstatus;
    var cys = OriCrystal(); 
    molecule[0].type ="crystal";
    if(style.value == "asymmetric" || style == "asymmetric"){
      mode_asymmetric();
      createbonds();
      resetCube(); 
      formula();
      centerMolecule();
      drawMolecule();
      drawCube();
      drawAxis();
    }
    else if(style.value == "origin" || style == "origin"){
      mode_origin();
      createbonds();
      resetCube(); 
      formula();
      centerMolecule();
      drawMolecule();
      drawCube();
      drawAxis();
    }else if(style.value == "in-cell" || style == "in-cell"){
      mode_incell();
      createbonds();
      resetCube(); 
      formula();
      centerMolecule();
      drawMolecule();
      if(cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      drawAxis();
    }else if(style.value == "default" || style == "default"){
      mode_default();
      createbonds();
      resetCube();
      formula();
      centerMolecule();
      drawMolecule();
      drawCube();
      drawAxis();
    }
  } else{
    alert("Not in crystal mode, cannot change showstyle!");
  }
}

///
/// asymmetric crystal generation algorithm
///
function mode_asymmetric(){
  var cys = OriCrystal();
  var molecule = Mol();    
  var show = showstyle();
  molecule[0].type="crystal";
  var cysnum = cys[0].numcys;
  var alen= cys[0].aLength;
  var blen= cys[0].bLength;
  var clen= cys[0].cLength;
  var alpha= cys[0].alpha;
  var beta= cys[0].beta;
  var gamma= cys[0].gamma;
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);
  if(cys[0].supercell==0){
    for(var i=1;i<=cysnum;i++){
      var A=cys[i].A;
      var x=cys[i].x;
      var y=cys[i].y;
      var z=cys[i].z;
      var cysid=cys[i].cysid; 
      var x1=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
      var y1=y*blen*Math.sin(gamma)+z*clen*d;         
      var z1=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
      addAtom(A,x1,y1,z1,cysid);
      }  
  }else{
    var sc = supercell();
    var exx = sc.extendx;
    var exy = sc.extendy;
    var exz = sc.extendz;
    //x axis extension
    for(var i=1;i<=cysnum;i++){
      var A = cys[i].A;
      var x = cys[i].x;
      var y = cys[i].y;
      var z = cys[i].z;
      var cysid = cys[i].cysid; 
      addAtom(A,x,y,z,cysid);
    } 
    var extendx = exx - 1;
    var curnum = molecule[0].numatoms;
    if(extendx>0){
      for(var j = 1;j <=extendx; j++){
          for(var i = 1;i <= curnum; i++){
            var x = parseFloat(molecule[i].x) + parseFloat(j);
            var y = molecule[i].y;
            var z = molecule[i].z; 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //y axis extension
    curnum = molecule[0].numatoms;
    var extendy = exy - 1;
    if(extendy>0){
      for(var j = 1;j <=extendy; j++){
          for(var i = 1;i <= curnum; i++){
            var x = molecule[i].x;
            var y = parseFloat(molecule[i].y)+parseFloat(j);
            var z = molecule[i].z; 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //z axis extension
    curnum = molecule[0].numatoms;
    var extendz = exz - 1;
    if(extendz>0){
      for(var j = 1;j <=extendz; j++){
          for(var i = 1;i <= curnum; i++){
            var x = molecule[i].x;
            var y = molecule[i].y;
            var z = parseFloat(molecule[i].z)+parseFloat(j); 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //Coordinate transformation based on lattice parameters
    for(var i = 1; i <= molecule[0].numatoms; i++){
      var x = molecule[i].x;
      var y = molecule[i].y;
      var z = molecule[i].z;
      var x1 = x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
      var y1 = y*blen*Math.sin(gamma)+z*clen*d;         
      var z1 = z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
      molecule[i].x = x1;
      molecule[i].y = y1;
      molecule[i].z = z1;
    }
  }
}

///
///original crystal generation algorithm
///
function mode_origin(){
  var cys = OriCrystal(); 
  var molecule = Mol();    
  var show=showstyle();
  molecule[0].type="crystal";
  var alen= cys[0].aLength;
  var blen= cys[0].bLength;
  var clen= cys[0].cLength;
  var alpha= cys[0].alpha;
  var beta= cys[0].beta;
  var gamma= cys[0].gamma;
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);
  var cysnum = cys[0].numcys; 
  //not in supercell mode 
  if(cys[0].supercell==0){
    for(var i=1;i<=cysnum;i++){
      var hasrepeat=[];
      var A=cys[i].A;
      var x=cys[i].x;
      var y=cys[i].y;
      var z=cys[i].z;
      var cysid=cys[i].cysid; 
      //take into space group transform formula     
      for(var t=0;t<cys[0].transformLoop.length;t++){       
        var x1=parseTransform(cys[0].transformLoop[t][0],x,y,z);
        var y1=parseTransform(cys[0].transformLoop[t][1],x,y,z);
        var z1=parseTransform(cys[0].transformLoop[t][2],x,y,z); 
        var linshi=[];   
        linshi.push(x1);
        linshi.push(y1);
        linshi.push(z1);
        linshi.push(A);
        linshi.push(cysid);
        linshi.push(t);
        hasrepeat.push(linshi);
      }
      //Remove the atoms which have been shown once
      var cysPosition = compare(hasrepeat);

      //Coordinate transformation based on lattice parameters
      for(var j=0;j<cysPosition.length;j++){ 
        var x1 = cysPosition[j][0];
        var y1 = cysPosition[j][1];
        var z1 = cysPosition[j][2];
        var x2=x1*alen+y1*blen*Math.cos(gamma)+z1*clen*Math.cos(beta);        
        var y2=y1*blen*Math.sin(gamma)+z1*clen*d;         
        var z2=z1*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
        addAtom(cysPosition[j][3],x2,y2,z2,cysPosition[j][4]); 
      }
    } 
  }else{//in supercell mode
    for(var i=1;i<=cysnum;i++){
      var hasrepeat=[];
      var A=cys[i].A;
      var x=cys[i].x;
      var y=cys[i].y;
      var z=cys[i].z;
      var cysid=cys[i].cysid;  
      //take into space group transform formula  
      for(var t=0;t<cys[0].transformLoop.length;t++){       
        var x1=parseTransform(cys[0].transformLoop[t][0],x,y,z);
        var y1=parseTransform(cys[0].transformLoop[t][1],x,y,z);
        var z1=parseTransform(cys[0].transformLoop[t][2],x,y,z); 
        var linshi=[];   
        linshi.push(x1);
        linshi.push(y1);
        linshi.push(z1);
        linshi.push(A);
        linshi.push(cysid);
        linshi.push(t);
        hasrepeat.push(linshi);
      }
      //Remove the atoms which have been shown once
      var cysPosition = compare(hasrepeat);
      for(var j=0;j<cysPosition.length;j++){ 
        var x1 = cysPosition[j][0];
        var y1 = cysPosition[j][1];
        var z1 = cysPosition[j][2]; 
        addAtom(cysPosition[j][3],x1,y1,z1,cysPosition[j][4]); 
      }
    }   
    var sc = supercell();
    var exx = sc.extendx;
    var exy = sc.extendy;
    var exz = sc.extendz;
    //x axis extension
    curnum = molecule[0].numatoms;
    var extendx = exx - 1;
    if(extendx>0){
      for(var j = 1;j <=extendx; j++){
          for(var i = 1;i <= curnum; i++){
            var x = parseFloat(molecule[i].x)+parseFloat(j);
            var y = molecule[i].y;  
            var z = molecule[i].z; 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //y axis extension
    curnum = molecule[0].numatoms;
    var extendy = exy - 1;
    if(extendy>0){
      for(var j = 1;j <=extendy; j++){
          for(var i = 1;i <= curnum; i++){
            var x = molecule[i].x;
            var y = parseFloat(molecule[i].y)+parseFloat(j);
            var z = molecule[i].z; 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //z axis extension
    curnum = molecule[0].numatoms;
    var extendz = exz - 1;
    if(extendz>0){
      for(var j = 1;j <=extendz; j++){
          for(var i = 1;i <= curnum; i++){
            var x = molecule[i].x;
            var y = molecule[i].y;
            var z = parseFloat(molecule[i].z)+parseFloat(j); 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //Coordinate transformation based on lattice parameters
    for(var i = 1; i <= molecule[0].numatoms; i++){
      var x=molecule[i].x;
      var y=molecule[i].y;
      var z=molecule[i].z;
      var x1=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
      var y1=y*blen*Math.sin(gamma)+z*clen*d;         
      var z1=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
      molecule[i].x=x1;
      molecule[i].y=y1;
      molecule[i].z=z1;
    }
  }
}

///
///incell crystal generation algorithm
///
function mode_incell(){
  var cys = OriCrystal(); 
  var molecule = Mol();
  var show = showstyle();
  molecule[0].type="crystal";
  var alen = cys[0].aLength;
  var blen = cys[0].bLength;
  var clen = cys[0].cLength;
  var alpha = cys[0].alpha;
  var beta = cys[0].beta;
  var gamma = cys[0].gamma;
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);
  var cysnum = cys[0].numcys;
  var tran = [];
  var len = cys[0].transformLoop.length;
  if(len!=2){//transformloop list length is not 2, means not a molecule-crystal
    for(var t=0;t<len;t++){   
        tran.push(cys[0].transformLoop[t]); 
    }
    //Periodically extend the transform table
    for(var t=0;t<len;t++){   
      var li=[];
      var str1=cys[0].transformLoop[t][0]+"+1";
      var str2=cys[0].transformLoop[t][1];
      var str3=cys[0].transformLoop[t][2];
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//1
      li=[];
      str1=cys[0].transformLoop[t][0];
      str2=cys[0].transformLoop[t][1]+"+1";
      str3=cys[0].transformLoop[t][2];
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//2
      li=[];
      str1=cys[0].transformLoop[t][0];
      str2=cys[0].transformLoop[t][1];
      str3=cys[0].transformLoop[t][2]+"+1";
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//3
      li=[];
      str1=cys[0].transformLoop[t][0]+"+1";
      str2=cys[0].transformLoop[t][1]+"+1";
      str3=cys[0].transformLoop[t][2];
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//12
      li=[];
      str1=cys[0].transformLoop[t][0];
      str2=cys[0].transformLoop[t][1]+"+1";
      str3=cys[0].transformLoop[t][2]+"+1";
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//23
      li=[];
      str1=cys[0].transformLoop[t][0]+"+1";
      str2=cys[0].transformLoop[t][1];
      str3=cys[0].transformLoop[t][2]+"+1";
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//13
      li=[];
      str1=cys[0].transformLoop[t][0]+"+1";
      str2=cys[0].transformLoop[t][1]+"+1";
      str3=cys[0].transformLoop[t][2]+"+1";
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//123
      //
      li=[];
      str1=cys[0].transformLoop[t][0]+"-1";
      str2=cys[0].transformLoop[t][1];
      str3=cys[0].transformLoop[t][2];
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//1
      li=[];
      str1=cys[0].transformLoop[t][0];
      str2=cys[0].transformLoop[t][1]+"-1";
      str3=cys[0].transformLoop[t][2];
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//2
      li=[];
      str1=cys[0].transformLoop[t][0];
      str2=cys[0].transformLoop[t][1];
      str3=cys[0].transformLoop[t][2]+"-1";
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//3
      li=[];
      str1=cys[0].transformLoop[t][0]+"-1";
      str2=cys[0].transformLoop[t][1]+"-1";
      str3=cys[0].transformLoop[t][2];
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//12
      li=[];
      str1=cys[0].transformLoop[t][0];
      str2=cys[0].transformLoop[t][1]+"-1";
      str3=cys[0].transformLoop[t][2]+"-1";
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//23
      li=[];
      str1=cys[0].transformLoop[t][0]+"-1";
      str2=cys[0].transformLoop[t][1];
      str3=cys[0].transformLoop[t][2]+"-1";
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//13
      li=[];
      str1=cys[0].transformLoop[t][0]+"-1";
      str2=cys[0].transformLoop[t][1]+"-1";
      str3=cys[0].transformLoop[t][2]+"-1";
      li.push(str1);li.push(str2);li.push(str3);
      tran.push(li);//123
    }
    var l=[];
    l.push("x+1");l.push("y");l.push("z");
    tran.push(l);//1
    l=[];
    l.push("x");l.push("y+1");l.push("z");
    tran.push(l);//2
    l=[];
    l.push("x");l.push("y");l.push("z+1");
    tran.push(l);//3
    l=[];
    l.push("x+1");l.push("y+1");l.push("z");
    tran.push(l);//12
    l=[];
    l.push("x+1");l.push("y");l.push("z+1");
    tran.push(l);//13
    l=[];
    l.push("x");l.push("y+1");l.push("z+1");
    tran.push(l);//23
    l=[];
    l.push("x+1");l.push("y+1");l.push("z+1");
    tran.push(l);//123
    l=[];
    l.push("x-1");l.push("y");l.push("z");
    tran.push(l);//-1
    l=[];
    l.push("x");l.push("y-1");l.push("z");
    tran.push(l);//-2
    l=[];
    l.push("x");l.push("y");l.push("z-1");
    tran.push(l);//-3
    l=[];
    l.push("x-1");l.push("y-1");l.push("z");
    tran.push(l);//-12
    l=[];
    l.push("x-1");l.push("y");l.push("z-1");
    tran.push(l);//-13
    l=[];
    l.push("x");l.push("y-1");l.push("z-1");
    tran.push(l);//-23
    l=[];
    l.push("x-1");l.push("y-1");l.push("z-1");
    tran.push(l);//-123

    var moly=[];
    for(var t=0;t<tran.length;t++){
      moly[t]=[];
      moly[t].push(0); 
    }
    for(var i=1;i<=cysnum;i++){
      var hasrepeat=[];
      var A=cys[i].A;
      var x=cys[i].x;
      var y=cys[i].y;
      var z=cys[i].z;
      var cysid=cys[i].cysid;      
      for(var t=0;t<tran.length;t++){       
        var x1=parseTransform(tran[t][0],x,y,z);
        var y1=parseTransform(tran[t][1],x,y,z);
        var z1=parseTransform(tran[t][2],x,y,z); 
        var linshi=[];   
        linshi.push(x1);
        linshi.push(y1);
        linshi.push(z1);
        linshi.push(A);
        linshi.push(cysid);
        linshi.push(t);
        hasrepeat.push(linshi);
      }
      //Remove the atoms which have been shown once
      var cysPosition = compare(hasrepeat);
      //Save moly according to the sorting of each atom
      for(var j=0;j<cysPosition.length;j++){         
        var indexi=cysPosition[j][5];
        moly[indexi].push(cysPosition[j]);  
      }
    }
    //while atoms not in box , continues to move it closer
    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      for(var p=1;p<molnum;p++){
        var x1=moly[o][p][0];
        var y1=moly[o][p][1];
        var z1=moly[o][p][2];
        while(parseFloat(x1)<0){
          x1=parseFloat(x1)+1;
        }
        while(parseFloat(y1)<0){
          y1=parseFloat(y1)+1;
        }
        while(parseFloat(z1)<0){
          z1=parseFloat(z1)+1 ;
        }
        while(parseFloat(x1)>1){
          x1=parseFloat(x1)-1;
        }
        while(parseFloat(y1)>1){
          y1=parseFloat(y1)-1;
        }
        while(parseFloat(z1)>1){
          z1=parseFloat(z1)-1;
        }
      moly[o][p][0]=x1;
      moly[o][p][1]=y1;
      moly[o][p][2]=z1;
      }
    }
    var overlap=[];
    for(var t=0;t<=cysnum;t++){
      overlap[t]=[];
    }
    var overlap1=[];
    for(var t=0;t<=cysnum;t++){
      overlap1[t]=[];
    }
    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      for(var p=1;p<molnum;p++){
        //Save overlap according to the cysid of each atom
        var id = moly[o][p][4];
        overlap[id].push(moly[o][p]);
      }
    }
    for(var t=0;t<tran.length;t++){
      moly[t]=[];
      moly[t].push(0); 
    }
    for(var o=1;o<=cysnum;o++){
      //Remove the atoms which have been shown once
      overlap1[o]=compare(overlap[o]);
      for(var t=0;t<overlap1[o].length;t++){
        //Save moly according to the sorting of each atom
        var index=overlap1[o][t][5];
        moly[index].push(overlap1[o][t]);
      }
    }
    var overlap2=[];
    for(var t=0;t<=118;t++){
      overlap2[t]=[];
    }
    var overlap3=[];
    for(var t=0;t<=118;t++){
      overlap3[t]=[];
    }
    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      for(var p=1;p<molnum;p++){
        //Save overlap2 according to the A of each atom
        var id = moly[o][p][3];
        overlap2[id].push(moly[o][p]);
      }
    }
    for(var t=0;t<tran.length;t++){
      moly[t]=[];
      moly[t].push(0); 
    }
    var overlap4=[];
    for(var o=0;o<=118;o++){
      if(overlap2[o]!=[]){
        //Remove the atoms which have been shown once
        overlap3[o]=compare(overlap2[o]);      
        for(var t=0;t<overlap3[o].length;t++){
          overlap4.push(overlap3[o][t]);
        }
      }
    }
    //Remove the atoms which have been shown once
    var overlap5=compare(overlap4);
    //Save moly according to the sorting of each atom
    for(var i=0;i<overlap5.length;i++){
      var index=overlap5[i][5];
      moly[index].push(overlap5[i]);
    }

/////////////////////////
if(cys[0].cleave==0){
  if(cys[0].supercell==0){
    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      for(var p=1;p<molnum;p++){
        var x3=parseFloat(moly[o][p][0]);
        var y3=parseFloat(moly[o][p][1]);
        var z3=parseFloat(moly[o][p][2]);
        var x4=x3*alen+y3*blen*Math.cos(gamma)+z3*clen*Math.cos(beta);        
        var y4=y3*blen*Math.sin(gamma)+z3*clen*d;         
        var z4=z3*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
        addAtom(moly[o][p][3],x4,y4,z4,moly[o][p][4]); 
      }
    }
  }else{
    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      for(var p=1;p<molnum;p++){
        var x3 = parseFloat(moly[o][p][0]);
        var y3 = parseFloat(moly[o][p][1]);
        var z3 = parseFloat(moly[o][p][2]);
        addAtom(moly[o][p][3],x3,y3,z3,moly[o][p][4]); 
      }
    }
    var sc = supercell();
    var exx = sc.extendx;
    var exy = sc.extendy;
    var exz = sc.extendz;
    //x axis extension
    var curnum = molecule[0].numatoms;
    var extendx = exx - 1;
    if(extendx>0){
      for(var j = 1;j <=extendx; j++){
          for(var i = 1;i <= curnum; i++){
            var x = parseFloat(molecule[i].x)+parseFloat(j);
            var y = molecule[i].y;  
            var z = molecule[i].z; 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //y axis extension
    curnum = molecule[0].numatoms;
    var extendy = exy - 1;
    if(extendy>0){
      for(var j = 1;j <=extendy; j++){
          for(var i = 1;i <= curnum; i++){
            var x = molecule[i].x;
            var y = parseFloat(molecule[i].y)+parseFloat(j);
            var z = molecule[i].z; 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //z axis extension
    curnum = molecule[0].numatoms;
    var extendz = exz - 1;
    if(extendz>0){
      for(var j = 1;j <=extendz; j++){
          for(var i = 1;i <= curnum; i++){
            var x = molecule[i].x;
            var y = molecule[i].y;
            var z = parseFloat(molecule[i].z)+parseFloat(j); 
            var cysid = molecule[i].cysid; 
            var A = molecule[i].atomicnumber;
            addAtom(A,x,y,z,cysid);
          }
      }
    }
    //Coordinate transformation based on lattice parameters
    for(var i = 1; i <= molecule[0].numatoms; i++){
      var x=molecule[i].x;
      var y=molecule[i].y;
      var z=molecule[i].z;
      var x1=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
      var y1=y*blen*Math.sin(gamma)+z*clen*d;         
      var z1=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
      molecule[i].x=x1;
      molecule[i].y=y1;
      molecule[i].z=z1;
    }
  }
}else{
  var originalnum = 0;
  for(var o=0;o<moly.length;o++){
    var molnum = moly[o].length;
    for(var p=1;p<molnum;p++){
      var x3=parseFloat(moly[o][p][0]);
      var y3=parseFloat(moly[o][p][1]);
      var z3=parseFloat(moly[o][p][2]);  
      addAtom(moly[o][p][3],x3,y3,z3,moly[o][p][4]); 
      originalnum = originalnum + 1;
      var num = molecule[0].numatoms;
      molecule[num].iscleaveatom = 2;
    }
  }
  var sc = supercell();
  var exx = sc.extendx;
  var exy = sc.extendy;
  var exz = sc.extendz;
  //x axis extension
  var curnum = molecule[0].numatoms;
  var extendx = exx - 1;
  if(extendx>0){
    for(var j = 1;j <=extendx; j++){
        for(var i = 1;i <= curnum; i++){
          var x = parseFloat(molecule[i].x)+parseFloat(j);
          var y = molecule[i].y;  
          var z = molecule[i].z; 
          var cysid = molecule[i].cysid; 
          var A = molecule[i].atomicnumber;
          addAtom(A,x,y,z,cysid);
          originalnum = originalnum + 1;
          var num = molecule[0].numatoms;
          molecule[num].iscleaveatom = 2;
        }
    }
  }
  //y axis extension
  curnum = molecule[0].numatoms;
  var extendy = exy - 1;
  if(extendy>0){
    for(var j = 1;j <=extendy; j++){
        for(var i = 1;i <= curnum; i++){
          var x = molecule[i].x;
          var y = parseFloat(molecule[i].y)+parseFloat(j);
          var z = molecule[i].z; 
          var cysid = molecule[i].cysid; 
          var A = molecule[i].atomicnumber;
          addAtom(A,x,y,z,cysid);
          originalnum = originalnum + 1;
          var num = molecule[0].numatoms;
          molecule[num].iscleaveatom = 2;
        }
    }
  }
  //z axis extension
  curnum = molecule[0].numatoms;
  var extendz = exz - 1;
  if(extendz>0){
    for(var j = 1;j <=extendz; j++){
        for(var i = 1;i <= curnum; i++){
          var x = molecule[i].x;
          var y = molecule[i].y;
          var z = parseFloat(molecule[i].z)+parseFloat(j); 
          var cysid = molecule[i].cysid; 
          var A = molecule[i].atomicnumber;
          addAtom(A,x,y,z,cysid);
          originalnum = originalnum + 1;
          var num = molecule[0].numatoms;
          molecule[num].iscleaveatom = 2;
        }
    }
  }
  // Extend the atoms in the crystal cell periodically,
  // and the atoms in the cleave surface slab are preserved
  // Compare the distance from the point to the surface of the box 
  // and from surface to the opposite surface to see if it is inside the box
  
  //Find the equation of the plane 0174 and 2563
  //p12A*x + p12B*y + p12C + D1 = 0
  //p12A*x + p12B*y + p12C + D2 = 0
  //Find points 2 5 6's xyz
  //5
  var p1x1 = cys[0].cleavesurface[5][0];
  var p1y1 = cys[0].cleavesurface[5][1];
  var p1z1 = cys[0].cleavesurface[5][2];
  //2
  var p1x2 = cys[0].cleavesurface[2][0];
  var p1y2 = cys[0].cleavesurface[2][1];
  var p1z2 = cys[0].cleavesurface[2][2];
  //6
  var p1x3 = cys[0].cleavesurface[6][0];
  var p1y3 = cys[0].cleavesurface[6][1];
  var p1z3 = cys[0].cleavesurface[6][2];
  //Caculate the A,B,C,D in the plane equation
  var p12A = (p1y2-p1y1)*(p1z3-p1z1)-(p1z2-p1z1)*(p1y3-p1y1);
  var p12B = (p1x3-p1x1)*(p1z2-p1z1)-(p1x2-p1x1)*(p1z3-p1z1);
  var p12C = (p1x2-p1x1)*(p1y3-p1y1)-(p1x3-p1x1)*(p1y2-p1y1);
  var D1 = -(p12A*p1x1+p12B*p1y1+p12C*p1z1);
  //Find points 4's xyz
  //4
  var p2x4 = cys[0].cleavesurface[4][0];
  var p2y4 = cys[0].cleavesurface[4][1];
  var p2z4 = cys[0].cleavesurface[4][2];
  var D2 = -(p12A*p2x4+p12B*p2y4+p12C*p2z4);
  //Caculate the distance between the two planes: 0174 and 2563
  var dis1 = parseFloat(Math.abs(D1-D2))/parseFloat(Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C));
  
  //Find the equation of the plane 0452 and 1763
  //p34A*x + p34B*y + p34C + D3 = 0
  //p34A*x + p34B*y + p34C + D4 = 0
  //Find points 7 3 1's xyz
  //7
  var p3x1 = cys[0].cleavesurface[7][0];
  var p3y1 = cys[0].cleavesurface[7][1];
  var p3z1 = cys[0].cleavesurface[7][2];
  //3
  var p3x2 = cys[0].cleavesurface[3][0];
  var p3y2 = cys[0].cleavesurface[3][1];
  var p3z2 = cys[0].cleavesurface[3][2];
  //1
  var p3x3 = cys[0].cleavesurface[1][0];
  var p3y3 = cys[0].cleavesurface[1][1];
  var p3z3 = cys[0].cleavesurface[1][2];
  //Caculate the A,B,C,D in the plane equation
  var p34A = (p3y2-p3y1)*(p3z3-p3z1)-(p3z2-p3z1)*(p3y3-p3y1);
  var p34B = (p3x3-p3x1)*(p3z2-p3z1)-(p3x2-p3x1)*(p3z3-p3z1);
  var p34C = (p3x2-p3x1)*(p3y3-p3y1)-(p3x3-p3x1)*(p3y2-p3y1);
  var D3 = -(p34A*p3x1+p34B*p3y1+p34C*p3z1);
  //Find points 2's xyz
  //2
  var p4x4 = cys[0].cleavesurface[2][0];
  var p4y4 = cys[0].cleavesurface[2][1];
  var p4z4 = cys[0].cleavesurface[2][2];
  var D4 = 0-(p34A*p4x4+p34B*p4y4+p34C*p4z4);
  //Caculate the distance between the two planes: 0452 and 1763
  var dis2 = Math.abs(D4-D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);

  //Find the equation of the plane 0123 and 4567
  //p56A*x + p56B*y + p56C + D5 = 0
  //p56A*x + p56B*y + p56C + D6 = 0
  //Find points 0 1 2's xyz
  //0
  var p5x1 = cys[0].cleavesurface[0][0];
  var p5y1 = cys[0].cleavesurface[0][1];
  var p5z1 = cys[0].cleavesurface[0][2];
  //2
  var p5x2 = cys[0].cleavesurface[2][0];
  var p5y2 = cys[0].cleavesurface[2][1];
  var p5z2 = cys[0].cleavesurface[2][2];
  //1
  var p5x3 = cys[0].cleavesurface[1][0];
  var p5y3 = cys[0].cleavesurface[1][1];
  var p5z3 = cys[0].cleavesurface[1][2];
  //Caculate the A,B,C,D in the plane equation
  var p56A = (p5y2-p5y1)*(p5z3-p5z1)-(p5z2-p5z1)*(p5y3-p5y1);
  var p56B = (p5x3-p5x1)*(p5z2-p5z1)-(p5x2-p5x1)*(p5z3-p5z1);
  var p56C = (p5x2-p5x1)*(p5y3-p5y1)-(p5x3-p5x1)*(p5y2-p5y1);
  var D5 = 0-(p56A*p5x1+p56B*p5y1+p56C*p5z1);
  //Find points 7's xyz
  //7
  var p6x4 = cys[0].cleavesurface[7][0];
  var p6y4 = cys[0].cleavesurface[7][1];
  var p6z4 = cys[0].cleavesurface[7][2];
  var D6 = 0-(p56A*p6x4+p56B*p6y4+p56C*p6z4);
  //Caculate the distance between the two planes: 0123 and 4567
  var dis3 = Math.abs(D5-D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);

  
  var curnum = molecule[0].numatoms;
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      for(var k=0;k<10;k++){
        for(var m = 1;m <= curnum;m++){
          //Periodic extension -- x-,y-,z-
          var x = parseFloat(molecule[m].x)-parseFloat(k);
          var y = parseFloat(molecule[m].y)-parseFloat(j);  
          var z = parseFloat(molecule[m].z)-parseFloat(i);
          var cysid = molecule[m].cysid; 
          var A = molecule[m].atomicnumber;
          var xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          var yt=y*blen*Math.sin(gamma)+z*clen*d;         
          var zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          var d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          var d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          var d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          var d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          var d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          var d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
            var flag = true;
            var num = molecule[0].numatoms;
            for(var n = 1;n <= num; n++){
              if(molecule[n].x == x && molecule[n].y == y && molecule[n].z == z){
                flag = false;
                break;
              }
            }
            if(flag==true){
              addAtom(A,x,y,z,cysid);
              var num = molecule[0].numatoms;
              molecule[num].iscleaveatom = 1;
            }
          } 
          //Periodic extension -- x+,y+,z+
          x = parseFloat(molecule[m].x)+parseFloat(k);
          y = parseFloat(molecule[m].y)+parseFloat(j);
          z = parseFloat(molecule[m].z)+parseFloat(i);
          xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          yt=y*blen*Math.sin(gamma)+z*clen*d;         
          zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C); 
          if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
            var flag = true;
            var num = molecule[0].numatoms;
            for(var n = 1;n <= num; n++){
              if(molecule[n].x == x && molecule[n].y == y &&  molecule[n].z == z){
                flag = false;
                break;
              }
            }
            if(flag==true){
              addAtom(A,x,y,z,cysid);
              var num = molecule[0].numatoms;
              molecule[num].iscleaveatom = 1;
            }
          } 
        }
      }
    }
  }
  
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      for(var k=0;k<10;k++){
        for(var m = 1;m <= curnum;m++){
          //Periodic extension -- x+,y+,z-
          var x = parseFloat(molecule[m].x)+parseFloat(k);
          var y = parseFloat(molecule[m].y)+parseFloat(j);  
          var z = parseFloat(molecule[m].z)-parseFloat(i);
          var cysid = molecule[m].cysid; 
          var A = molecule[m].atomicnumber;
          xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          yt=y*blen*Math.sin(gamma)+z*clen*d;         
          zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
            var flag = true;
            var num = molecule[0].numatoms;
            for(var n = 1;n <= num; n++){
              if(molecule[n].x == x && molecule[n].y == y&&molecule[n].z == z){
                flag = false;
                break;
              }
            }
            if(flag==true){
              addAtom(A,x,y,z,cysid);
              var num = molecule[0].numatoms;
              molecule[num].iscleaveatom = 1;
            }
          } 
          //Periodic extension -- x-,y-,z+
          x = parseFloat(molecule[m].x)-parseFloat(k);
          y = parseFloat(molecule[m].y)-parseFloat(j);
          z = parseFloat(molecule[m].z)+parseFloat(i);
          xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          yt=y*blen*Math.sin(gamma)+z*clen*d;         
          zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
            if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
            var flag = true;
            var num = molecule[0].numatoms;
            for(var n = 1;n <= num; n++){
              if(molecule[n].x == x && molecule[n].y == y &&  molecule[n].z == z){
                flag = false;
                break;
              }
            }
            if(flag==true){
              addAtom(A,x,y,z,cysid);
              var num = molecule[0].numatoms;
              molecule[num].iscleaveatom = 1;
            }
          } 
        }
      }
    }
  }
  
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      for(var k=0;k<10;k++){
        for(var m = 1;m <= curnum;m++){
          //Periodic extension -- x+,y-,z+
          var x = parseFloat(molecule[m].x)+parseFloat(k);
          var y = parseFloat(molecule[m].y)-parseFloat(j);  
          var z = parseFloat(molecule[m].z)+parseFloat(i);
          var cysid = molecule[m].cysid; 
          var A = molecule[m].atomicnumber;
          xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          yt=y*blen*Math.sin(gamma)+z*clen*d;         
          zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
            var flag = true;
            var num = molecule[0].numatoms;
            for(var n = 1;n <= num; n++){
              if(molecule[n].x == x && molecule[n].y == y&&molecule[n].z == z){
                flag = false;
                break;
              }
            }
            if(flag==true){
              addAtom(A,x,y,z,cysid);
              var num = molecule[0].numatoms;
              molecule[num].iscleaveatom = 1;
            }
          }       
          //Periodic extension -- x-,y+,z-           
          x = parseFloat(molecule[m].x)-parseFloat(k);
          y = parseFloat(molecule[m].y)+parseFloat(j);
          z = parseFloat(molecule[m].z)-parseFloat(i);
          xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          yt=y*blen*Math.sin(gamma)+z*clen*d;         
          zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){  
            var flag = true;
            var num = molecule[0].numatoms;
            for(var n = 1;n <= num; n++){
              if(molecule[n].x == x && molecule[n].y == y &&  molecule[n].z == z){
                flag = false;
                break;
              }
            }
            if(flag==true){
              addAtom(A,x,y,z,cysid);
              var num = molecule[0].numatoms;
              molecule[num].iscleaveatom = 1;
            }
          } 
        }
      }
    }
  }

  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      for(var k=0;k<10;k++){
        for(var m = 1;m <= curnum;m++){
          //Periodic extension -- x-,y+,z+
          var x = parseFloat(molecule[m].x)-parseFloat(k);
          var y = parseFloat(molecule[m].y)+parseFloat(j);  
          var z = parseFloat(molecule[m].z)+parseFloat(i);
          var cysid = molecule[m].cysid; 
          var A = molecule[m].atomicnumber;
          xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          yt=y*blen*Math.sin(gamma)+z*clen*d;         
          zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
            var flag = true;
            var num = molecule[0].numatoms;
            for(var n = 1;n <= num; n++){
              if(molecule[n].x == x && molecule[n].y == y&&molecule[n].z == z){
                flag = false;
                break;
              }
            }
            if(flag==true){
              addAtom(A,x,y,z,cysid);
              var num = molecule[0].numatoms;
              molecule[num].iscleaveatom = 1;
            }
          }
          //Periodic extension -- x+,y-,z-
          x = parseFloat(molecule[m].x)+parseFloat(k);
          y = parseFloat(molecule[m].y)-parseFloat(j);
          z = parseFloat(molecule[m].z)-parseFloat(i);
          xt = x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          yt = y*blen*Math.sin(gamma)+z*clen*d;         
          zt = z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
            var flag = true;
            var num = molecule[0].numatoms;
            for(var n = 1;n <= num; n++){
              if(molecule[n].x == x && molecule[n].y == y &&  molecule[n].z == z){
                flag = false;
                break;
              }
            }
            if(flag==true){
              addAtom(A,x,y,z,cysid);
              var num = molecule[0].numatoms;
              molecule[num].iscleaveatom = 1;
            }
          } 
        }
      }
    }
  }
  if(cys[0].preview==0){//not in cleave surface preview mode
    var total = molecule[0].numatoms;
    //Delete the atoms outside the cleave surface slab
    for(var j = 1;j<=total;j++){
      for(var i = 1;i<=total;i++){
        if(molecule[i].iscleaveatom !=1){
          var x = molecule[i].x;
          var y = molecule[i].y;
          var z = molecule[i].z;
          xt = x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          yt = y*blen*Math.sin(gamma)+z*clen*d;         
          zt = z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
          d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
          d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
          if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
            continue;
          }else{
            deleteAtom(i);
            break;
          }
          
        }
      }
    }
  }
  //Coordinate transformation based on lattice parameters
  for(var i = 1; i <= molecule[0].numatoms; i++){
    var x = molecule[i].x;
    var y = molecule[i].y;
    var z = molecule[i].z;
    var x1 = x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
    var y1 = y*blen*Math.sin(gamma)+z*clen*d;         
    var z1 = z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
    molecule[i].x = x1;
    molecule[i].y = y1;
    molecule[i].z = z1;
  }
}
/////////////////////////
  }
else{
  var moly=[];
    for(var t=0;t<cys[0].transformLoop.length;t++){
      moly[t]=[];
      moly[t].push(0); 
    }
    for(var i=1;i<=cysnum;i++){
      var hasrepeat = [];
      var A = cys[i].A;
      var x = cys[i].x;
      var y = cys[i].y;
      var z = cys[i].z;
      var cysid=cys[i].cysid;      
      for(var t=0;t<cys[0].transformLoop.length;t++){       
        var x1 = parseTransform(cys[0].transformLoop[t][0],x,y,z);
        var y1 = parseTransform(cys[0].transformLoop[t][1],x,y,z);
        var z1 = parseTransform(cys[0].transformLoop[t][2],x,y,z); 
        var linshi=[];   
        linshi.push(x1);
        linshi.push(y1);
        linshi.push(z1);
        linshi.push(A);
        linshi.push(cysid);
        linshi.push(t);
        hasrepeat.push(linshi);
      }
      var cysPosition = compare(hasrepeat);
      for(var j=0;j<cysPosition.length;j++){         
        var indexi=cysPosition[j][5];
        moly[indexi].push(cysPosition[j]);  
      }
    } 

    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      for(var p=1;p<molnum;p++){
        var x1=moly[o][p][0];
        var y1=moly[o][p][1];
        var z1=moly[o][p][2];
        while(parseFloat(x1)<0){
          x1=parseFloat(x1)+1;
        }
        while(parseFloat(y1)<0){
          y1=parseFloat(y1)+1;
        }
        while(parseFloat(z1)<0){
          z1=parseFloat(z1)+1 ;
        }
        while(parseFloat(x1)>1){
          x1=parseFloat(x1)-1;
        }
        while(parseFloat(y1)>1){
          y1=parseFloat(y1)-1;
        }
        while(parseFloat(z1)>1){
          z1=parseFloat(z1)-1;
        }
      moly[o][p][0]=x1;
      moly[o][p][1]=y1;
      moly[o][p][2]=z1;
      }
    }
    var overlap=[];
    for(var t=0;t<=cysnum;t++){
      overlap[t]=[];
    }
    var overlap1=[];
    for(var t=0;t<=cysnum;t++){
      overlap1[t]=[];
    }
    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      for(var p=1;p<molnum;p++){
        var id = moly[o][p][4];
        overlap[id].push(moly[o][p]);
      }
    }
    for(var t=0;t<cys[0].transformLoop.length;t++){
      moly[t]=[];
      moly[t].push(0); 
    }
    for(var o=1;o<=cysnum;o++){
      overlap1[o]=compare(overlap[o]);
      for(var t=0;t<overlap1[o].length;t++){
        var index=overlap1[o][t][5];
        moly[index].push(overlap1[o][t]);
      }
    }
    if(cys[0].cleave==0){
      if(cys[0].supercell==0){
        for(var o=0;o<moly.length;o++){
          var molnum = moly[o].length;
          for(var p=1;p<molnum;p++){
            var x3=parseFloat(moly[o][p][0]);
            var y3=parseFloat(moly[o][p][1]);
            var z3=parseFloat(moly[o][p][2]);
            var x4=x3*alen+y3*blen*Math.cos(gamma)+z3*clen*Math.cos(beta);        
            var y4=y3*blen*Math.sin(gamma)+z3*clen*d;         
            var z4=z3*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
            addAtom(moly[o][p][3],x4,y4,z4,moly[o][p][4]); 
          }
        } 
      }else{
        for(var o=0;o<moly.length;o++){
          var molnum = moly[o].length;
          for(var p=1;p<molnum;p++){
            var x3=parseFloat(moly[o][p][0]);
            var y3=parseFloat(moly[o][p][1]);
            var z3=parseFloat(moly[o][p][2]);  
            addAtom(moly[o][p][3],x3,y3,z3,moly[o][p][4]); 
          }
        }
      var sc = supercell();
      var exx = sc.extendx;
      var exy = sc.extendy;
      var exz = sc.extendz;
      //x axis extension
      var curnum = molecule[0].numatoms;
      var extendx = exx - 1;
      if(extendx>0){
        for(var j = 1;j <=extendx; j++){
            for(var i = 1;i <= curnum; i++){
              var x = parseFloat(molecule[i].x)+parseFloat(j);
              var y = molecule[i].y;  
              var z = molecule[i].z; 
              var cysid = molecule[i].cysid; 
              var A = molecule[i].atomicnumber;
              addAtom(A,x,y,z,cysid);
            }
        }
      }
      //y axis extension
      curnum = molecule[0].numatoms;
      var extendy = exy - 1;
      if(extendy>0){
        for(var j = 1;j <=extendy; j++){
            for(var i = 1;i <= curnum; i++){
              var x = molecule[i].x;
              var y = parseFloat(molecule[i].y)+parseFloat(j);
              var z = molecule[i].z; 
              var cysid = molecule[i].cysid; 
              var A = molecule[i].atomicnumber;
              addAtom(A,x,y,z,cysid);
            }
        }
      }
      //z axis extension
      curnum = molecule[0].numatoms;
      var extendz = exz - 1;
      if(extendz>0){
        for(var j = 1;j <=extendz; j++){
            for(var i = 1;i <= curnum; i++){
              var x = molecule[i].x;
              var y = molecule[i].y;
              var z = parseFloat(molecule[i].z)+parseFloat(j); 
              var cysid = molecule[i].cysid; 
              var A = molecule[i].atomicnumber;
              addAtom(A,x,y,z,cysid);
            }
        }
      }
      //Coordinate transformation based on lattice parameters
      for(var i = 1; i <= molecule[0].numatoms; i++){
        var x=molecule[i].x;
        var y=molecule[i].y;
        var z=molecule[i].z;
        var x1=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
        var y1=y*blen*Math.sin(gamma)+z*clen*d;         
        var z1=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
        molecule[i].x=x1;
        molecule[i].y=y1;
        molecule[i].z=z1;
      }
      }
    }else{
      var originalnum = 0;
        for(var o=0;o<moly.length;o++){
          var molnum = moly[o].length;
          for(var p=1;p<molnum;p++){
            var x3=parseFloat(moly[o][p][0]);
            var y3=parseFloat(moly[o][p][1]);
            var z3=parseFloat(moly[o][p][2]);  
            addAtom(moly[o][p][3],x3,y3,z3,moly[o][p][4]); 
            originalnum = originalnum + 1;
            var num = molecule[0].numatoms;
            molecule[num].iscleaveatom = 2;
          }
        }
        var sc = supercell();
        var exx = sc.extendx;
        var exy = sc.extendy;
        var exz = sc.extendz;
        //x axis extension
        var curnum = molecule[0].numatoms;
        var extendx = exx - 1;
        if(extendx>0){
          for(var j = 1;j <=extendx; j++){
              for(var i = 1;i <= curnum; i++){
                var x = parseFloat(molecule[i].x)+parseFloat(j);
                var y = molecule[i].y;  
                var z = molecule[i].z; 
                var cysid = molecule[i].cysid; 
                var A = molecule[i].atomicnumber;
                addAtom(A,x,y,z,cysid);
                originalnum = originalnum + 1;
                var num = molecule[0].numatoms;
                molecule[num].iscleaveatom = 2;
              }
          }
        }
        //y axis extension
        curnum = molecule[0].numatoms;
        var extendy = exy - 1;
        if(extendy>0){
          for(var j = 1;j <=extendy; j++){
              for(var i = 1;i <= curnum; i++){
                var x = molecule[i].x;
                var y = parseFloat(molecule[i].y)+parseFloat(j);
                var z = molecule[i].z; 
                var cysid = molecule[i].cysid; 
                var A = molecule[i].atomicnumber;
                addAtom(A,x,y,z,cysid);
                originalnum = originalnum + 1;
                var num = molecule[0].numatoms;
                molecule[num].iscleaveatom = 2;
              }
          }
        }
        //z axis extension
        curnum = molecule[0].numatoms;
        var extendz = exz - 1;
        if(extendz>0){
          for(var j = 1;j <=extendz; j++){
              for(var i = 1;i <= curnum; i++){
                var x = molecule[i].x;
                var y = molecule[i].y;
                var z = parseFloat(molecule[i].z)+parseFloat(j); 
                var cysid = molecule[i].cysid; 
                var A = molecule[i].atomicnumber;
                addAtom(A,x,y,z,cysid);
                originalnum = originalnum + 1;
                var num = molecule[0].numatoms;
                molecule[num].iscleaveatom = 2;
              }
          }
        }
        //Find the equation of the plane 0174 and 2563
        //p12A*x + p12B*y + p12C + D1 = 0
        //p12A*x + p12B*y + p12C + D2 = 0
        //Find points 2 5 6's xyz
        //5
        var p1x1 = cys[0].cleavesurface[5][0];
        var p1y1 = cys[0].cleavesurface[5][1];
        var p1z1 = cys[0].cleavesurface[5][2];
        //2
        var p1x2 = cys[0].cleavesurface[2][0];
        var p1y2 = cys[0].cleavesurface[2][1];
        var p1z2 = cys[0].cleavesurface[2][2];
        //6
        var p1x3 = cys[0].cleavesurface[6][0];
        var p1y3 = cys[0].cleavesurface[6][1];
        var p1z3 = cys[0].cleavesurface[6][2];
        //Caculate the A,B,C,D in the plane equation
        var p12A = (p1y2-p1y1)*(p1z3-p1z1)-(p1z2-p1z1)*(p1y3-p1y1);
        var p12B = (p1x3-p1x1)*(p1z2-p1z1)-(p1x2-p1x1)*(p1z3-p1z1);
        var p12C = (p1x2-p1x1)*(p1y3-p1y1)-(p1x3-p1x1)*(p1y2-p1y1);
        var D1 = -(p12A*p1x1+p12B*p1y1+p12C*p1z1);
        //Find points 4's xyz
        //4
        var p2x4 = cys[0].cleavesurface[4][0];
        var p2y4 = cys[0].cleavesurface[4][1];
        var p2z4 = cys[0].cleavesurface[4][2];
        var D2 = -(p12A*p2x4+p12B*p2y4+p12C*p2z4);
        //Caculate the distance between the two planes: 0174 and 2563
        var dis1 = parseFloat(Math.abs(D1-D2))/parseFloat(Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C));
        
        //Find the equation of the plane 0452 and 1763
        //p34A*x + p34B*y + p34C + D3 = 0
        //p34A*x + p34B*y + p34C + D4 = 0
        //Find points 7 3 1's xyz
        //7
        var p3x1 = cys[0].cleavesurface[7][0];
        var p3y1 = cys[0].cleavesurface[7][1];
        var p3z1 = cys[0].cleavesurface[7][2];
        //3
        var p3x2 = cys[0].cleavesurface[3][0];
        var p3y2 = cys[0].cleavesurface[3][1];
        var p3z2 = cys[0].cleavesurface[3][2];
        //1
        var p3x3 = cys[0].cleavesurface[1][0];
        var p3y3 = cys[0].cleavesurface[1][1];
        var p3z3 = cys[0].cleavesurface[1][2];
        //Caculate the A,B,C,D in the plane equation
        var p34A = (p3y2-p3y1)*(p3z3-p3z1)-(p3z2-p3z1)*(p3y3-p3y1);
        var p34B = (p3x3-p3x1)*(p3z2-p3z1)-(p3x2-p3x1)*(p3z3-p3z1);
        var p34C = (p3x2-p3x1)*(p3y3-p3y1)-(p3x3-p3x1)*(p3y2-p3y1);
        var D3 = -(p34A*p3x1+p34B*p3y1+p34C*p3z1);
        //Find points 2's xyz
        //2
        var p4x4 = cys[0].cleavesurface[2][0];
        var p4y4 = cys[0].cleavesurface[2][1];
        var p4z4 = cys[0].cleavesurface[2][2];
        var D4 = 0-(p34A*p4x4+p34B*p4y4+p34C*p4z4);
        var dis2 = Math.abs(D4-D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);

        //Find the equation of the plane 0123 and 4567
        //p56A*x + p56B*y + p56C + D5 = 0
        //p56A*x + p56B*y + p56C + D6 = 0
        //Find points 0 1 2's xyz
        //0
        var p5x1 = cys[0].cleavesurface[0][0];
        var p5y1 = cys[0].cleavesurface[0][1];
        var p5z1 = cys[0].cleavesurface[0][2];
        //2
        var p5x2 = cys[0].cleavesurface[2][0];
        var p5y2 = cys[0].cleavesurface[2][1];
        var p5z2 = cys[0].cleavesurface[2][2];
        //1
        var p5x3 = cys[0].cleavesurface[1][0];
        var p5y3 = cys[0].cleavesurface[1][1];
        var p5z3 = cys[0].cleavesurface[1][2];
        //Caculate the A,B,C,D in the plane equation
        var p56A = (p5y2-p5y1)*(p5z3-p5z1)-(p5z2-p5z1)*(p5y3-p5y1);
        var p56B = (p5x3-p5x1)*(p5z2-p5z1)-(p5x2-p5x1)*(p5z3-p5z1);
        var p56C = (p5x2-p5x1)*(p5y3-p5y1)-(p5x3-p5x1)*(p5y2-p5y1);
        var D5 = 0-(p56A*p5x1+p56B*p5y1+p56C*p5z1);
        //Find points 7's xyz
        //7
        var p6x4 = cys[0].cleavesurface[7][0];
        var p6y4 = cys[0].cleavesurface[7][1];
        var p6z4 = cys[0].cleavesurface[7][2];
        var D6 = 0-(p56A*p6x4+p56B*p6y4+p56C*p6z4);
        //Caculate the distance between the two planes: 0123 and 4567
        var dis3 = Math.abs(D5-D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);

        var curnum = molecule[0].numatoms;
        for(var i=0;i<10;i++){
          for(var j=0;j<10;j++){
            for(var k=0;k<10;k++){
              for(var m = 1;m <= curnum;m++){
                //Periodic extension -- x-,y-,z-
                var x = parseFloat(molecule[m].x)-parseFloat(k);
                var y = parseFloat(molecule[m].y)-parseFloat(j);  
                var z = parseFloat(molecule[m].z)-parseFloat(i);
                var cysid = molecule[m].cysid; 
                var A = molecule[m].atomicnumber;
                var xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                var yt=y*blen*Math.sin(gamma)+z*clen*d;         
                var zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                var d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                var d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                var d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                var d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                var d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                var d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
                  var flag = true;
                  var num = molecule[0].numatoms;
                  for(var n = 1;n <= num; n++){
                    if(molecule[n].x == x && molecule[n].y == y && molecule[n].z == z){
                      flag = false;
                      break;
                    }
                  }
                  if(flag==true){
                    addAtom(A,x,y,z,cysid);
                    var num = molecule[0].numatoms;
                    molecule[num].iscleaveatom = 1;
                  }
                } 
                //Periodic extension -- x+,y+,z+
                x = parseFloat(molecule[m].x)+parseFloat(k);
                y = parseFloat(molecule[m].y)+parseFloat(j);
                z = parseFloat(molecule[m].z)+parseFloat(i);
                xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                yt=y*blen*Math.sin(gamma)+z*clen*d;         
                zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C); 
                if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
                  var flag = true;
                  var num = molecule[0].numatoms;
                  for(var n = 1;n <= num; n++){
                    if(molecule[n].x == x && molecule[n].y == y &&  molecule[n].z == z){
                      flag = false;
                      break;
                    }
                  }
                  if(flag==true){
                    addAtom(A,x,y,z,cysid);
                    var num = molecule[0].numatoms;
                    molecule[num].iscleaveatom = 1;
                  }
                } 
              }
            }
          }
        }
        
        for(var i=0;i<10;i++){
          for(var j=0;j<10;j++){
            for(var k=0;k<10;k++){
              for(var m = 1;m <= curnum;m++){
                //Periodic extension -- x+,y+,z-
                var x = parseFloat(molecule[m].x)+parseFloat(k);
                var y = parseFloat(molecule[m].y)+parseFloat(j);  
                var z = parseFloat(molecule[m].z)-parseFloat(i);
                var cysid = molecule[m].cysid; 
                var A = molecule[m].atomicnumber;
                xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                yt=y*blen*Math.sin(gamma)+z*clen*d;         
                zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
                  var flag = true;
                  var num = molecule[0].numatoms;
                  for(var n = 1;n <= num; n++){
                    if(molecule[n].x == x && molecule[n].y == y&&molecule[n].z == z){
                      flag = false;
                      break;
                    }
                  }
                  if(flag==true){
                    addAtom(A,x,y,z,cysid);
                    var num = molecule[0].numatoms;
                    molecule[num].iscleaveatom = 1;
                  }
                } 
                //Periodic extension -- x-,y-,z+
                x = parseFloat(molecule[m].x)-parseFloat(k);
                y = parseFloat(molecule[m].y)-parseFloat(j);
                z = parseFloat(molecule[m].z)+parseFloat(i);
                xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                yt=y*blen*Math.sin(gamma)+z*clen*d;         
                zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                  if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
                  var flag = true;
                  var num = molecule[0].numatoms;
                  for(var n = 1;n <= num; n++){
                    if(molecule[n].x == x && molecule[n].y == y &&  molecule[n].z == z){
                      flag = false;
                      break;
                    }
                  }
                  if(flag==true){
                    addAtom(A,x,y,z,cysid);
                    var num = molecule[0].numatoms;
                    molecule[num].iscleaveatom = 1;
                  }
                } 
              }
            }
          }
        }
        
        for(var i=0;i<10;i++){
          for(var j=0;j<10;j++){
            for(var k=0;k<10;k++){
              for(var m = 1;m <= curnum;m++){
                //Periodic extension -- x+,y-,z+
                var x = parseFloat(molecule[m].x)+parseFloat(k);
                var y = parseFloat(molecule[m].y)-parseFloat(j);  
                var z = parseFloat(molecule[m].z)+parseFloat(i);
                var cysid = molecule[m].cysid; 
                var A = molecule[m].atomicnumber;
                xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                yt=y*blen*Math.sin(gamma)+z*clen*d;         
                zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
                  var flag = true;
                  var num = molecule[0].numatoms;
                  for(var n = 1;n <= num; n++){
                    if(molecule[n].x == x && molecule[n].y == y&&molecule[n].z == z){
                      flag = false;
                      break;
                    }
                  }
                  if(flag==true){
                    addAtom(A,x,y,z,cysid);
                    var num = molecule[0].numatoms;
                    molecule[num].iscleaveatom = 1;
                  }
                }          
                //Periodic extension -- x-,y+,z-           
                x = parseFloat(molecule[m].x)-parseFloat(k);
                y = parseFloat(molecule[m].y)+parseFloat(j);
                z = parseFloat(molecule[m].z)-parseFloat(i);
                xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                yt=y*blen*Math.sin(gamma)+z*clen*d;         
                zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){  
                  var flag = true;
                  var num = molecule[0].numatoms;
                  for(var n = 1;n <= num; n++){
                    if(molecule[n].x == x && molecule[n].y == y &&  molecule[n].z == z){
                      flag = false;
                      break;
                    }
                  }
                  if(flag==true){
                    addAtom(A,x,y,z,cysid);
                    var num = molecule[0].numatoms;
                    molecule[num].iscleaveatom = 1;
                  }
                } 
              }
            }
          }
        }
        
        for(var i=0;i<10;i++){
          for(var j=0;j<10;j++){
            for(var k=0;k<10;k++){
              for(var m = 1;m <= curnum;m++){
                //Periodic extension -- x-,y+,z+
                var x = parseFloat(molecule[m].x)-parseFloat(k);
                var y = parseFloat(molecule[m].y)+parseFloat(j);  
                var z = parseFloat(molecule[m].z)+parseFloat(i);
                var cysid = molecule[m].cysid; 
                var A = molecule[m].atomicnumber;
                xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                yt=y*blen*Math.sin(gamma)+z*clen*d;         
                zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
                  var flag = true;
                  var num = molecule[0].numatoms;
                  for(var n = 1;n <= num; n++){
                    if(molecule[n].x == x && molecule[n].y == y&&molecule[n].z == z){
                      flag = false;
                      break;
                    }
                  }
                  if(flag==true){
                    addAtom(A,x,y,z,cysid);
                    var num = molecule[0].numatoms;
                    molecule[num].iscleaveatom = 1;
                  }
                }
                //Periodic extension -- x+,y-,z-
                x = parseFloat(molecule[m].x)+parseFloat(k);
                y = parseFloat(molecule[m].y)-parseFloat(j);
                z = parseFloat(molecule[m].z)-parseFloat(i);
                xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                yt=y*blen*Math.sin(gamma)+z*clen*d;         
                zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
                  var flag = true;
                  var num = molecule[0].numatoms;
                  for(var n = 1;n <= num; n++){
                    if(molecule[n].x == x && molecule[n].y == y &&  molecule[n].z == z){
                      flag = false;
                      break;
                    }
                  }
                  if(flag==true){
                    addAtom(A,x,y,z,cysid);
                    var num = molecule[0].numatoms;
                    molecule[num].iscleaveatom = 1;
                  }
                } 
              }
            }
          }
        }
        if(cys[0].preview == 0){//not in cleave surface preview mode
          var total = molecule[0].numatoms;
          //Delete the atoms outside the cleave surface slab
          for(var j = 1;j<=total;j++){
            for(var i = 1;i<=total;i++){
              if(molecule[i].iscleaveatom !=1){
                var x = molecule[i].x;
                var y = molecule[i].y;
                var z = molecule[i].z;
                xt=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
                yt=y*blen*Math.sin(gamma)+z*clen*d;         
                zt=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
                d1 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D1)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d2 = Math.abs(p12A*xt+p12B*yt+p12C*zt+D2)/Math.sqrt(p12A*p12A+p12B*p12B+p12C*p12C);
                d3 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D3)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d4 = Math.abs(p34A*xt+p34B*yt+p34C*zt+D4)/Math.sqrt(p34A*p34A+p34B*p34B+p34C*p34C);
                d5 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D5)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                d6 = Math.abs(p56A*xt+p56B*yt+p56C*zt+D6)/Math.sqrt(p56A*p56A+p56B*p56B+p56C*p56C);
                if(Math.floor(d1*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d2*100)/100 <= Math.floor(dis1*100)/100 && Math.floor(d3*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d4*100)/100 <= Math.floor(dis2*100)/100 && Math.floor(d5*100)/100 <= Math.floor(dis3*100)/100 && Math.floor(d6*100)/100 <= Math.floor(dis3*100)/100){
                  continue;
                }else{
                  deleteAtom(i);
                  break;
                }      
              }
            }
          }
        }
        //Coordinate transformation based on lattice parameters
        for(var i = 1; i <= molecule[0].numatoms; i++){
          var x=molecule[i].x;
          var y=molecule[i].y;
          var z=molecule[i].z;
          var x1=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
          var y1=y*blen*Math.sin(gamma)+z*clen*d;         
          var z1=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
          molecule[i].x=x1;
          molecule[i].y=y1;
          molecule[i].z=z1;
        }
    }
}
}

///
/// Default crystal generation algorithm
function mode_default(){
  var cys = OriCrystal(); 
  var molecule = Mol();    
  var show = showstyle();
  molecule[0].type = "crystal";
  var alen = cys[0].aLength;
  var blen = cys[0].bLength;
  var clen = cys[0].cLength;
  var alpha = cys[0].alpha;
  var beta = cys[0].beta;
  var gamma = cys[0].gamma;
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);
  var cysnum = cys[0].numcys;  
  var moly = [];
  for(var t=0;t<cys[0].transformLoop.length;t++){
    moly[t] = [];
    moly[t].push(0); 
  }

  for(var i=1;i<=cysnum;i++){
    var hasrepeat=[];
    var A=cys[i].A;
    var x=cys[i].x;
    var y=cys[i].y;
    var z=cys[i].z;
    var cysid=cys[i].cysid;      
    for(var t=0;t<cys[0].transformLoop.length;t++){       
      var x1=parseTransform(cys[0].transformLoop[t][0],x,y,z);
      var y1=parseTransform(cys[0].transformLoop[t][1],x,y,z);
      var z1=parseTransform(cys[0].transformLoop[t][2],x,y,z); 
      var linshi=[];   
      linshi.push(x1);
      linshi.push(y1);
      linshi.push(z1);
      linshi.push(A);
      linshi.push(cysid);
      linshi.push(t);
      hasrepeat.push(linshi);
    }
    var cysPosition = compare(hasrepeat);
    for(var j=0;j<cysPosition.length;j++){         
      var indexi=cysPosition[j][5];
      moly[indexi].push(cysPosition[j]);  
    }
  }

  for(var e=0;e<4;e++){
    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      var bigx=0;
      var smallx=0;
      var bigy=0;
      var smally=0;
      var bigz=0;
      var smallz=0;
      for(var p=1;p<molnum;p++){   
          var xyz=moly[o][p];
          if(xyz[0]>1){
            bigx++;
          }
          if(xyz[0]<0){
            smallx++;
          }
          if(xyz[1]>1){
            bigy++;
          }
          if(xyz[1]<0){
            smally++;
          }
          if(xyz[2]>1){
            bigz++;
          }
          if(xyz[2]<0){
            smallz++;
          }         
      }
      if(bigx>0.625*(molnum-1)){
        for(var p=1;p<molnum;p++){
          moly[o][p][0]-=1;
        }
      }    
      if(smallx>0.625*(molnum-1)){
        for(var p=1;p<molnum;p++){
          moly[o][p][0]+=1;
        }
      }
      if(bigy>0.625*(molnum-1)){
        for(var p=1;p<molnum;p++){
          moly[o][p][1]-=1;
        }
      }
      if(smally>0.625*(molnum-1)){
        for(var p=1;p<molnum;p++){
          moly[o][p][1]+=1;
        }
      }
      if(bigz>0.625*(molnum-1)){
        for(var p=1;p<molnum;p++){
          moly[o][p][2]-=1;
        }
      }
      if(smallz>0.625*(molnum-1)){
        for(var p=1;p<molnum;p++){
          moly[o][p][2]+=1;
        }
      }   
    } 
  }

  var overlap=[];
  for(var t=0;t<=cysnum;t++){
    overlap[t]=[];
  }
  var overlap1=[];
  for(var t=0;t<=cysnum;t++){
    overlap1[t]=[];
  }
  for(var o=0;o<moly.length;o++){
    var molnum = moly[o].length;
    for(var p=1;p<molnum;p++){
      var id = moly[o][p][4];
      overlap[id].push(moly[o][p]);
    }
  }
  for(var t=0;t<cys[0].transformLoop.length;t++){
    moly[t]=[];
    moly[t].push(0); 
  }
  for(var o=1;o<=cysnum;o++){
    overlap1[o]=compare(overlap[o]);
    for(var t=0;t<overlap1[o].length;t++){
      var index=overlap1[o][t][5];
        moly[index].push(overlap1[o][t]);

    }
  }

  if(cys[0].supercell==0){
    for(var o=0;o<moly.length;o++){
    var molnum = moly[o].length;
    for(var p=1;p<molnum;p++){
      var x3=parseFloat(moly[o][p][0]);
      var y3=parseFloat(moly[o][p][1]);
      var z3=parseFloat(moly[o][p][2]);
      var x4=x3*alen+y3*blen*Math.cos(gamma)+z3*clen*Math.cos(beta);        
      var y4=y3*blen*Math.sin(gamma)+z3*clen*d;         
      var z4=z3*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
      addAtom(moly[o][p][3],x4,y4,z4,moly[o][p][4]); 
    }
    }
  }else{
    for(var o=0;o<moly.length;o++){
      var molnum = moly[o].length;
      for(var p=1;p<molnum;p++){
        var x3=parseFloat(moly[o][p][0]);
        var y3=parseFloat(moly[o][p][1]);
        var z3=parseFloat(moly[o][p][2]); 
        addAtom(moly[o][p][3],x3,y3,z3,moly[o][p][4]); 
      }
      }
      var sc = supercell();
      var exx = sc.extendx;
      var exy = sc.extendy;
      var exz = sc.extendz;
      //x axis extension
      curnum = molecule[0].numatoms;
      var extendx = exx - 1;
      if(extendx>0){
        for(var j = 1;j <=extendx; j++){
            for(var i = 1;i <= curnum; i++){
              var x = parseFloat(molecule[i].x)+parseFloat(j);
              var y = molecule[i].y;  
              var z = molecule[i].z; 
              var cysid = molecule[i].cysid; 
              var A = molecule[i].atomicnumber;
              addAtom(A,x,y,z,cysid);
            }
        }
      }
      //y axis extension
      curnum = molecule[0].numatoms;
      var extendy = exy - 1;
      if(extendy>0){
        for(var j = 1;j <=extendy; j++){
            for(var i = 1;i <= curnum; i++){
              var x = molecule[i].x;
              var y = parseFloat(molecule[i].y)+parseFloat(j);
              var z = molecule[i].z; 
              var cysid = molecule[i].cysid; 
              var A = molecule[i].atomicnumber;
              addAtom(A,x,y,z,cysid);
            }
        }
      }
      //z axis extension
      curnum = molecule[0].numatoms;
      var extendz = exz - 1;
      if(extendz>0){
        for(var j = 1;j <=extendz; j++){
            for(var i = 1;i <= curnum; i++){
              var x = molecule[i].x;
              var y = molecule[i].y;
              var z = parseFloat(molecule[i].z)+parseFloat(j); 
              var cysid = molecule[i].cysid; 
              var A = molecule[i].atomicnumber;
              addAtom(A,x,y,z,cysid);
            }
        }
      }
      //Coordinate transformation based on lattice parameters
      for(var i = 1; i <= molecule[0].numatoms; i++){
        var x=molecule[i].x;
        var y=molecule[i].y;
        var z=molecule[i].z;
        var x1=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);        
        var y1=y*blen*Math.sin(gamma)+z*clen*d;         
        var z1=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d); 
        molecule[i].x=x1;
        molecule[i].y=y1;
        molecule[i].z=z1;
      }
  }
}

///
///  Least common multiple of two Numbers.
///
function gcd(a,b){
  var minNum = Math.min(a,b), maxNum = Math.max(a,b), i = minNum, vper = 0;
  if(a === 0 || b === 0){
      return maxNum;
  }
  for(;i<=maxNum;i++){
      vper = minNum * i;
      if(vper % maxNum === 0){
          return vper;
          break;
      }
  }
}

///
///  Find the least common multiple of an array.
///
function gcds(arr){
    var onum = 0,i = 0,len = arr.length,midNum = 0;
    for(;i<len;i++){
        onum = Math.floor(arr[i]);//去掉小数
        midNum = gcd(midNum,onum);
    }
    return midNum;
}

///
/// hide cube
///
function hidecube(){
  var molecule = Mol();
  if(molecule[0].type == "molecule") return;
  var cys = OriCrystal();
  cys[0].showcube = 0;
  drawCube();
  drawAxis();
  if(cys[0].cleave == 1){
    drawsurface();
  }
}

///
/// show cube
///
function showcube(){
  var molecule = Mol();
  if(molecule[0].type == "molecule") return;
  var cys = OriCrystal(); 
  if(cys[0].showcube == 0){
    cys[0].showcube = 1;
    drawCube();
  }  
  drawAxis();
  if(cys[0].cleave == 1){
    drawsurface();
  }
}

///
/// changecube
///
function changecube(){
  var param = parameters();
  if(param.mode == 'Draw'){
    alert("In Draw mode,cannot show or hide cube!");
    return;
  }
  var molecule = Mol();
  if(molecule[0].type == "molecule") {
    alert("Cube cannot be Shown or Hidden in Molecule Display!");
    return;}
  var cys = OriCrystal(); 
  if(cys[0].cleave == 0){
    if(cys[0].showcube == 0){
      cys[0].showcube = 1;
      drawCube();
    } else{
      cys[0].showcube = 0;
      drawCube();
    }
    drawAxis();
    if(cys[0].cleave == 1){
      drawsurface();
    }
  }else{
    alert("Cube cannot be shown or hidden in cleave surface mode!");
  }
}

///
/// resetCube
///
function resetCube(){
  var cys = OriCrystal();
  var point = [
      [0,0,0],
      [1,0,0],
      [0,1,0],
      [1,1,0],
      [0,0,1],
      [1,0,1],
      [0,1,1],
      [1,1,1]];
  var alen= cys[0].aLength;
  var blen= cys[0].bLength;
  var clen= cys[0].cLength;
  var alpha= cys[0].alpha;
  var beta= cys[0].beta;
  var gamma= cys[0].gamma;
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);
  if(cys[0].supercell==0){
    for(var i=0;i<8;i++){
      var x = point[i][0];
      var y = point[i][1];
      var z = point[i][2];
      cys[0].points[i][0]=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);
      cys[0].points[i][1]=y*blen*Math.sin(gamma)+z*clen*d;
      cys[0].points[i][2]=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d);
    } 
  }else{
    var sc = supercell();
    var xmin = 0;
    var xmax = sc.extendx;
    var ymin = 0;
    var ymax = sc.extendy;
    var zmin = 0;
    var zmax = sc.extendz;
    var vec = [];
    vec.push(xmin);vec.push(ymin);vec.push(zmin);
    point = [];
    point.push(vec);//0
    vec = [];
    vec.push(xmax);vec.push(ymin);vec.push(zmin);
    point.push(vec);//1
    vec = [];
    vec.push(xmin);vec.push(ymax);vec.push(zmin);
    point.push(vec);//2
    vec = [];
    vec.push(xmax);vec.push(ymax);vec.push(zmin);
    point.push(vec);//3
    vec = [];
    vec.push(xmin);vec.push(ymin);vec.push(zmax);
    point.push(vec);//4
    vec = [];
    vec.push(xmax);vec.push(ymin);vec.push(zmax);
    point.push(vec);//5
    vec = [];
    vec.push(xmin);vec.push(ymax);vec.push(zmax);
    point.push(vec);//6
    vec = [];
    vec.push(xmax);vec.push(ymax);vec.push(zmax);
    point.push(vec);//7
    for(var i=0;i<8;i++){
      var x = point[i][0];
      var y = point[i][1];
      var z = point[i][2];
      cys[0].points[i][0]=x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);
      cys[0].points[i][1]=y*blen*Math.sin(gamma)+z*clen*d;
      cys[0].points[i][2]=z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d);
    }   
  }
}


//
//move atoms which appear more than one time.
//
function compare(arr){
  var newarr=[];//create new array
  for(var i=0; i<arr.length;i++){//traverse the original array
      var isadd = true;//set tab
      for(var j=0; j<newarr.length;j++){
          /*traverse the new array.
          If the current items in the original array exist in the new array, 
          mark it as' do not add 'and jump out of the new array traversal.*/
          if(arr[i][0]===newarr[j][0] && arr[i][1]===newarr[j][1] 
            && arr[i][2]===newarr[j][2]){
            isadd = false;
            break;
          }
      }
      /*If the tag is' add '(that is, after traversing the new array, 
      the same item is not found), 
      then the element in original array is added to the new array.*/
      if(isadd){
        newarr.push(arr[i]);
      }
  }
  return newarr;//return a new array without repeat elements.
}

///
/// Space group transformation formulas calculate point coordinates.
///
function parseTransform(s,x0,y0,z0) {
  var displacement = 0;
  var indexx = s.indexOf('x');
  var indexy = s.indexOf('y');
  var indexz = s.indexOf('z');
  var chufa = 0;
  var digitsRegex = /[0-9]/g;
  var str1;
  var str2;
  var ss = s;
  if(ss.indexOf('/') !== -1){
    str1 = ss.match(/(\S)[/]/)[1];
    str2 = ss.match(/[/](\S)/)[1];
    chufa = parseFloat(str1/str2);  
    ss = ss.replace(/(\S)[/](\S)/,"u");
  }
  if(ss.length == 1){
    displacement = 0;
    if(ss == 'x'){
      displacement = parseFloat(x0);
    }
    if(ss == 'y'){
      displacement = parseFloat(y0);
    }
    if(ss == 'z'){
      displacement = parseFloat(z0);
    }
  }
  else if(ss.length == 2){
    displacement = 0;
    if(indexx != -1){
      x00 = parseFloat(x0*(-1))
      displacement = x00;
    }
    if(indexy != -1){
      y00 = parseFloat(y0*(-1))
      displacement = y00;
    }
    if(indexz != -1){
      z00 = parseFloat(z0*(-1))
      displacement = z00;
    }
  }
  else if (ss.length > 2) {
    displacement = 0;
    var op = '+';
    for ( var i = 0; i< ss.length; i++) {
      var l = ss.charAt(i);
      if (l === '-' || l === '/' || l==='+') {
        op = l;
      }
      else if (l.match(digitsRegex)) {
        if (op === '+') {
          displacement += parseFloat(l);
        } else if (op === '-') {
          displacement -= parseFloat(l);
        } else if (op === '/') {
          displacement /= parseFloat(l);
        }
      }
      else if(l.match('u')){
        if (op === '+') {
          displacement += parseFloat(chufa);
        } else if (op === '-') {
          displacement -= parseFloat(chufa);
        } else if (op === '/') {
          displacement /= parseFloat(chufa);
        }
      }
      else if(l.match('x')){
        if (op === '+') {
          displacement += parseFloat(x0);
        } else if (op === '-') {
          displacement -= parseFloat(x0);
        } else if (op === '/') {
          displacement /= parseFloat(x0);
        }
      }
      else if(l.match('y')){
        if (op === '+') {
          displacement += parseFloat(y0);
        } else if (op === '-') {
          displacement -= parseFloat(y0);
        } else if (op === '/') {
          displacement /= parseFloat(y0);
        }
      }
      else if(l.match('z')){
        if (op === '+') {
          displacement += parseFloat(z0);
        } else if (op === '-') {
          displacement -= parseFloat(z0);
        } else if (op === '/') {
          displacement /= parseFloat(z0);
        }
      }
    }
  }
  return displacement;
}

///
/// Generate the crystal-CIF transform matrix in poscar 
///
function transformMatrix(x,y,z){
  var cys = OriCrystal();
  var alen = cys[0].aLength;
  var blen = cys[0].bLength;
  var clen = cys[0].cLength;
  var alpha = cys[0].alpha;
  var beta = cys[0].beta;
  var gamma = cys[0].gamma;
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);
  var x1 = x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);
  var y1 = y*blen*Math.sin(gamma)+z*clen*d;
  var z1 = z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d);
  var matrix = [];
  matrix.push(x1);
  matrix.push(y1);
  matrix.push(z1);
  return matrix;
}

///
/// Generate space group transform table
///
function spacegroup_table(){
  var H2_group = document.getElementsByTagName("H2");
  var symmetrys = [];
  for(var j = 0; j < H2_group.length; j++){
    var nextbrothernode = H2_group[j].nextElementSibling;
    var nextbrothertext = nextbrothernode.textContent.substring(33,nextbrothernode.textContent.length);
    var symnum = nextbrothertext; 
    var sym = [];
    var symmetrynode = nextbrothernode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    for(var i = 0 ;i < symnum ; i++){
      var symmetrynodetext = symmetrynode.textContent.substring(11,symmetrynode.textContent.length-1).toLowerCase();
      symmetrynodetext = symmetrynodetext.split(','); 
      sym.push(symmetrynodetext);
      symmetrynode = symmetrynode.nextElementSibling;
    }     
    symmetrys.push(sym);  
  } 
  return symmetrys;
}


///
///Draw the cube
///
function drawCube(){
  if (typeof drawCube.color === "undefined"){
    drawCube.color = "#ffffff";
  }
  var cys = OriCrystal();
  var mycanvas = activeWin("");
  var canvas = document.getElementById(mycanvas);
  if ( ! canvas )
    return;
  var ctx = canvas.getContext('2d');
  var centerx = canvas.width/2;
  var centery = canvas.height/2;
  var molecule = Mol();
  var points = cys[0].points;
  var cubeindex = [
    [0,1],
    [0,2],
    [1,3],
    [2,3],
    [0,4],
    [1,5],
    [2,6],
    [3,7],
    [4,5],
    [4,6],
    [5,7],
    [6,7]
  ]; 
  if(cys[0].showcube == 0) {
    drawMolecule();
  }else{
    drawMolecule();
    for(var i=0;i<cubeindex.length;i++){
      var indexx0=cubeindex[i][0];
      var indexy0=cubeindex[i][1];
      var point0 = points[indexx0];
      var point1 = points[indexy0];
      var point0x = Math.floor(point0[0]*molecule[0].AtomScale+centerx+0.5);
      var point1x = Math.floor(point1[0]*molecule[0].AtomScale+centerx+0.5);
      var point0y = Math.floor(point0[1]*molecule[0].AtomScale+centery+0.5);
      var point1y = Math.floor(point1[1]*molecule[0].AtomScale+centery+0.5);
      if(molecule.axisLabelShow&&indexx0==0&&indexy0==1){
        drawline(ctx,point0x,point0y,point1x,point1y,1);
      }else if(molecule.axisLabelShow&&indexx0==0&&indexy0==4){
        drawline(ctx,point0x,point0y,point1x,point1y,3);
      }else if(molecule.axisLabelShow&&indexx0==0&&indexy0==2){
        drawline(ctx,point0x,point0y,point1x,point1y,2);
      }else{
        drawline(ctx,point0x,point0y,point1x,point1y,0);
      }     
    }
    if (molecule.axisLabelShow){
      //o
      var xo = Math.floor(points[0][0]*molecule[0].AtomScale+centerx+0.5);
      var yo = Math.floor(points[0][1]*molecule[0].AtomScale+centery+0.5);
      drawlabel(ctx,"O",xo,yo,drawCube.color,20);
      //a
      var xa = Math.floor(points[1][0]*molecule[0].AtomScale+centerx+0.5);
      var ya = Math.floor(points[1][1]*molecule[0].AtomScale+centery+0.5);
      drawlabel(ctx,"A",xa,ya,"rgb(255,0,0)",20);
      //b
      var xb = Math.floor(points[2][0]*molecule[0].AtomScale+centerx+0.5);
      var yb = Math.floor(points[2][1]*molecule[0].AtomScale+centery+0.5);
      drawlabel(ctx,"B",xb,yb,"rgb(0,0,255)",20);
      //c
      var xc = Math.floor(points[4][0]*molecule[0].AtomScale+centerx+0.5);
      var yc = Math.floor(points[4][1]*molecule[0].AtomScale+centery+0.5);
      drawlabel(ctx,"C",xc,yc,"rgb(0,255,0)",20);
    }
  }
}


// ------ (2) Supercell ------

///
/// Parameter of supercell
///
function supercell(){
  if(typeof supercell.param === "undefined"){
    supercell.param = new scparam();
  }
  supercell.param.extendx = document.getElementById('extendx').value;
  supercell.param.extendy = document.getElementById('extendy').value;
  supercell.param.extendz = document.getElementById('extendz').value;
  
  return supercell.param;
}

///
/// Switch to supercell mode
///
function mode_supercell(){
  var molecule = Mol();
  if(molecule[0].type=="crystal"){
    // var index = document.getElementById("crystalstyle").selectedIndex;
    // var now = document.getElementById("crystalstyle").options[index].value;
    var cys = OriCrystal();
    cys[0].supercell = 1;
    cys[0].cleave = 0;
    changecrystalstyle("in-cell");    
  }else{
    alert("No supercell operation in amorphous mode!");
  }
}

///
///  Define xyz parameter for supercell structure
///
function scparam(){
  this.extendx = 1;
  this.extendy = 1;
  this.extendz = 1;
}

///
///Exit the supercell mode
///
function exit_supercell(){
  var cys = OriCrystal();
  cys[0].supercell = 0;
  var index = document.getElementById("crystalstyle").selectedIndex;
  var now = document.getElementById("crystalstyle").options[index].value;
  changecrystalstyle(now);
}

// ------ (3) Slab Surface ------

///
///  Onchange function monitors U and V changes.
///
function uvchanged(){
  var cys = OriCrystal();
  drawcleavesurface();
  document.getElementById('vacuum thickness').value = 0;
  cys[0].vacuumthickness = 0;
}

///
///  Onchange function monitors cleave operation parameter-"vacuum thickness" changes
///
function thicknesschanged(value){
  var cys = OriCrystal();
  cys[0].cleavethickness = parseFloat(value);
  drawcleavesurface();
  document.getElementById('vacuum thickness').value = 0;
  cys[0].vacuumthickness = 0;
}

///
///  Onchange function monitors cleave operation parameter-"h k l" changes
///
function hklchanged(value){
  var molecule = Mol();
  var cys = OriCrystal();
  if(molecule[0].type == "molecule"){
    alert("No cleave-surface operations in amorphous mode!")
  }else{
    //fetch h、k、l from font-end input
    var whitespaceRegex = /\s+/g;
    var content = value.value.split(whitespaceRegex);
    var h = content[0];
    var k = content[1];
    var l = content[2];
    //U and V generate alogrithm refers to "Efficient creation and convergence of surface slabs"
    var zeros = 0;
    if(h == 0) zeros++;
    if(k == 0) zeros++;
    if(l == 0) zeros++;
    var a = [1,0,0];
    var b = [0,1,0];
    var c = [0,0,1];
    //variable zeros -- count the number of 0's in h, k and l.
    //different zeros lead to different ways to generate U and V vector.
    //p1, p2 and p3 are intermediate vector(variable) in the way to generate U and V.
    if(zeros == 0){
      var hkl = [];
      hkl.push(h);
      hkl.push(k);
      hkl.push(l); 
      var hklPositive = [];
      hklPositive.push(Math.abs(h));
      hklPositive.push(Math.abs(k));
      hklPositive.push(Math.abs(l));
      var M = gcds(hklPositive);
      var p1 = [];
      for(var i = 0;i < 3;i++){
        p1.push((M/h)*a[i]);
      }
      var p2 = [];
      for(var i = 0;i < 3;i++){
        p2.push((M/k)*b[i]);
      }
      var p3 = [];
      for(var i = 0;i < 3;i++){
        p3.push((M/l)*c[i]);
      }
    }
    else if(zeros == 1){
      if(h == 0){
        var M = gcd(Math.abs(k),Math.abs(l));
        var p2 = [];
        for(var i = 0;i < 3;i++){
          p2.push((M/k)*b[i]);
        }
        var p3 = [];
        for(var i = 0;i < 3;i++){
          p3.push((M/l)*c[i]);
        }
        var p1 = [];
        for(var i = 0;i < 3; i++){
          var temp = p2[i] + a[i];
          p1.push(temp);
        }
      }
      else if(k == 0){
        var M = gcd(Math.abs(h),Math.abs(l));
        var p1 = [];
        for(var i = 0;i < 3;i++){
          p1.push((M/h)*a[i]);
        }
        var p3 = [];
        for(var i = 0;i < 3;i++){
          p3.push((M/l)*c[i]);
        }
        var p2 = [];
        for(var i = 0;i < 3; i++){
          var temp = p1[i] + b[i];
          p2.push(temp);
        }
      }
      else if(l == 0){
        var M = gcd(Math.abs(h),Math.abs(k));
        var p1 = [];
        for(var i = 0;i < 3;i++){
          p1.push((M/h)*a[i]);
        }
        var p2 = [];
        for(var i = 0;i < 3;i++){
          p2.push((M/k)*b[i]);
        }
        var p3 = [];
        for(var i = 0;i < 3; i++){
          var temp = p1[i] + c[i];
          p3.push(temp);
        }
      }
    }
    else if(zeros == 2){
      if(h !== 0){
        var p1 = [0,0,0];
        var p2 = [];
        for(var i = 0;i < 3;i++){
          p2.push(b[i]);
        }
        var p3 = [];
        for(var i = 0;i < 3;i++){
          p3.push(c[i]);
        }
      }
      if(k !== 0){
        var p2 = [0,0,0];
        var p1 = [];
        for(var i = 0;i < 3;i++){
          p1.push(a[i]);
        }
        var p3 = [];
        for(var i = 0;i < 3;i++){
          p3.push(c[i]);
        }
      }
      if(l !== 0){
        var p3 = [0,0,0];
        var p2 = [];
        for(var i = 0;i < 3;i++){
          p2.push(b[i]);
        }
        var p1 = [];
        for(var i = 0;i < 3;i++){
          p1.push(a[i]);
        }
      }
    }
    var v1 = [];
    var v2 = [];
    for(var i = 0;i < 3;i++){
      var temp = p2[i] - p1[i];
      v1.push(temp);
    }
    for(var i = 0;i < 3;i++){
      var temp = p3[i] - p1[i];
      v2.push(temp);
    }
    //U and V generation finished.

    //pass the result to the font end.
    // if(cys[0].supercell == 1){
    //   alert("No cleave operation in supercell mode. Please exit supercell mode first!");
    // }else{
      document.getElementById('U').value = v1; 
      document.getElementById('V').value = v2;
      //different crystal parameters open.
      document.getElementById('vacuum thickness').value = 0;
      cys[0].vacuumthickness = 0;      
      cys[0].cleave = 1;
      cys[0].preview = 1;
      drawcleavesurface();
    //} 
  }
}

///
///  Monitors vacuum operation parameter-"vacuumthickness" changes and modify.
///
function vacuumthicknesschangedACK(){
  var cys = OriCrystal();
  var molecule = Mol();
  if(molecule[0].type == "molecule"){
    alert("No vacuum operation in amorphous mode!");
  }else{
    if(cys[0].cleave == 1){
      var originalthickness = cys[0].vacuumthickness;
      cys[0].vacuumthickness = document.getElementById("vacuum thickness").value;
      cys[0].vacuum = 1;
      var x0 = cys[0].cleavesurface[0][0];
      var y0 = cys[0].cleavesurface[0][1];
      var z0 = cys[0].cleavesurface[0][2];

      var x1 = cys[0].cleavesurface[1][0];
      var y1 = cys[0].cleavesurface[1][1];
      var z1 = cys[0].cleavesurface[1][2];

      var x2 = cys[0].cleavesurface[2][0];
      var y2 = cys[0].cleavesurface[2][1];
      var z2 = cys[0].cleavesurface[2][2];

      var x3 = cys[0].cleavesurface[3][0];
      var y3 = cys[0].cleavesurface[3][1];
      var z3 = cys[0].cleavesurface[3][2];

      var x4 = cys[0].cleavesurface[4][0];
      var y4 = cys[0].cleavesurface[4][1]; 
      var z4 = cys[0].cleavesurface[4][2];

      var x5 = cys[0].cleavesurface[5][0];
      var y5 = cys[0].cleavesurface[5][1];
      var z5 = cys[0].cleavesurface[5][2];

      var x6 = cys[0].cleavesurface[6][0];
      var y6 = cys[0].cleavesurface[6][1];
      var z6 = cys[0].cleavesurface[6][2];

      var x7 = cys[0].cleavesurface[7][0];
      var y7 = cys[0].cleavesurface[7][1];
      var z7 = cys[0].cleavesurface[7][2];

      var a = parseFloat(cys[0].cleavethickness);
      var b = parseFloat(cys[0].vacuumthickness);
      var c = parseFloat(a) + parseFloat(originalthickness);

      var x66 = (a+b)/c*(x6-x3)+x3;
      var x55 = (a+b)/c*(x5-x2)+x2;
      var x44 = (a+b)/c*(x4-x0)+x0;
      var x77 = (a+b)/c*(x7-x1)+x1;
    
      cys[0].cleavesurface[6][0] = x66;
      cys[0].cleavesurface[5][0] = x55;
      cys[0].cleavesurface[4][0] = x44;
      cys[0].cleavesurface[7][0] = x77;

      var y66 = (a+b)*(y6-y3)/c+y3;
      var y55 = (a+b)*(y5-y2)/c+y2;
      var y44 = (a+b)*(y4-y0)/c+y0;
      var y77 = (a+b)*(y7-y1)/c+y1;

      cys[0].cleavesurface[6][1] = y66;
      cys[0].cleavesurface[5][1] = y55;
      cys[0].cleavesurface[4][1] = y44;
      cys[0].cleavesurface[7][1] = y77;
      
      var z66 = (a+b)/c*(z6-z3)+z3;
      var z55 = (a+b)/c*(z5-z2)+z2;
      var z44 = (a+b)/c*(z4-z0)+z0;
      var z77 = (a+b)/c*(z7-z1)+z1;

      cys[0].cleavesurface[6][2] = z66;
      cys[0].cleavesurface[5][2] = z55;
      cys[0].cleavesurface[4][2] = z44;
      cys[0].cleavesurface[7][2] = z77;

      centerMolecule();
      drawMolecule();
      if(molecule[0].type == "crystal" && cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      drawAxis();
      if(cys[0].cleave == 1){
        drawsurface();
      }
    }else{
      alert("No vacuum operation in non-cleave surface mode!");
    }
  }
}

///
///  Exit the cleave preview mode and cleave the surface.
///
function cleaveACK(){
  var molecule = Mol();
  var cys = OriCrystal();
  if( molecule[0].type == "crystal"){
    cys[0].preview = 0;
    drawcleavesurface();
  }else if( molecule[0].type != "crystal" ){
    alert("No cleave operation in amorphous mode!");
  }
  // else if( cys[0].supercell != 0 ){
  //   alert("No cleave operation in supercell mode!");
  // }
}


///
///Draw the surface of cleave slab
///
function drawsurface(){
  var cys = OriCrystal();
  var mycanvas = activeWin("");
  var canvas = document.getElementById(mycanvas);
  if ( ! canvas )
    return;
  var ctx = canvas.getContext('2d');
  drawMolecule();
  var molecule = Mol();
  var width = canvas.width;
  var height = canvas.height;
  var centerx = width/2;
  var centery = height/2;
  var x0 = Math.floor(cys[0].cleavesurface[0][0]*molecule[0].AtomScale+centerx+0.5);
  var y0 = Math.floor(cys[0].cleavesurface[0][1]*molecule[0].AtomScale+centery+0.5);
  var x1 = Math.floor(cys[0].cleavesurface[1][0]*molecule[0].AtomScale+centerx+0.5);
  var y1 = Math.floor(cys[0].cleavesurface[1][1]*molecule[0].AtomScale+centery+0.5);
  var x2 = Math.floor(cys[0].cleavesurface[2][0]*molecule[0].AtomScale+centerx+0.5);
  var y2 = Math.floor(cys[0].cleavesurface[2][1]*molecule[0].AtomScale+centery+0.5);
  var x3 = Math.floor(cys[0].cleavesurface[3][0]*molecule[0].AtomScale+centerx+0.5);
  var y3 = Math.floor(cys[0].cleavesurface[3][1]*molecule[0].AtomScale+centery+0.5);
  var x4 = Math.floor(cys[0].cleavesurface[4][0]*molecule[0].AtomScale+centerx+0.5);
  var y4 = Math.floor(cys[0].cleavesurface[4][1]*molecule[0].AtomScale+centery+0.5); 
  var x5 = Math.floor(cys[0].cleavesurface[5][0]*molecule[0].AtomScale+centerx+0.5);
  var y5 = Math.floor(cys[0].cleavesurface[5][1]*molecule[0].AtomScale+centery+0.5);
  var x6 = Math.floor(cys[0].cleavesurface[6][0]*molecule[0].AtomScale+centerx+0.5);
  var y6 = Math.floor(cys[0].cleavesurface[6][1]*molecule[0].AtomScale+centery+0.5);
  var x7 = Math.floor(cys[0].cleavesurface[7][0]*molecule[0].AtomScale+centerx+0.5);
  var y7 = Math.floor(cys[0].cleavesurface[7][1]*molecule[0].AtomScale+centery+0.5);
  if(cys[0].vacuum !=1){
    drawline(ctx,x0,y0,x1,y1,0);
    drawline(ctx,x0,y0,x2,y2,0);
    drawline(ctx,x2,y2,x3,y3,0);
    drawline(ctx,x1,y1,x3,y3,0);
  }
  if(cys[0].preview == 1){//in cleave surface preview mode, line ought to be dotted line
    drawline(ctx,x0,y0,x4,y4,4,1);
    drawline(ctx,x4,y4,x5,y5,4,1);
    drawline(ctx,x2,y2,x5,y5,4,1);
    drawline(ctx,x6,y6,x5,y5,4,1);
    drawline(ctx,x3,y3,x6,y6,4,1);
    drawline(ctx,x4,y4,x7,y7,4,1);
    drawline(ctx,x7,y7,x6,y6,4,1);
    drawline(ctx,x7,y7,x1,y1,4,1);
  }else{
    if(cys[0].vacuum == 1){
      molecule.axisLabelShow ? drawline(ctx,x0,y0,x1,y1,1) : drawline(ctx,x0,y0,x1,y1,0);
      molecule.axisLabelShow ? drawline(ctx,x0,y0,x2,y2,2) : drawline(ctx,x0,y0,x2,y2,0);
      drawline(ctx,x2,y2,x3,y3,0);
      drawline(ctx,x1,y1,x3,y3,0);
      molecule.axisLabelShow ? drawline(ctx,x0,y0,x4,y4,3) : drawline(ctx,x0,y0,x4,y4,0);
      drawline(ctx,x4,y4,x5,y5,0);
      drawline(ctx,x2,y2,x5,y5,0);
      drawline(ctx,x6,y6,x5,y5,0);
      drawline(ctx,x3,y3,x6,y6,0);
      drawline(ctx,x4,y4,x7,y7,0);
      drawline(ctx,x7,y7,x6,y6,0);
      drawline(ctx,x7,y7,x1,y1,0);
    }    
  }
  if(molecule.axisLabelShow) {
    if(cys[0].vacuum !=1 ){
        drawlabel(ctx,"O",x0,y0,"rgb(0,0,0)",20);
        drawlabel(ctx,"V",x1,y1,"rgb(0,0,0)",20);
        drawlabel(ctx,"U",x2,y2,"rgb(0,0,0)",20);
    }else{
        drawlabel(ctx,"O",x0,y0,"rgb(0,0,0)",20);
        drawlabel(ctx,"A",x1,y1,"rgb(255,0,0)",20);
        drawlabel(ctx,"B",x2,y2,"rgb(0,0,255)",20);
        drawlabel(ctx,"C",x4,y4,"rgb(0,255,0)",20);
    }
  }
}



///
///  Get the U and V from font-end, then generate the 8 vertex coordinates of cleave slab.
///
function drawcleavesurface(){
  // var index = document.getElementById("crystalstyle").selectedIndex;
  // var now = document.getElementById("crystalstyle").options[index].value;
  var cys = OriCrystal();
  var u = document.getElementById("U").value;
  var v = document.getElementById("V").value;
  var v1 = v.split(",");
  var v2 = u.split(",");
  var alen = cys[0].aLength;
  var blen = cys[0].bLength;
  var clen = cys[0].cLength;
  var alpha = cys[0].alpha;
  var beta = cys[0].beta;
  var gamma = cys[0].gamma;
  if(cys[0].supercell == 1){
    var sc = supercell();
    var exx = sc.extendx;
    var exy = sc.extendy;
    var exz = sc.extendz;
    alen = alen * exx;
    blen = blen * exy;
    clen = clen * exz;
  }
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);

  v1[0]=parseFloat(v1[0]);
  v1[1]=parseFloat(v1[1]);
  v1[2]=parseFloat(v1[2]);
  var v10=v1[0]*alen+v1[1]*blen*Math.cos(gamma)+v1[2]*clen*Math.cos(beta);
  var v11=v1[1]*blen*Math.sin(gamma)+v1[2]*clen*d;
  var v12=v1[2]*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d);  

  v2[0]=parseFloat(v2[0]);
  v2[1]=parseFloat(v2[1]);
  v2[2]=parseFloat(v2[2]);
  var v20=v2[0]*alen+v2[1]*blen*Math.cos(gamma)+v2[2]*clen*Math.cos(beta);
  var v21=v2[1]*blen*Math.sin(gamma)+v2[2]*clen*d;
  var v22=v2[2]*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d);

  var v30 = parseFloat(v10)+parseFloat(v20);
  var v31 = parseFloat(v11)+parseFloat(v21);
  var v32 = parseFloat(v12)+parseFloat(v22);

  cys[0].cleavethickness = document.getElementById('thickness').value;
  //get the vertical vector([v40 v41 v42]) of v1 and v2.
  var v40 = parseFloat(v11)*parseFloat(v22) - parseFloat(v12)*parseFloat(v21);
  var v41 = parseFloat(v12)*parseFloat(v20) - parseFloat(v10)*parseFloat(v22);
  var v42 = parseFloat(v10)*parseFloat(v21) - parseFloat(v11)*parseFloat(v20);
  //get the unit vector of [v40 v41 v42].
  var fenmu = Math.sqrt(v40*v40+v41*v41+v42*v42);
  v40 = v40/fenmu;
  v41 = v41/fenmu;
  v42 = v42/fenmu;
  //multiply the cleavethickness.
  v40 = v40*parseFloat(cys[0].cleavethickness);
  v41 = v41*parseFloat(cys[0].cleavethickness);
  v42 = v42*parseFloat(cys[0].cleavethickness);

  var v50 = parseFloat(v20)+parseFloat(v40);
  var v51 = parseFloat(v21)+parseFloat(v41);
  var v52 = parseFloat(v22)+parseFloat(v42);

  var v60 = parseFloat(v40)+parseFloat(v30);
  var v61 = parseFloat(v41)+parseFloat(v31);
  var v62 = parseFloat(v42)+parseFloat(v32);
  
  var v70 = parseFloat(v10)+parseFloat(v40);
  var v71 = parseFloat(v11)+parseFloat(v41);
  var v72 = parseFloat(v12)+parseFloat(v42);

  cys[0].cleavesurface=[];
  cys[0].cleavesurface.push([0,0,0]);
  cys[0].cleavesurface.push([v10,v11,v12]);
  cys[0].cleavesurface.push([v20,v21,v22]);
  cys[0].cleavesurface.push([v30,v31,v32]);
  cys[0].cleavesurface.push([v40,v41,v42]);
  cys[0].cleavesurface.push([v50,v51,v52]);
  cys[0].cleavesurface.push([v60,v61,v62]);
  cys[0].cleavesurface.push([v70,v71,v72]);
  cys[0].cleave = 1; 
  changecrystalstyle("in-cell"); 
  drawsurface(); 
}






//
// -------------------- CHARGES --------------------
//

//#   function setCharge()
//#
//#   Routine to set the molecular charge using value of select form with id="SelectCharge".
//#
function setCharge() {
  var molecule = Mol();
  var ChargeForm = document.getElementById("SelectCharge");

  if ( ChargeForm ) {
    molecule[0].charge = ChargeForm.value * 1;
    }

  // End of setCharge routine
  }


//#   function simpleQ()
//#
//#   Public routine to (somewhat arbitrarily) assign electron configuration,
//#   including bond orders, and calculate the charges on each atom.
//#
function simpleQ() {

  // Define local variables
  var i, j;
  var BondMtx = [];
  var BondWin = document.getElementById("bondMatrix");
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;
  var cys = OriCrystal();

  // If no atoms defined, exit
  if ( numatoms < 1 ) {
    InfoWin("Cannot set charges. No atoms found.\n",1);
    return;
    }

  // Toggle charge button
  if ( molecule[0].showcharges != 0 ) {
    buttonColor("ChargeButton",0);
    molecule[0].showcharges = 0;
    if ( document.getElementById("SelectCharge") ) {
      document.getElementById("SelectCharge").value = 0;
      }
    drawMolecule();
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    drawAxis();
    return;
    }

  // Change color of charge button
  buttonColor("ChargeButton",1);
  molecule[0].showcharges = 1;

  // Clear information and bond windows
  InfoWin("",1);
  if ( BondWin )
    BondWin.innerHTML = "";

  // Initialize Bond Matrix
  for (i = 0; i <= numatoms; i++) {
    BondMtx[i] = [];
    for (j = 0; j <= numatoms; j++)
      BondMtx[i][j] = 0.0;
    }

  // Initialize calculated atomic charges
  for (i=1; i <= numatoms; i++)
    molecule[i].charge = 0.0;

  // Place electrons for single bonds in BondMtx.
  sigmaBonds(BondMtx);

  // If no charge explicitly set, try to calculate "best" charge
  if ( molecule[0].charge == 999 )
    formalcharge();

  // Adjust electrons is necessary to match charge
  checkcharge(BondMtx);

  // Create list of atoms with less than octet of electrons
  checkOctet(BondMtx);

  // Then, loop over all atoms and share electrons to form pi bonds
  limitShare(BondMtx);
  formPi(BondMtx);

  // Look for atoms that still have less than full octet
  // If violations of octet rule found, try to form 'dative' bonds
  checkOctet(BondMtx);
  formDative(BondMtx);

  // Calculate charges
  atomicCharge(BondMtx);

  // Write bond matrix to output window
  if ( BondWin )
    showBondMatrix(BondMtx, BondWin);

  // Draw molecule, showing charges
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  // Finished with simpleQ routine
  return;
  }


///
///   Calculate formal charges based on "ideal" number of bonds
///   (for main group elements only).  Since multiple bonds may
///   not yet be known, negative formal charges limited to -1.
///
function formalcharge() {
  // Declare local variables
  var i, num;
  var octet, qbonds;
  var formalpos, formalneg;
  var molecule = Mol();
  var numatoms = molecule[0].numatoms;
  var bonds = BondMatrix();

  // Calculate formal charges based on number of bonds
  formalpos = 0.0;
  formalneg = 0.0;
  for (i=1; i <= numatoms; i++) {
    octet = 0;
    if (element(molecule[i].atomicnumber,"block") == "s")
      octet = 2;
    if (element(molecule[i].atomicnumber,"block") == "p")
      octet = 8;
    if ( octet > 0 ) {
      qbonds = bonds[i][0] + element(molecule[i].atomicnumber,"valence") - octet;
      if ( qbonds < 0 )
        formalneg += qbonds;
      if ( qbonds > 0 )
        formalpos += qbonds;
    	}
    }

  // Since multiple bonds not yet known, "scale down" negative charges
  while ( formalneg <= -2 )
    formalneg += 2;

  // Store formal charge prediction of molecular charge
  molecule[0].charge = formalpos + formalneg;

  // End formalcharge routine
  return;
  }


///
///   Look for mismatch between molecular charge and the calculated charge
///   based on the electron assignment.  If difference found, try to
///   add/remove appropriate number of electrons to fix.
///
function checkcharge(BondMtx) {
  // Declare local variables
  var i, j, num;
  var totalq;
  var deltaq, electrons;
  var molecule = Mol();
  var numatoms = molecule[0].numatoms;
  var block, numetals;
  var eerror;
  var bonds = BondMatrix();
  var AlmostZero = 0.00001;

  // Count electrons to determine current charge
  totalq = 0;
  for (i=1; i <= numatoms; i++) {
    totalq += element(molecule[i].atomicnumber,"valence");
    for (j=i; j <= numatoms; j++) {
      totalq -= BondMtx[i][j];
      }
    }

  // If values don't match, try to add/remove electrons.
  deltaq = totalq - molecule[0].charge;
  if ( Math.abs(deltaq) < AlmostZero ) {
    return;
    }

  // If too many electrons present, remove from lone pairs
  if ( deltaq < -AlmostZero )  {
    // Remove electrons from metals first
    numetals = 0;
    for (i=1; i <= molecule[0].numatoms; i++) {
      block = element(molecule[i].atomicnumber,"block");
      if ( (block == "d") || (block == "f") ) {
        numetals++;
        }
      }
    if ( numetals > 0 ) {
        electrons = -deltaq / numetals;
        for (i=1; i <= molecule[0].numatoms; i++) {
          block = element(molecule[i].atomicnumber,"block");
          if ( (block == "d") || (block == "f") ) {
            BondMtx[i][i] -= electrons;
            }
          }
      } else {
        // No metals present, so remove from lone pairs
        num = 0;  
        for (i=1; i <= molecule[0].numatoms; i++) {
          if ( BondMtx[i][i] > 0 )
            num++;
          }
        eerror = -deltaq;
        if ( num > 0 ) {
          eerror = 0;
          electrons = -deltaq / num;
          for (i=1; i <= molecule[0].numatoms; i++) {
            if ( BondMtx[i][i] > 0 ) {
              BondMtx[i][i] -= electrons;
              if ( BondMtx[i][i] < 0 ) {
                eerror -= BondMtx[i][i];
                BondMtx[i][i] = 0.0;
                }
              }
            }
          }
        // Solve (rare) case where couldn't remove enough e- from one or more atoms
        if ( eerror > 0 ) {
          num = 0;  
          for (i=1; i <= molecule[0].numatoms; i++) {
            if ( BondMtx[i][i] > 0 )
              num++;
            }
          if ( num > 0 ) {
            electrons = eerror / num;
            for (i=1; i <= molecule[0].numatoms; i++) {
              if ( BondMtx[i][i] > 0 ) {
                BondMtx[i][i] -= electrons;
                }
              }
            }
          }
      }
    }

  // If not enough electrons present, add to atoms short of full octet
  if ( deltaq > AlmostZero )  {
    // Create list of atoms that with less than octet of electrons
    checkOctet(BondMtx);
    // Count number of atoms short of full octet
    num = 0;
    for (i=1; i <= molecule[0].numatoms; i++) {
      if ( BondMtx[i][0] > 0.0 )
        num++;
      }
    // If atoms found that need electrons, add them
    eerror = deltaq;
    if ( num > 0 ) {
      eerror = 0;
      electrons = deltaq/num;
      for ( i=1; i <= molecule[0].numatoms; i++ ) {
        if ( BondMtx[i][0] > 0.0 ) {
          if ( electrons <= BondMtx[i][0]) {
              BondMtx[i][i] += electrons;
            } else {
              BondMtx[i][i] += BondMtx[i][0];
              eerror += electrons - BondMtx[i][0];
              BondMtx[i][0] = 0;
            }
          }
        }
      // Try again if one or more atoms couldn't accept enough e-
      if ( eerror > 0 ) {
        num = 0;
        for (i=1; i <= molecule[0].numatoms; i++) {
          if ( BondMtx[i][0] > 0.0 )
            num++;
          }
        if ( num > 0 ) {
          electrons = eerror/num;
          eerror = 0;
          for ( i=1; i <= molecule[0].numatoms; i++ ) {
            if ( BondMtx[i][0] > 0.0 ) {
              if ( electrons <= BondMtx[i][0]) {
                  BondMtx[i][i] += electrons;
                } else {
                  BondMtx[i][i] += BondMtx[i][0];
                  eerror += electrons - BondMtx[i][0];
                  BondMtx[i][0] = 0;
                }
              }
            }
          }
        }
      }
    // If all else fails, add electrons to atoms that can violate octet rule 
    if ( eerror > 0 )  {
      num = 0;
      for (i=1; i <= molecule[0].numatoms; i++) {
        if ( molecule[i].atomicnumber > 12 )
          num++;
        }
      if ( num > 0 ) {
        electrons = eerror/num;
        for (i=1; i <= molecule[0].numatoms; i++) {
          if ( molecule[i].atomicnumber > 12 )
            BondMtx[i][i] += electrons;
          }
        }
      }
    }

    // Electron adjustment complete. Check to see if charges match now.
    // Count electrons to determine current charge
    totalq = 0;
    for (i=1; i <= numatoms; i++) {
      totalq += element(molecule[i].atomicnumber,"valence");
      for (j=i; j <= numatoms; j++) {
        totalq -= BondMtx[i][j];
        }
      }
    deltaq = totalq - molecule[0].charge;
    if ( Math.abs(deltaq) > AlmostZero ) {
      InfoWin("ERROR: Unable to assign electrons to balance charge.\n",1);
      InfoWin("   Assigned charge = "+molecule[0].charge+"\n");
      InfoWin("Charge based on e- = "+totalq+"\n\n");
      }

  // End checkcharge routine
  return;
  }


///
///   Place valence electrons for single bonds in BondMtx.
///   Remaining electrons initially assumed to be lone pairs.
///
function sigmaBonds(BondMtx) {
  // Declare local variables
  var i, j;
  var lone;
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;
  var bonds = BondMatrix();

  // Place electrons in bonds
  for (i=1; i < numatoms; i++) {
    // Bonds assumed to be single bonds
    for (j=i+1; j <= numatoms; j++) {
      if (bonds[i][j] > 0) {
        BondMtx[i][j] = 2.0;
        BondMtx[j][i] = 2.0;
        }
      }
    }

  // Place remaining electrons in lone pairs
  for (i=1; i <= numatoms; i++) {
    lone = element(molecule[i].atomicnumber,"valence") - bonds[i][0];
    // First-row main-group elements cannot have more than 8 electrons
    if ( (molecule[i].atomicnumber<11) && (bonds[i][0] > 3) )
      lone = 0;
    if (lone > 0)
      BondMtx[i][i] = lone;
    }

  // Finished with sigmaBonds routine
  return BondMtx;
  }


///
///   Check if all main group atoms obey octet rule or not.
///   # of missing electrons stored in BondMtx[i][0]
///
function checkOctet(BondMtx) {
  // Declare local variables
  var i, j, octet;
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;

  // Find/store # of missing electrons 
  for ( i=1; i <= numatoms; i++ ) {
    octet = 0;
    BondMtx[i][0] = 0.0;
    if (element(molecule[i].atomicnumber,"block") == "p") {
      octet = 8;
      for ( j=1; j <= numatoms; j++) {
        octet -= BondMtx[i][j];
        }
    	}
    if ( octet > 0 )
      BondMtx[i][0] = octet;
    }

  // Finished with checkOctet routine
  return BondMtx;
  }


///
///   Limit number of electrons any one atom can share
///   to form pi bonds.
///
function limitShare(BondMtx) {
  // Declare local variables
  var i, j, nb;
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;
  var bonds = BondMatrix();

  for ( i=1; i <= numatoms; i++ ) {
    if ( BondMtx[i][0] > 0 ) {
      nb = 0;
      for ( j=1; j <= numatoms; j++ ) {
        if ( (bonds[i][j] > 0) && (BondMtx[j][0] > 0) ) {
          nb++;
          }
        }
      (nb > 0) ? BondMtx[i][0] = BondMtx[i][0]/nb : BondMtx[i][0] = 0;
      }
    }

  // Finished with limitShare routine
  return BondMtx;
  }


///
///   Loop over all atoms and share electrons to form pi bonds
///
function formPi(BondMtx) {
  // Declare local variables
  var i, j, nb;
  var electrons;
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;
  var bonds = BondMatrix();

  for ( i=1; i < numatoms; i++ ) {
    if ( BondMtx[i][0] > 0.0 ) {
      for (j=i+1; j <= numatoms; j++) {
        if (bonds[i][j] > 0) {
          electrons = Math.min(BondMtx[i][0],BondMtx[j][0]);
          if ( electrons > 0.0 ) {
            BondMtx[i][j] += 2.0*electrons;
            BondMtx[j][i] += 2.0*electrons;
            BondMtx[i][i] -= electrons;
            BondMtx[j][j] -= electrons;
            }
          }
        }
      }
    }

  // Simple error checking
  for (i=1; i <= numatoms; i++) {
    if ( BondMtx[i][i] < 0.0 ) {
      InfoWin("ERROR in formPi: Atom "+i+" has "+BondMtx[i][i].toFixed(3)+" lone pairs.\n");
      BondMtx[i][i] = 0.0;
      }
    }

  // Finished with formPi routine
  return BondMtx;
  }


///
///   Use lone pairs on one atom to form 'dative' bonds with neighbor(s)
///
function formDative(BondMtx) {

  // Define local variables
  var i, j, k, nb;
  var dative;
  var easy;
  var donor = new Array();
  var molecule = Mol();
  var numatoms = molecule[0].numatoms;
  var bonds = BondMatrix();

  // See if dative bonds necessary
  dative = 0;
  for ( i=1; i <= numatoms; i++ ) {
    if ( BondMtx[i][0] > 0.0 ) {
      dative = 1;
      }
    }
  if ( dative == 0 ) {
    return;
    }

  // Initialize donor array
  for ( i=1; i <= numatoms; i++ ) {
    donor[i] = 0.0;
    }

  // Loop over all atoms
  for ( i=1; i <= numatoms; i++ ) {
    // If atom has less than octet of electrons, look for donors
    if ( BondMtx[i][0] > 0.0 ) {
      // Count potential donors (atoms with lone pairs)
      nb = 0;
      for (j = 1; j <= numatoms; j++) {
        if ( bonds[i][j] > 0 )
          if ( BondMtx[j][j] > 0 )
            nb++;
        }
      // Request equal number of electrons from all neighbors
      if ( nb > 0 ) {
        BondMtx[i][0] = BondMtx[i][0]/nb;
        for (j = 1; j <= numatoms; j++) {
          if ( bonds[i][j] > 0 ) {
            if ( BondMtx[j][j] > 0 )
              donor[j] += BondMtx[i][0];
            }
          }
        }
      }
    }

  // Verify enough electrons available to form all requested dative bonds
  easy = 1;
  for ( i=1; i <= numatoms; i++ ) {
    if ( donor[i] > BondMtx[i][i] )
      easy = 0;
    }

  // If 'easy' solution exists, use it
  if ( easy > 0 ) {
    for ( i=1; i <= numatoms; i++ ) {
      if ( BondMtx[i][0] > 0.0 ) {
        for ( j = 1; j <= numatoms; j++) {
          if ( bonds[i][j] > 0 ) {
            if ( donor[j] > 0 ) {
              BondMtx[i][j] += BondMtx[i][0];
              BondMtx[j][i] += BondMtx[i][0];
              BondMtx[j][j] -= BondMtx[i][0];
              }
            }
          }
        }
      }
    }

  // Finished with formDative routine
  return BondMtx;
  }


///
///   Calculate charges on all atoms
///
function atomicCharge(BondMtx) {

  // Declare parameters
  var ALPHA = 0.5;   // Fraction of charge to mix with EN
  var MIX = 0.5;     // Reduce effects of formal charges (1=no reduction)
  var MAXSTEP = 15;
  var CONVERGED = 0.001;
  // Declare local variables
  var i, j, loop;
  var Z, mixfactor;
  var q, delta, dmax;
  var molcharge = 0.0;
  var atomEN = new Array();
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;
  var bonds = BondMatrix();

  // Calculate charge on molecule
  for (i=1; i <= numatoms; i++) {
    molcharge += element(molecule[i].atomicnumber,"valence");
    for (j=1; j <= numatoms; j++) {
      if ( i == j ) {
        molcharge -= BondMtx[i][i];
        } else {
        molcharge -= 0.5*BondMtx[i][j];
        }
      }
    }
    delta = Math.abs(molcharge - molecule[0].charge);
    if ( delta > 0.001 )
      alert("Error: Electron assignment does NOT match molecular charge.");

  // Initialize electronegativity array and set mixing factor
  mixfactor = MIX;
  // If molecule has a charge, use 100% formal charge method
  if ( Math.abs(molcharge) > 0.001 )
    mixfactor = 1.0;
  for ( i=1; i <= numatoms; i++ ) {
    Z = molecule[i].atomicnumber;
    if ( (element(Z,"block")=="d") || (element(Z,"block")=="f") )
      mixfactor = 0.0;
    q = element(Z,"EN") || 0;
    if ( q == 0 ) {
      q = 1.0;
      InfoWin("WARNING: No electronegativity defined for ");
      InfoWin(element(molecule[i].atomicnumber,"symbol")+"\n");
      }
    atomEN[i] = q;
    }

  // Inform user of method used to calculate charges
  if (mixfactor==1.0)
    InfoWin("Using 100% formal charge method to calculate charges.\n");
  if (mixfactor==0.0)
    InfoWin("Using 100% bond polarity method to calculate charges.\n");
  if (mixfactor==MIX)
    InfoWin("Using mixture of formal charge and bond polarity method to calculate charges.\n");

  // Perform iterations until charges remain constant
  loop = 0;
  dmax = 100.0;
  while ( (loop<MAXSTEP) && (dmax>CONVERGED) ) {
    loop++;
    // Calculate charges for each atom
    for ( i=1; i <= numatoms; i++ ) {
      Z = molecule[i].atomicnumber;
      q  = mixfactor * (element(Z,"valence") - BondMtx[i][i]);
      for ( j = 1; j <= numatoms; j++) {
        if ( bonds[i][j] > 0 ) {
          q += (1.0-mixfactor) * 0.5 * BondMtx[i][j];
          q -= BondMtx[i][j]*atomEN[i]/(atomEN[i]+atomEN[j]);
          }
        }
      molecule[i].charge = q;
      }
    // Calculate new electronegativity values for each atom
    dmax = 0.0;
    for ( i=1; i <= numatoms; i++ ) {
      q = atomEN[i];
      atomEN[i]  = element(molecule[i].atomicnumber,"EN") || 1.0;
      atomEN[i] += ALPHA*molecule[i].charge;
      delta = Math.abs(q - atomEN[i]);
      if ( delta > dmax )
        dmax = delta;
      }
    }

  // Finished with atomicCharge routine
  return BondMtx;
  }


///
///  Calculate molecular dipole
///  Assumes point charges on nuclear centers, with charge
///  vector originating from origin.
///
function dipoleMoment() {

  // Declare local variables
  var i;
  var dx, dy, dz, dipole;
  var DEBYE = 4.8032;
  var molecule = Mol();
  var numatoms=molecule[0].numatoms;

  // Calculate x,y,z components of dipole vector
  dx = 0.0;
  dy = 0.0;
  dz = 0.0;
  for ( i=1; i <= numatoms; i++ ) {
    dx += molecule[i].x * molecule[i].charge;
    dy += molecule[i].y * molecule[i].charge;
    dz += molecule[i].z * molecule[i].charge;
    }

  // Calculate length of dipole vector and scale to Debye units
  dipole = DEBYE * Math.sqrt(dx*dx+dy*dy+dz*dz);

  // Finished with dipoleMoment routine
  return dipole;
  }







//
// -------------------- INPUT & OUTPUT --------------------
//

///
///   Routine to get filename of local input file from user
///
function MyFileReader(evt) {
  var validExtension;
  var localfile = evt.target.files[0];
  // buttonColor("LabelButton",0);
  // Call routine to read and process data
  if (localfile) {
      var fr = new FileReader();
      fr.onload = function(fh) {
        validExtension = 0;
        var ext = extension(localfile.name);
        InfoWin("\nFilename        "+localfile.name+"\n"+"\n");
        // Read contents and split data into lines
        var contents = fh.target.result;
        contents = contents.replace(/\r\n/g, "\n");
        contents = contents.replace(/\r/g, "\n");
        var lines = contents.split("\n");
        if ( ext == "xyz" ) {
          validExtension = 1;
          readXYZfile(lines);
          centerMolecule();
          drawMolecule();
          drawAxis();
          }
        if ( ext == "mol" ) {
          validExtension = 1;
          readMOLfile(localfile,lines);
          centerMolecule();
          drawMolecule();
          drawAxis();
          }
        if ( ext == "sdf" ) {
          validExtension = 1;
          readSDFfile(localfile,lines);
          centerMolecule();
          drawMolecule();
          drawAxis();
          }
        if ( ext == "cif" ) {
            validExtension = 1;
            readCIFfile(lines);
            centerMolecule();
            drawMolecule();
            drawCube();
            drawAxis();
          }
        if ( ext == "inp" ) {
          validExtension = 1;
          readINPfile(localfile,lines);
          centerMolecule();
          drawMolecule();
          drawAxis();
          }
        if ( validExtension == 0 ) {
          InfoWin("--- ERROR: Invalid file type for "+localfile.name+". ---",1);
          return;
          }

        
        }
      fr.readAsText(localfile);
    } else {
      alert("Failed to load file");
    }

    // deal with loading the same file
    var molfile = document.getElementById("molfile");

    molfile.outerHTML = molfile.outerHTML;

    // Handler for loading files. After file selected, calls "MyFileReader"
    if ( molfile ) {
    // Verify browser supports HTML5 FileReader
        $("#molfile").change(MyFileReader);
    }
}

///
///   Routine to load examples structures
///
function loadExample(index) {
  var localfile;
  switch (index) {
    case 1: 
        localfile = exam1;
        break;
    case 2:
        localfile = exam2;
        break;
    case 3:
        localfile = exam3;
        break;
    case 4:
        localfile = exam4;
        break;
  }
  var validExtension;
  // buttonColor("LabelButton",0);
  // Call routine to read and process data
  if (localfile) {
      var fr = new FileReader();
      fr.onload = function(fh) {
        validExtension = 0;
        var ext = extension(localfile.name);
        InfoWin("\nFilename        "+localfile.name+"\n"+"\n");
        // Read contents and split data into lines
        var contents = fh.target.result;
        contents = contents.replace(/\r\n/g, "\n");
        contents = contents.replace(/\r/g, "\n");
        var lines = contents.split("\n");
        if ( ext == "xyz" ) {
          validExtension = 1;
          readXYZfile(lines);
          centerMolecule();
          drawMolecule();
          drawAxis();
          }
        if ( ext == "mol" ) {
          validExtension = 1;
          readMOLfile(localfile,lines);
          centerMolecule();
          drawMolecule();
          drawAxis();
          }
        if ( ext == "sdf" ) {
          validExtension = 1;
          readSDFfile(localfile,lines);
          centerMolecule();
          drawMolecule();
          drawAxis();
          }
        if ( ext == "cif" ) {
            validExtension = 1;
            readCIFfile(lines);
            centerMolecule();
            drawMolecule();
            drawCube();
            drawAxis();
          }
        if ( ext == "inp" ) {
          validExtension = 1;
          readINPfile(localfile,lines);
          centerMolecule();
          drawMolecule();
          drawAxis();
          }
        if ( validExtension == 0 ) {
          InfoWin("--- ERROR: Invalid file type for "+localfile.name+". ---",1);
          return;
          }

        
        }
      fr.readAsText(localfile);
    } else {
      alert("Failed to load file");
    }

    // deal with loading the same file
    var molfile = document.getElementById("molfile");

    molfile.outerHTML = molfile.outerHTML;

    // Handler for loading files. After file selected, calls "MyFileReader"
    if ( molfile ) {
    // Verify browser supports HTML5 FileReader
        $("#molfile").change(MyFileReader);
    }
}

//#   function readCIFfile(lines)
//#
//#   Read CIF .cif file
//#
//#   lines:   Array holding content of .cif file as lines
//#
//#   Data stored in molecule array and bond matrix
//#
function readCIFfile(lines) { 
  delMolecule();
  delCrystal();
  delDiv();

  var molecule = Mol();    
  var show = showstyle();
  molecule[0].type = "crystal";
  molecule[0].showbonds = 1;
  var cys = OriCrystal();

  //Regular expression
  var whitespaceRegex = /\s+/g;
  var whitespaceAndParenthesisRegex = /\(|\)|\s+/g;
  var whitespaceAndQuoteRegex = /\'|\s+/g;

  var filter = function(s) {
    return s.length !== 0;
  };

  //Read the content of CIF file
  var line;
  var cell_length_a,cell_length_b,cell_length_c;
  var cell_angle_alpha,cell_angle_beta,cell_angle_gamma;
  var transformLoop;
  var atomLoop;
  var bondLoop;
  var space_group;
  var xyzindex=-1;
  var atomnum_limit = 2000;
  InfoWin("Lattice parameters:"+"\n\n");
  for(var ii=0;ii<lines.length;ii++){
    if(lines[ii].indexOf("_cell_length_a")!==-1){
      line=lines[ii].split(whitespaceAndParenthesisRegex);
      cell_length_a = line[1];  
      InfoWin("cell_length_a              "+cell_length_a+"\n");
    }
    if(lines[ii].indexOf("_cell_length_b")!==-1){
      line=lines[ii].split(whitespaceAndParenthesisRegex);
      cell_length_b = line[1];
      InfoWin("cell_length_b              "+cell_length_b+"\n");
    }
    if(lines[ii].indexOf("_cell_length_c")!==-1){
      line=lines[ii].split(whitespaceAndParenthesisRegex);
      cell_length_c = line[1];
      InfoWin("cell_length_c              "+cell_length_c+"\n");
    }
    if(lines[ii].indexOf("_cell_angle_alpha")!==-1){
      line=lines[ii].split(whitespaceAndParenthesisRegex);
      cell_angle_alpha = Math.PI*line[1]/180;
      cell_angle_alpha = cell_angle_alpha.toFixed(5);
      InfoWin("cell_angle_alpha         "+cell_angle_alpha+"\n");
    }
    if(lines[ii].indexOf("_cell_angle_beta")!==-1){
      line=lines[ii].split(whitespaceAndParenthesisRegex);
      cell_angle_beta = Math.PI*line[1]/180;
      cell_angle_beta = cell_angle_beta.toFixed(5);
      InfoWin("cell_angle_beta            "+cell_angle_beta+"\n");
    }
    if(lines[ii].indexOf("_cell_angle_gamma")!==-1){
      line=lines[ii].split(whitespaceAndParenthesisRegex);
      cell_angle_gamma = Math.PI*line[1]/180;
      cell_angle_gamma = cell_angle_gamma.toFixed(5);
      InfoWin("cell_angle_gamma      "+cell_angle_gamma+"\n");
    }
    if(lines[ii].indexOf("_symmetry_space_group_name_H-M")!==-1){
      line=lines[ii].split(whitespaceAndQuoteRegex);
      var k=0;
      var str = "";
      while(k<line.length){
        if(line[k]==""){
          var  j=k+1;   
          while(j<line.length && line[j]!==""){
            str=str+line[j]+" ";
            j++;   
          }
          break;
        }
        k++;
      }
      space_group = str;
      InfoWin("Space group name     "+space_group+"\n");
    }
    else if(lines[ii].indexOf("loop_")!==-1){
      var loop = {
        keys : [],
        values : []
      };
      var j=ii+1;
      var pushingLines = false;
      while(lines[j]!==undefined &&lines[j].length>1&& lines[j].indexOf("loop_")==-1 &&lines[j].indexOf("#End")==-1&&lines[j].indexOf("#END")==-1){
        if (lines[j].indexOf("_")===0) {  
          if (pushingLines) {
            break;
          } 
          loop.keys.push(lines[j]);         
        } else {
          pushingLines = true;
          loop.values.push(lines[j]);
        }
        j++;
      }
      for(var jj=0;jj<loop.keys.length;jj++){
        if(loop.keys[jj].indexOf("_symmetry_equiv_pos_as_xyz")!==-1||loop.keys[jj].indexOf("_space_group_symop_operation_xyz")!==-1) {
          transformLoop = loop;
          for(var i=0;i<transformLoop.values.length;i++){
            var line = transformLoop.values[i].split(whitespaceAndParenthesisRegex);
            xyzindex=jj;
            var content = line[xyzindex].split(',');          
          }
        }
        if (loop.keys[jj].indexOf('_atom_site_label') === 0) {
          atomLoop = loop;break;
        }
        else if (loop.keys[jj].indexOf('_geom_bond_atom_site_label_1') !== -1) {
          bondLoop = loop;break;
        }
      }
      ii=j-1;
    }
  }

  cys[0].aLength=cell_length_a;
  cys[0].bLength=cell_length_b;
  cys[0].cLength=cell_length_c;
  cys[0].alpha=cell_angle_alpha;
  cys[0].beta=cell_angle_beta;
  cys[0].gamma=cell_angle_gamma;
  cys[0].space_group=space_group;
  
  var alen= cys[0].aLength;
  var blen= cys[0].bLength;
  var clen= cys[0].cLength;
  var alpha= cys[0].alpha;
  var beta= cys[0].beta;
  var gamma= cys[0].gamma;
  var d = (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma);
  
  //Set the eight vertex coordinates of the cube
  var points = cys[0].points; 
  for(var i=0;i<8;i++){
    var x = points[i][0];
    var y = points[i][1];
    var z = points[i][2];      
    points[i][0] = x*alen+y*blen*Math.cos(gamma)+z*clen*Math.cos(beta);
    points[i][1] = y*blen*Math.sin(gamma)+z*clen*d;
    points[i][2] = z*clen*Math.sqrt(1 - Math.pow(Math.cos(beta), 2)-d*d);
  }

  //Test if # of atoms exceed limit
  if (atomLoop.values.length > atomnum_limit){
    InfoWin("Error: Numbers Of Atoms Exceed Limit");
    return;
  }

  //Get atomic coordinate information
  if (atomLoop) {
    var labelIndex = -1,altlabelIndex = -1, xIndex = -1, yIndex = -1, zIndex = -1;
    var keyslen= atomLoop.keys.length;
    var isOrganic = false;
    for(var i =0;i<keyslen;i++){
      if(atomLoop.keys[i].indexOf("_atom_site_type_symbol")!==-1){
        labelIndex=i;
      }
      if(atomLoop.keys[i].indexOf("_atom_site_label")!==-1){
        altlabelIndex=i;
      }
      if(atomLoop.keys[i].indexOf("_atom_site_fract_x")!==-1){
        xIndex=i;
      }
      if(atomLoop.keys[i].indexOf("_atom_site_fract_y")!==-1){
        yIndex=i;
      }
      if(atomLoop.keys[i].indexOf("_atom_site_fract_z")!==-1){
        zIndex=i;
      }
    }
    if(labelIndex ==-1){
      labelIndex = altlabelIndex;
    }
    //Save the atomic information in the crystal
    var skiprows = 0;
    for(var index=0;index<atomLoop.values.length;index++){
      var i = index - skiprows;
      var content = atomLoop.values[index].split(whitespaceRegex);
      var xx=0;
      var yy=0;
      var zz=0;
      if (content[0].includes("*")){
        skiprows++; continue;
      }
      if(content[xIndex].indexOf('(')!==-1){
        xx=content[xIndex].substring(0,content[xIndex].indexOf('('));
      }else{
        xx=content[xIndex];
      }
      if(content[yIndex].indexOf('(')!==-1){
        yy=content[yIndex].substring(0,content[yIndex].indexOf('('));
      }else{
        yy=content[yIndex];
      }
      if(content[zIndex].indexOf('(')!==-1){
        zz=content[zIndex].substring(0,content[zIndex].indexOf('('));
      }else{
        zz=content[zIndex];
      }

      var symbol=content[labelIndex];   
      if(symbol.indexOf('+')!==-1||symbol.indexOf('-')!==-1){
        var t_index;
        if(symbol.indexOf('+')!==-1){
          t_index=symbol.indexOf('+');
        }else{
          t_index=symbol.indexOf('-');
        }
        symbol=symbol.substring(0,t_index-1);
      }
      var A = lookupSymbol(symbol);
      if (A === 6) isOrganic = true;
      var cysid = i+1;
      cys[0].numcys++;
      cys[cysid] = new cryAtomObject();
      cys[cysid].A=A;
      cys[cysid].x=xx;
      cys[cysid].y=yy;
      cys[cysid].z=zz;
      cys[cysid].cysid=cysid; 
    }
    //Save the space group transformation information
    if(transformLoop!==undefined){
        // console.log("transformloop:",xyzindex);
      for(var j=0;j<transformLoop.values.length;j++){
        var str = transformLoop.values[j].replace(/[\r\n]/g,"").trim();
        // console.log("str:", str);
        // var li = transformLoop.values[j].split(whitespaceAndParenthesisRegex);
        var li = str.split(whitespaceAndParenthesisRegex);
        var str1="";
        var str2="";
        var str3="";
        // console.log("li:", li);
        if(str.indexOf('\'')!==-1){
          str1=li[xyzindex].replace('\'',"").replace(',',"");
          str2=li[xyzindex+1].replace('\'',"").replace(',',"");
          str3=li[xyzindex+2].replace('\'',"").replace(',',"");        
        }else{
          str = li[xyzindex];
          str=str.split(",");
          // console.log(str);
          str1=str[0];
          str2=str[1];
          str3=str[2];
        }
        var transform = [];
        transform.push(str1);
        transform.push(str2);
        transform.push(str3);
        // console.log("transform:", transform);
        cys[0].transformLoop.push(transform);
      }
    }
    isOrganic ? mode_asymmetric() : mode_incell();
  }
  createbonds(); 
  divideMol();
  formula();
}

//#   function readXYZfile(lines)
//#
//#   Read xyz file - Format compatible with openbabel
//#
//#   lines:    Array holding content of .xyz file as lines
//#
//#   Data stored in molecule array and bond matrix
//#
function readXYZfile(lines) {
  // Declare local variables
  var i, j, numatoms;
  var A, x, y, z;
  var dx, dy, dz, r;
  var bond;
  var mystr;
  var current = new Array();
  var Qtitle = new Array();
  var molecule = Mol();
  var atomnum_limit = 2000;

  // Reset molecule object and contents
  delMolecule();

  // Read data
  InfoWin("",1);
  numatoms = parseInt(lines[0].replace(/\s+/,""));
  if ( isNaN(numatoms) ) {
    InfoWin("*** ERROR Reading XYZ file. ***\n");
    return;
    }
  if (numatoms > atomnum_limit){
    InfoWin("Error: Numbers Of Atoms Exceed Limit");
    return;
  }
  Qtitle = lines[1];
  Qtitle = Qtitle.replace(/\s+$/,"");
  InfoWin(Qtitle+"\n");
  InfoWin("Looking for "+numatoms+" atoms.\n");

  // Read coordinates
  for (i=2; i < (numatoms+2); i++) {
    current = lines[i].replace(/\s+/g," ").replace(/^\s+/,"").split(' ');
    A = lookupSymbol(current[0]);
    if ( (A<1) || (A>118) ) {
      InfoWin("*** ERROR Reading XYZ file. ***\n");
      return;
      }
    x = parseFloat(current[1]);
    y = parseFloat(current[2]);
    z = parseFloat(current[3]);
    addAtom(A, x, y, z, 0);
    InfoWin(" "+current[0]+"("+A+")  "+x+", "+y+", "+z+"\n");
    }

  // Create bonds
  for (i=1; i < numatoms; i++) {
    for (j=i+1; j <= numatoms; j++) {
      bond = 1.2 * (element(molecule[i].atomicnumber,"radius") + element(molecule[j].atomicnumber,"radius"));
      dx = molecule[i].x - molecule[j].x;
      dy = molecule[i].y - molecule[j].y;
      dz = molecule[i].z - molecule[j].z;
      r = Math.sqrt(dx*dx+dy*dy+dz*dz);
      if (r <= bond)
        addBond(i,j,"single");
      }
    }

  // Finished with readXYZfile routine
  formula();
  InfoWin("Finished reading XYZ input file.\n");
  }


//#   function readMOLfile(molfile,lines)
//#
//#   Read MDL .mol file (V2000 format)
//#
//#   molfile:  name of .mol file
//#   lines:    Array holding content of .mol file
//#
//#   Data stored in molecule array and bond matrix
//#
function readMOLfile(molfile,lines) {
  // Declare local variables
  var i, j;
  var x, y, z;
  var bond1, bond2;
  var A, symbol;
  var Qtitle = new Array();
  var molecule = Mol();
  var atomnum_limit = 2000;

  // Write file information to information window
  var molname = escape(molfile.name);
  InfoWin("File Name = "+molname,1);
  InfoWin("\nFile Type = "+molfile.type);
  InfoWin("\nFile Size = "+molfile.size);

  // Reset molecule object and contents
  delMolecule();

  // Read data
  Qtitle = lines[0];
  Qtitle = Qtitle.replace(/\s+$/,"");
  var molAtoms = parseFloat(lines[3].substr(0,3));
  var molBonds = parseFloat(lines[3].substr(3,3));
  InfoWin("\n\n"+Qtitle);
  InfoWin("\n"+molAtoms+" atoms and "+molBonds+" bonds.");

  if (molAtoms > atomnum_limit){
    InfoWin("Error: Numbers Of Atoms Exceed Limit.");
    return;
  }
  // Read coordinates
  j = molAtoms+4;
  for (i=4; i < j; i++) {
    x = parseFloat(lines[i].substr(0,10));
    y = parseFloat(lines[i].substr(10,10));
    z = parseFloat(lines[i].substr(20,10));
    symbol = lines[i].substr(31,3);
    symbol = symbol.replace(/\s+/,"");
    A = lookupSymbol(symbol);
    InfoWin("\n   "+symbol+"("+A+")  "+x+", "+y+", "+z);
    addAtom(A, x, y, z, 0);
    }
  j = 4 + molAtoms + molBonds;
  for (i = 4+molAtoms; i < j; i++) {
    bond1 = parseFloat(lines[i].substr(0,3));
    bond2 = parseFloat(lines[i].substr(3,3));
    bond3 = parseFloat(lines[i].substr(6,3));
    InfoWin("\n   Bond from "+bond1+" to "+bond2);
    var bondtype = "single";
      if(bond3 == 2){
        bondtype = "double";
      }
      if(bond3 == 3){
        bondtype = "triple";
      }
    addBond(bond1,bond2,bondtype);
    }
  // Finished
  formula();
  }

//#   function readPDBfile(lines)
//#
//#   Read PDB .pdb file
//#
//#   lines:    Array holding content of .sdf file
//#
//#   Data stored in molecule array and bond matrix
//#
function readPDBfile(lines) {
  // Declare local variables
  var i, j;
  var x, y, z;
  var bond1, bond2;
  var A, symbol, line;
  var Qtitle = new Array();
  var molecule = Mol();
  var atomnum_limit = 2000;

  // Write file information to information window
  var molname = lines[0].split(/\s+/)[1];

  // Reset molecule object and contents
  delMolecule();

  // Read data
  for(i = 2; i < lines.length; i++) {
    if(lines[i].substring(0, 6) == "HETATM" || lines[i].substring(0, 4) == "ATOM") {
      symbol = lines[i].substring(12, 16);
      symbol = symbol.replace(/\s+/, "");
      A = lookupSymbol(symbol.trim());
      x = parseFloat(lines[i].substring(30, 38));
      y = parseFloat(lines[i].substring(38, 46));
      z = parseFloat(lines[i].substring(46, 54));
      addAtom(A, x, y, z, 0);
    }
    if(lines[i].substring(0, 6) == "CONECT") {
      bond1 = parseFloat(lines[i].substr(6, 5));
      for(j = 11; j < lines[i].length; j = j + 5) {
        var bonds = BondMatrix();
        bond2 = parseFloat(lines[i].substr(j, 5));
        bonds[bond1][0]++;
        bonds[bond1][bond2] = 1;
      }
    }
  }
  
  formula();
 } 

//#   function readSDFfile(molfile,lines)
//#
//#   Read SDF .sdf file
//#
//#   sdffile:  name of .sdf file
//#   lines:    Array holding content of .sdf file
//#
//#   Data stored in molecule array and bond matrix
//#
function readSDFfile(sdffile,lines) {
  // Declare local variables
  var i, j;
  var x, y, z;
  var bond1, bond2;
  var A, symbol;
  var Qtitle = new Array();
  var molecule = Mol();
  var atomnum_limit = 2000;

  // Write file information to information window
  var molname = escape(sdffile.name);
  InfoWin("File Name = "+sdfname,1);
  InfoWin("\nFile Type = "+sdffile.type);
  InfoWin("\nFile Size = "+sdffile.size);

  // Reset molecule object and contents
  delMolecule();

  // Read data
  Qtitle = lines[0];
  Qtitle = Qtitle.replace(/\s+$/,"");
  var molAtoms = parseFloat(lines[3].substr(0,3));
  var molBonds = parseFloat(lines[3].substr(3,3));
  InfoWin("\n\n"+Qtitle);
  InfoWin("\n"+molAtoms+" atoms and "+molBonds+" bonds.");

  if (molAtoms > atomnum_limit){
    InfoWin("Error: Numbers Of Atoms Exceed Limit.");
    return;
  }
  // Read coordinates
  j = molAtoms+4;
  for (i=4; i < j; i++) {
    x = parseFloat(lines[i].substr(0,10));
    y = parseFloat(lines[i].substr(10,10));
    z = parseFloat(lines[i].substr(20,10));
    symbol = lines[i].substr(31,3);
    symbol = symbol.replace(/\s+/,"");
    A = lookupSymbol(symbol);
    InfoWin("\n   "+symbol+"("+A+")  "+x+", "+y+", "+z);
    addAtom(A, x, y, z, 0);
    }
  j = 4 + molAtoms + molBonds;
  for (i = 4+molAtoms; i < j; i++) {
    bond1 = parseFloat(lines[i].substr(0,3));
    bond2 = parseFloat(lines[i].substr(3,3));
    bond3 = parseFloat(lines[i].substr(6,3));
    InfoWin("\n   Bond from "+bond1+" to "+bond2);
    var bondtype = "single";
      if(bond3==2){
        bondtype = "double";
      }
      if(bond3==3){
        bondtype = "triple";
      }
    addBond(bond1,bond2,bondtype);
    }
  // Finished
  formula();
  } 

//#   function readINPfile(lines)
//#
//#   Read GAMESS input file contain full set of x,y,z coordinates
//#
//#   lines:    Array holding content of .inp file
//#
function readINPfile(lines) {
  // Declare local variables
  var i, j;
  var x, y, z;
  var bond1, bond2;
  var A, symbol;
  var numatoms;
  var Qtitle = new Array();
  var molecule = Mol();
  var atomnum_limit = 2000;

  // Inform user that file being read
  InfoWin("--- Reading Gamess input file ---\n",1);

  // Reset molecule object and contents
  delMolecule();

  // Read title from file
  i = 0;
  lines[i].toLowerCase();
  while ( lines[i].toLowerCase().indexOf('$data') < 0 ) {
    i++;
    }
  i++;
  Qtitle = lines[i];
  Qtitle = Qtitle.replace(/\s+$/,"");
  InfoWin("\n\nTitle: [" + Qtitle + "]\n");

  // Advance to start of coordinates
  i++;
  if ( lines[i].toLowerCase().indexOf('c1') < 0 )
    i++;

  // Read coordinates
  i++;
  while ( lines[i].toLowerCase().indexOf('$end') < 0 ) {
    InfoWin("   Line = [" + lines[i] + "]\n");
    current = lines[i].replace(/\s+/g," ").replace(/^\s+/,"").split(' ');
    A = parseInt(current[1]);
    x = parseFloat(current[2]);
    y = parseFloat(current[3]);
    z = parseFloat(current[4]);
    addAtom(A, x, y, z, 0);
    i++;
    }
  
  if (molecule[0].numatoms > atomnum_limit){
    InfoWin("Error: Numbers Of Atoms Exceed Limit.");
    return;
  }
  // Calculate bonds
  for (i=1; i < molecule[0].numatoms; i++) {
    ra = element(molecule[i].atomicnumber,"radius");
    for (j=i+1; j <= molecule[0].numatoms; j++) {
      rb = element(molecule[i].atomicnumber,"radius");
      r = 0.9*distance(molecule, i, j);
      if ( r <= (ra+rb) )
        addBond(i, j,"single");
      }
    }

  // Finished with readINPfile routine
  InfoWin("Finished reading input file.\n");
  formula();
  return;
  }

//#   function export_file(filetype)
//#
//#   Define public routine to export file in given format
//#
//#   Parameter:
//#     filetype      - (.mol   .sdf    .cif    .xyz)
//# 
function export_file(filetype){
  if(filetype=="MOL"){
    export_mol("download");
  }else if(filetype=="SDF"){
    export_sdf();
  }else if(filetype=="CIF"){
    export_cif("download");
  }else if(filetype=="XYZ"){
    export_xyz();
  }
}
///
///export mol file
///
function export_mol(mode){
  var molecule = Mol();
  var line1 = "Molecule Name" + "\r\n";
  var line2 = "3DStructGen     3D     0" + "\r\n";
  var line3 = "\r\n";
  var lines_atoms = "";
  //generate atoms
  for(var i = 1; i <= molecule[0].numatoms; i++){
    for(var j = 0; j < (10 - molecule[i].originalx.toFixed(4).length); j++){
      lines_atoms += " ";
    }
    lines_atoms +=  molecule[i].originalx.toFixed(4);
    for(var j = 0; j < (10 - molecule[i].originaly.toFixed(4).length); j++){
      lines_atoms += " ";
    }
    lines_atoms +=  molecule[i].originaly.toFixed(4);
    for(var j = 0; j < (10 - molecule[i].originalz.toFixed(4).length); j++){
      lines_atoms += " ";
    }
    lines_atoms +=  molecule[i].originalz.toFixed(4);
    lines_atoms += "   " + element(molecule[i].atomicnumber,"symbol")
    + "  0  0  0  0  0  0  0  0  0  0" + "\r\n";
  }
  var lines_bonds = "";
  var bonds = BondMatrix();
  var numbonds = 0;
  //generate bonds
  for(var i = 1; i < molecule[0].numatoms; i++){
    for(var j = i + 1; j <= molecule[0].numatoms; j++){
      if(bonds[i][j] !== 0){
        for(var t = 0;t < (3-i.toString().length); t++){
          lines_bonds += " ";
        }
        lines_bonds += i ; 
        for(var t = 0;t < (3-j.toString().length); t++){
          lines_bonds += " ";
        }
        lines_bonds += j; 
        for(var t = 0;t < (3-bonds[i][j].toString().length); t++){
          lines_bonds += " ";
        }
        lines_bonds += bonds[i][j];
        lines_bonds += "  0  0  0" + "\r\n" ;
        numbonds++;
      }
    }
  }
  //line4
  var line4 = "";
  for(var i = 0; i < (3 - molecule[0].numatoms.toString().length);i ++){
    line4 += " ";
  }
  line4 += molecule[0].numatoms;
  for(var i = 0; i < (3 - numbonds.toString().length);i ++){
    line4 += " ";
  }
  line4 += numbonds;
  line4 += "  0  0  0  0  0  0  0  0999 V2000" + "\r\n";
  //M  END
  var endline = "M  END";
  var textcontent = line1 + line2 + line3 + line4 + lines_atoms + lines_bonds + endline;
  if(mode == "download") {
    var molfilename = document.getElementById("file_name").value + ".mol";
    download(molfilename,textcontent);
  } else if(mode == "content") {
    return textcontent;
  }
  
}

///
///export xyz file
///
function export_xyz(){
  var molecule = Mol();
  var line1 = molecule[0].numatoms + "\r\n";
  var line2 = "(xyz format) generated by 3DStructGen." + "\r\n";
  var lines = "";
  for(var i = 1;i <= molecule[0].numatoms;i++){
    var line = "";
    line += element(molecule[i].atomicnumber,"symbol");
    for(var j = 0;j < (4-element(molecule[i].atomicnumber,"symbol").length);j++){
      line += " ";
    }
    for(var j = 0;j < (13-molecule[i].originalx.toFixed(4).length); j++){
      line += " ";
    }
    line += molecule[i].originalx.toFixed(4);
    for(var j = 0;j < (13-molecule[i].originaly.toFixed(4).length); j++){
      line += " ";
    }
    line += molecule[i].originaly.toFixed(4);
    for(var j = 0;j < (13-molecule[i].originalz.toFixed(4).length); j++){
      line += " ";
    }
    line += molecule[i].originalz.toFixed(4);
    lines += line + "\r\n";
  }
  var textcontent = line1 + line2 + lines;
  var xyzfilename = document.getElementById("file_name").value + ".xyz";
  download(xyzfilename,textcontent);
}

///
///export cif file
///
function export_cif(mode){
  var cys = OriCrystal();
  var space_group = "_symmetry_space_group_name_H-M" + "   '" + cys[0].space_group + "'"+"\r\n";
  var alpha = "_cell_angle_alpha                " + Math.round(cys[0].alpha/Math.PI*180) + "\r\n";
  var beta = "_cell_angle_beta                " + Math.round(cys[0].beta/Math.PI*180) + "\r\n";
  var gamma = "_cell_angle_gamma                " + Math.round(cys[0].gamma/Math.PI*180) + "\r\n";
  var a = "_cell_length_a                   " + cys[0].aLength + "\r\n";
  var b = "_cell_length_b                   " + cys[0].bLength + "\r\n";
  var c = "_cell_length_c                   " + cys[0].cLength + "\r\n";
  var fline = "loop_"+"\r\n";
  fline += "_symmetry_equiv_pos_as_xyz"+"\r\n";
  var transformloop = cys[0].transformLoop;
  var lines = "";
  var line = "";
  // alert(transformloop.length);
  for(var i = 0;i<transformloop.length; i++){
    line=transformloop[i][0]+","+transformloop[i][1]+","+transformloop[i][2]+"\r\n";
    lines+=line;
  }
  lines+="loop_"+"\r\n"+"_atom_site_label"+"\r\n"+"_atom_site_fract_x"+"\r\n"
  +"_atom_site_fract_y"+"\r\n"+"_atom_site_fract_z"+"\r\n";
  for( var i = 1;i <= cys[0].numcys; i++){
    lines+=element(cys[i].A,"symbol")+" "+cys[i].x+" "+cys[i].y+" "+cys[i].z+"\r\n"; 
  }
  var textcontent = space_group + alpha + beta+gamma+a+b+c+fline+lines;
  if (mode == "download"){
  var ciffilename = document.getElementById("file_name").value + ".cif";
  download(ciffilename,textcontent);
  } else if (mode == "content"){
    return textcontent;
  }
}

///
///export sdf file
///
function export_sdf(){
  var molecule = Mol();
  var line1 = "Molecule Name" + "\r\n";
  var line2 = "3DStructGen     3D     0" + "\r\n";
  var line3 = "\r\n";
  var lines_atoms = "";
  //generate atoms
  for(var i = 1; i <= molecule[0].numatoms; i++){
    for(var j = 0; j < (10 - molecule[i].originalx.toFixed(4).length); j++){
      lines_atoms += " ";
    }
    lines_atoms +=  molecule[i].originalx.toFixed(4);
    for(var j = 0; j < (10 - molecule[i].originaly.toFixed(4).length); j++){
      lines_atoms += " ";
    }
    lines_atoms +=  molecule[i].originaly.toFixed(4);
    for(var j = 0; j < (10 - molecule[i].originalz.toFixed(4).length); j++){
      lines_atoms += " ";
    }
    lines_atoms +=  molecule[i].originalz.toFixed(4);
    lines_atoms += " " + element(molecule[i].atomicnumber,"symbol")
    + "   0  0  0  0  0  0  0  0  0  0  0  0" + "\r\n";
  }
  var lines_bonds = "";
  var bonds = BondMatrix();
  var numbonds = 0;
  //generate bonds
  for(var i = 1; i < molecule[0].numatoms; i++){
    for(var j = i + 1; j <= molecule[0].numatoms; j++){
      if(bonds[i][j] !== 0){
        for(var t = 0;t < (3-i.toString().length); t++){
          lines_bonds += " ";
        }
        lines_bonds += i ; 
        for(var t = 0;t < (3-j.toString().length); t++){
          lines_bonds += " ";
        }
        lines_bonds += j; 
        for(var t = 0;t < (3-bonds[i][j].toString().length); t++){
          lines_bonds += " ";
        }
        lines_bonds += bonds[i][j];
        lines_bonds += "  0  0  0  0" + "\r\n" ;
        numbonds++;
      }
    }
  }
  //line4
  var line4 = "";
  for(var i = 0; i < (3 - molecule[0].numatoms.toString().length);i ++){
    line4 += " ";
  }
  line4 += molecule[0].numatoms;
  for(var i = 0; i < (3 - numbonds.toString().length);i ++){
    line4 += " ";
  }
  line4 += numbonds;
  line4 += "  0  0  0  0  0  0  0  0999 V2000" + "\r\n";
  //M  END
  var endline = "M  END";
  var textcontent = line1 + line2 + line3 + line4 + lines_atoms + lines_bonds + endline;
  var molfilename = document.getElementById("file_name").value + ".sdf";
  download(molfilename,textcontent);
}

///
/// Generate the file contented with text and download to local
///
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
 
  element.style.display = 'none';
  document.body.appendChild(element);
 
  element.click();
 
  document.body.removeChild(element);
}

///
/// save image
///
function saveImage(){
  // alert(type);
  var mycanvas = activeWin("");
  var oCanvas = document.getElementById(mycanvas);
  if ( ! oCanvas )
    return;
  var oCtx = oCanvas.getContext('2d');
  downLoadPictrue(saveAsPNG(oCanvas));
  // save png
function saveAsPNG(canvas) {
    return canvas.toDataURL("image/png");
}
 
// save jpeg
function saveAsJPG(canvas) {
    return canvas.toDataURL("image/jpeg");
}
 
// save bmp
function saveAsBMP(canvas) {
    return canvas.toDataURL("image/bmp");
}
 
function downLoadPictrue(url){
    var oA = document.createElement("a");
    oA.download = 'canvasImage';// set the filename
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // remove the element
}
}

///
///   Routine to determine extension for filename
///
function extension(myfilename) {
  var extension = myfilename.substring(myfilename.lastIndexOf('.')+1);
  return extension.toLowerCase();
  }


//#   function showgallery(title,base,List,Desc,size)
//#
//#   Routine to display multiple files stored on the web server.
//#
//#   Parameters:
//#      title: Title to display before gallery
//#             (If title = "delete", clear gallery)
//#      base:  Path to directory (relative to web root) containing images 
//#      List:  Array containing a list of filenames (including extensions)
//#      Desc:  Array containing descriptions for each file
//#      size:  integer width (in px) for each frame
//#
function showgallery(title,base,List,Desc,size) {

  // Declare local variables
  var i, start, pos;
  var html;
  var frame, canvas;
  var framestr, canvasstr;
  var csize;

  // If title = "delete", clear gallery
  if ( title == "delete" ) {
    if ( typeof showgallery.num != "undefined" ) {
      showgallery.num = 0;
      delete showgallery.list;
      }
    return;
    }

  // If no gallery division present, exit
  if ( ! document.getElementById("gallery") ) {
    alert("Warning: showgallery called, but no <div id=\"gallery\"></div> exists on html page.");
    return;
    }

  // Set up storage to keep track of all files to load in all galleries
  if ( typeof showgallery.list === "undefined" ) {
    showgallery.num = 0;
    showgallery.list = [];
    }
  start = showgallery.num;

  // Define base names to use for each frame and canvas 
  canvas = "gallerycanvas";
  frame = "galleryframe";

  // Add files to list for display in all galleries
  pos = start;
  for (i=0; i < List.length; i++) {
    showgallery.list[pos] = base + List[i];
    showgallery.num++;
    pos++;
    }

  // Set dimension for canvas
  csize = "width=\"" + size + "\" height=\"" + size + "\"></canvas>";

  // Create content and add to web page
  html = "";
  if ( title ) {
    html = "<h3>" + title + "</h3>\n";
    }
  pos = start;
  for (i=0; i < List.length; i++) {
    canvasstr = canvas + pos;
    framestr  = frame + pos;
    html += "<div class=\"galleryframe\" id=\"" + framestr + "\">";
    html += "<canvas id=\"" + canvasstr + "\" " + csize + "\n";
    html += "<p style=\"text-align: center;\">";
    html += Desc[i];
    html += "</p></div>\n";
    pos++;
    }
  html += "<p class=\"clear\">&nbsp;</p>\n\n";
  document.getElementById("gallery").innerHTML += html;

  // If debug window exists, write output to this window
  if ( document.getElementById("debug") ) {
    document.getElementById("debug").innerHTML += html;
    }

  // Set correct size for each box
  px = size + "px";
  pos = start;
  for (i=0; i < List.length; i++) {
    framestr = frame + pos;
    if ( document.getElementById(framestr) )
      document.getElementById(framestr).style.width = px;
    pos++;
    }

  // Updating HTML appears to erase old molecules, so load all molecules in list
  for (i=0; i < showgallery.num; i++) {
    canvasstr = canvas + i;
    activeWin(canvasstr);
    delMolecule();
    readServerFile(showgallery.list[i]);
    if ( document.getElementById("debug") ) {
      html  = "\n\nProcessed molecule "+i;
      html += " named "+showgallery.list[i];
      document.getElementById("debug").innerHTML += html;
      }
    }

  }


//#   function galleryUniform()
//#
//#   Routine to force all molecules that are part of a "gallery" to be displayed with the same size scale.
//#
function galleryUniform() {

  // Declare local variables
  var i, num, scale;
  var framestr;
  var frame = "gallerycanvas";
  var molecule = [];

  // Find number of gallery images on page
  num = 0;
  framestr = frame + num;
  while ( document.getElementById(framestr) ) {
    num++;
    framestr = frame + num;
    }

  // Find scale factor for largest molecule
  scale = 1000;
  for (i=0; i < num; i++) {
    framestr = frame + i;
    activeWin(framestr);
    molecule = Mol();
    if ( molecule[0].AtomScale < scale ) {
      scale = molecule[0].AtomScale;
      }
    }

  // Scale molecules
  if ( scale < 1000.0 ) {
    for (i=0; i < num; i++) {
      framestr = frame + i;
      activeWin(framestr);
      molecule = Mol();
      molecule[0].AtomScale = scale;
      drawMolecule();
      if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      drawAxis();
      }
    }
  }



//#   function galleryReset()
//#
//#   For molecules that are part of a "gallery", this routine optimizes the size of each molecule individually.
//#
function galleryReset() {

  // Declare local variables
  var i, num;
  var framestr;
  var frame = "gallerycanvas";

  // Find number of gallery images on page
  num = 0;
  framestr = frame + num;
  while ( document.getElementById(framestr) ) {
    num++;
    framestr = frame + num;
    }

  // Reset view for each molecule
  for (i=0; i < num; i++) {
    framestr = frame + i;
    activeWin(framestr);
    centerMolecule();
    drawMolecule();
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    drawAxis();
    }
  }



//#   function readServerFile(filename)
//#
//#   Routine to read contents of file stored on the web server.
//#
//#   Parameter:
//#      filename:  Name (URL) of file (including path)
//#
function readServerFile(filename) {

  // Define local variables
  var lines;
  var validExtension;
  var fileinfo = new Array();
  var ext = extension(filename);
  var xmlhttp;

  // Use XML to get contents of file from "server"
  xmlhttp=new XMLHttpRequest();
  xmlhttp.open('GET', filename, false);
  xmlhttp.send();
  lines = xmlhttp.responseText.split('\n');

  // Call routine to read and process data
  validExtension = 0;
  if ( ext == "xyz" ) {
     validExtension = 1;
     readXYZfile(lines);
     }
  if ( ext == "mol" ) {
     validExtension = 1;
     readMOLfile(localfile,lines);
     }
  if ( ext == "inp" ) {
     validExtension = 1;
     readINPfile(localfile,lines);
     }
  if ( validExtension == 0 ) {
    InfoWin("*** ERROR: Invalid file type. ***",1);
    return;
    }

  // Update display
  centerMolecule();
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  }















//
// -------------------- MOUSE --------------------
//

///
///   Routine to save number of atom selected with mouseDown event
///   option = "Set" or "Show"
///   value  = Number of selected atom
///        0 = MouseDown, but not on atom
///       -1 = Mouse not down
///
function mouseState(option, value) {
  // Initialize parameters as necessary
  if ( typeof mouseState.DownAtom == 'undefined' )
    mouseState.DownAtom = -1;

  // Show number of atom selected by mouseDown
  if ( option == "Show" )
    return mouseState.DownAtom;

  if ( option == "Set" )
    mouseState.DownAtom = value;

  // End of mouseState routine
  }

//#   function RotateMolecule(axis)
//#
//#   Routine to start/stop rotation of molecule.
//#
//#   Parameter:
//#     axis = rotation axis.  Allowed values are "x", "y", or "z"
//#            ("s" can be used to stop all rotations)
//#
//#   Buttons must be created in html with:
//#     id="rotateX"  (or rotateY or rotateZ)
//#

function RotateMolecule(axis) {
  // Declare local variables
  var delay = 20;  // Delay between redrawing screen, in ms

  // Parameter validation
  axis = axis[0].toLowerCase();
  if ( (axis != "x") &&  (axis != "y") && (axis != "z") && (axis != "s") ) {
    return;
    }

  // If first call, initialize "active" variable
  if(typeof RotateMolecule.RX === "undefined") {
    RotateMolecule.RX = 0;
    RotateMolecule.RY = 0;
    RotateMolecule.RZ = 0;
    }

  // Start/Stop rotation
  switch (axis) {
    case 'x':
              if ( RotateMolecule.RX == 0 ) {
                  // Start rotation
                  RotateMolecule.RX = 1;
                  RotateX_ID = setInterval( "rotateX()", delay );
                  buttonColor("rotateX",1);
                } else {
                  // Stop rotation
                  RotateMolecule.RX = 0;
                  clearInterval( RotateX_ID );
                  buttonColor("rotateX",0);
                }
              break;
    case 'y':
              if ( RotateMolecule.RY == 0 ) {
                  // Start rotation
                  RotateMolecule.RY = 1;
                  RotateY_ID = setInterval( "rotateY()", delay );
                  buttonColor("rotateY",1);
                } else {
                  // Stop rotation
                  RotateMolecule.RY = 0;
                  clearInterval( RotateY_ID );
                  buttonColor("rotateY",0);
                }
              break;
    case 'z':
              if ( RotateMolecule.RZ == 0 ) {
                  // Start rotation
                  RotateMolecule.RZ = 1;
                  RotateZ_ID = setInterval( "rotateZ()", delay );
                  buttonColor("rotateZ",1);
                } else {
                  // Stop rotation
                  RotateMolecule.RZ = 0;
                  clearInterval( RotateZ_ID );
                  buttonColor("rotateZ",0);
                }
              break;
    case 's':
              if ( RotateMolecule.RX != 0 ) {
                RotateMolecule.RX = 0;
                clearInterval( RotateX_ID);
                }
              if ( RotateMolecule.RY != 0 ) {
                RotateMolecule.RY = 0;
                clearInterval( RotateY_ID);
                }
              if ( RotateMolecule.RZ != 0 ) {
                RotateMolecule.RZ = 0;
                clearInterval( RotateZ_ID);
                }
              buttonColor("rotateX",0);
              buttonColor("rotateY",0);
              buttonColor("rotateZ",0);
              break;
    }

  // End of RotateMolecule function
  }

///
///   Routine to handle mouse press
///
function MouseDown(evt) {
  // Declare local variables
  var cx, cy;
  var windowName = evt.target.id;
  var activecanvas = activeWin(windowName);
  var canvas = document.getElementById(activecanvas);
  var width = canvas.width;
  var height = canvas.height;
  var param = parameters();
  // Map touch screen and mouse buttons
  cx = evt.pageX;
  cy = evt.pageY;

  // If touch screen
  if (evt.targetTouches) {
    if (evt.targetTouches.length == 1) {
      cx = evt.targetTouches[0].pageX;
      cy = evt.targetTouches[0].pageY;
      }
    }

  // Save selected atom
  mouseState( "Set", onAtom(cx, cy, canvas, width, height) );
  param.lastAtomChoose = mouseState("Show");
  param.mousedownxyz = [];

  param.mousedownxyz.push(cx);
  param.mousedownxyz.push(cy);
  }


///
///   Routine to handle mouse up
///
function MouseUp(evt) {
  // Declare local variables
  var cx, cy;
  var mouseOnAtom, UpAtom;
  var activecanvas = activeWin("");
  var molecule = Mol();
  var cys = OriCrystal();
  var canvas = document.getElementById(activecanvas);
  var width = canvas.width;
  var height = canvas.height;
  var param = parameters();
  var bonds = BondMatrix(); 
  // Map touch screen and mouse buttons
  cx = evt.pageX;
  cy = evt.pageY;
  // If touch screen
  if (evt.targetTouches) {
    cx = evt.targetTouches[0].pageX;
    cy = evt.targetTouches[0].pageY;
    }
  // See which atom (if any) mouse is currently on
  mouseOnAtom = mouseState("Show"); 
  mouseState("Set", -1);
  Upatom = onAtom(cx, cy, canvas, width, height);
  
  atomicNumber = lookupSymbol(param.element);

  //if 'click' moves to blank space
  if ( Upatom == 0 ) {
    // param.action = "pull";
    if (param.mode == "View"){
      viewGeom(0);
    }
    //If 'click' moves from an atom to blank space
    if (param.mode == "Draw" && mouseOnAtom>0) {
      param.action = "pull";
      // Save Molecular information
      Undo("save");
      molecule[0].charge = 999; 
      newAtom(mouseOnAtom);
      formula(); 
    }  
    //If 'click' on the same blank space as mousedown
    if (param.mode == "Draw"&& mouseOnAtom==0 && param.mousedownxyz[0] == cx && param.mousedownxyz[1] == cy) {
      param.action = "press";
      // Save Molecular information
      Undo("save");
      molecule[0].charge = 999; 
      newAtom(mouseOnAtom);
      formula(); 
    }  
    var cys = OriCrystal();
    if(molecule[0].type=="crystal" && cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    drawAxis();
    if(cys[0].cleave == 1){
      drawsurface();
    }
    return;
    }

  // If 'click' stays on a same atom, proceed
  if (mouseOnAtom !==0 && Upatom == mouseOnAtom ) {
    param.action = "press";
    // Show geometry information
    if (param.mode == "View") {
      if ( evt.shiftKey > 0) {
          molecule[Upatom].highlite = ( (molecule[Upatom].highlite+1) % 2);
          drawMolecule();
          if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
            drawCube();
          }
          if(cys[0].preview == 1){
            drawCube();
          }
          drawAxis();
          if(cys[0].cleave == 1){
            drawsurface();
          }
        } else {
          viewGeom(mouseOnAtom);
          }
      }
    // Add or Remove atom(s)
    if (param.mode == "Draw") {
      // if in the move atoms position mode
      if ( molecule[0].moveAck==1) {
        molecule[Upatom].highlite = ( (molecule[Upatom].highlite+1) % 2);
        drawMolecule();
        if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
          drawCube();
        }
        if(cys[0].preview == 1){
          drawCube();
        }
        drawAxis();
        if(cys[0].cleave == 1){
          drawsurface();
        }
      }
      else{
        Undo("save");
        molecule[0].charge = 999;
        if (param.atommode == "Delete") {
            delAtom(Upatom);
          } else {
            newAtom(Upatom);
          }
        formula();
      }    
    }
    return;
    }

  // If 'click' moves to a different atom, draw or remove bond
  if ( (Upatom != mouseOnAtom) && (param.mode == "Draw") ) {
    param.action = "press";
    // Save Molecular information
    Undo("save");
    if (param.bondmode == "Add") {
      molecule[0].charge = 999;
      if(bonds[mouseOnAtom][Upatom]!=0){
        delBond(mouseOnAtom,Upatom);
      }    
      addBond(mouseOnAtom,Upatom,param.bondtype);
    }
    if (param.bondmode == "Delete") {
      molecule[0].charge = 999;
      delBond(mouseOnAtom,Upatom);
      param.bondmode="Add";
      param.bondtype="single";
      buttonColor("single",1)
      buttonColor("delbond",0);
    }
    if (param.bondmode == "Rotate") {
      BondRotation("Set",mouseOnAtom,Upatom);
    }
    drawMolecule();
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    drawAxis();
    if(cys[0].cleave == 1){
      drawsurface();
    } 
    return;
  }
  // Finished with MouseUp routine
  }


///
///   Is mouse within radius of atom?
///   Parameters - mouse coordinates
///   Return - number of atom or zero if none 
///
function onAtom(mx, my, canvas, width, height) {
  // Declare local variables
  var i, A, dx, dy;
  var radius, delta;
  var AtomSize = 0.50;
  var molecule = Mol();

  // Convert mouse position to atomic coordinate system
  //Obtain canvas' bound
  var canvasBox = canvas.getBoundingClientRect(); 
  //Scaled by difference between canvas' width-height and the real canvas'piex.
  mx = (mx - canvasBox.left)*(canvas.width/canvasBox.width)-width/2; 
  my = (my - canvasBox.top)*(canvas.height/canvasBox.height)-height/2;

  // Loop over all atoms, looking for first match
  for (i=1; i <= molecule[0].numatoms; i++) {
    A = molecule[i].atomicnumber;
    radius = molecule[0].AtomScale*AtomSize*element(A,"radius");
    radius = radius*radius;
    dx = molecule[0].AtomScale*molecule[i].x - mx;     
    dy = molecule[0].AtomScale*molecule[i].y - my;
    delta = dx*dx + dy*dy;
    if (delta <= radius) {
      return i;
      }
    }
  return 0;
  }


///
///   Routine to deal with scroll wheel
///
function MouseWheel(evt) {

  // Local variable
  var molecule = Mol();
  var cys = OriCrystal();
  // Stop window scrolling
  if (evt.preventDefault)
    evt.preventDefault();

  //  Firefox and Opera use detail, Chrome uses wheelDelta(?)
  var delta = evt.detail ? evt.detail*(-1) : evt.wheelDelta;
  var newScale = (delta > 0) ? 1.1 : 0.9;
  molecule[0].AtomScale = molecule[0].AtomScale*newScale;
  drawMolecule();
  if(molecule[0].type=="crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  
  if(cys[0].cleave == 1){
    drawsurface();
  }
  return false;
  }
///
///Function defines atoms transformation
///
function moveAck(){
  var molecule = Mol();
  var cys = OriCrystal();
  if(molecule[0].type == "crystal"){
    alert("Error: cannot move atoms in crystal mode!");
  }else{
    if(molecule[0].moveAck == 0){
      molecule[0].moveAck = 1;
      buttonColor("Translate",1);
    }
    else{
      molecule[0].moveAck = 0;
      buttonColor("Translate",0);
      for(var i = 1; i <= molecule[0].numatoms; i++){
        molecule[i].highlite = 0;
      }
      drawMolecule();
      if(molecule[0].type=="crystal" && cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      drawAxis();
    }
  }
}

//Atoms transformation -- moveup
function moveup(){
  var molecule = Mol();
  var cys = OriCrystal();
  if(molecule[0].moveAck==1){
    var distance=document.getElementById('distance').value||0;
    for (var i=1; i <= molecule[0].numatoms; i++) {
      if(molecule[i].highlite==1){
        molecule[i].y = molecule[i].y-parseFloat(distance) ;//up
      }
    }
  drawMolecule();
  if(molecule[0].type == "crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  }
}

//Atoms transformation -- movedown
function movedown(){
  var molecule = Mol();
  var cys = OriCrystal();
  if(molecule[0].moveAck==1){
    var distance=document.getElementById('distance').value||0;
    for (var i=1; i <= molecule[0].numatoms; i++) {
      if(molecule[i].highlite==1){
        molecule[i].y = molecule[i].y+parseFloat(distance) ;//down
      }
    }
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  }
}

//Atoms transformation -- moveleft
function moveleft(){
  var molecule = Mol();
  var cys = OriCrystal();
  if(molecule[0].moveAck==1){
    var distance=document.getElementById('distance').value||0;
    for (var i=1; i <= molecule[0].numatoms; i++) {
      if(molecule[i].highlite==1){
        molecule[i].x = molecule[i].x-parseFloat(distance) ;//left
      }
    }
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  }
}

//Atoms transformation -- moveright
function moveright(){
  var molecule = Mol();
  var cys = OriCrystal();
  if(molecule[0].moveAck==1){
    var distance=document.getElementById('distance').value||0;
    for (var i=1; i <= molecule[0].numatoms; i++) {
      if(molecule[i].highlite==1){
        molecule[i].x = molecule[i].x+parseFloat(distance) ;//right
      }
    }
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  }
}

///
///zoom in or out
///
function zoom(mode){
    // Local variable
    var molecule = Mol(); 
    var cys = OriCrystal();
    var newScale =  1.1;
    if(mode==0) newScale =  0.9;   
    molecule[0].AtomScale = molecule[0].AtomScale*newScale;
    drawMolecule();
    if(molecule[0].type=="crystal" && cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    if(cys[0].cleave == 1){
      drawsurface();
    }
    drawAxis();
}

///
///fit to the screen
///
function fitsize(){
  var molecule = Mol();
  var cys = OriCrystal();
  centerMolecule();  
  drawMolecule();
  if(molecule[0].type=="crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  if(cys[0].cleave == 1){
    drawsurface();
  }
  drawAxis();
}

//
//   Private function to perform rotation of molecule about x-axis
//
function rotateX(ang) {
  // Declare local variables
  var i, j,x, y, z;
  var angle = ang || 1.0;
  var cosA = Math.cos(-angle*Math.PI/180);
  var sinA = Math.sin(-angle*Math.PI/180);
  var molecule = Mol();
  var cys = OriCrystal();

  // Draw molecule and display on canvas
  for (i=1; i <= molecule[0].numatoms; i++) {
    y = molecule[i].y;
    z = molecule[i].z;
    molecule[i].y =  cosA*y + sinA*z;
    molecule[i].z = -sinA*y + cosA*z;
  }
  for(j=0;j<8;j++){
    y=cys[0].points[j][1];
    z=cys[0].points[j][2];
    cys[0].points[j][1]=cosA*y + sinA*z;
    cys[0].points[j][2]=-sinA*y + cosA*z;
  }
  for(j=0;j<8;j++){
    y=molecule[0].axis[j][1];
    z=molecule[0].axis[j][2];
    molecule[0].axis[j][1]=cosA*y + sinA*z;
    molecule[0].axis[j][2]=-sinA*y + cosA*z;
  }
  if(cys[0].cleave == 1){
    for(j=0;j<8;j++){
      y=cys[0].cleavesurface[j][1];
      z=cys[0].cleavesurface[j][2];
      cys[0].cleavesurface[j][1]=cosA*y + sinA*z;
      cys[0].cleavesurface[j][2]=-sinA*y + cosA*z;
    }      
  }

  drawMolecule();
  if(molecule[0].type=="crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  if(cys[0].cleave==1){
    drawsurface();
  }   
  // End of rotateX function
  }


//
//   Private function to perform rotation of molecule about y-axis
//
function rotateY(ang) {
  // Declare local variables
  var i,j, x, y, z;
  var angle = ang || 1.0;
  var cosA = Math.cos(-angle*Math.PI/180);
  var sinA = Math.sin(-angle*Math.PI/180);
  var molecule = Mol();
  var cys = OriCrystal();
  // Draw molecule and display on canvas
  for (i=1; i <= molecule[0].numatoms; i++) {
    x = molecule[i].x;
    z = molecule[i].z;
    molecule[i].x =  cosA*x + sinA*z;
    molecule[i].z = -sinA*x + cosA*z;
    }
  for(j=0;j<8;j++){
    x=cys[0].points[j][0];
    z=cys[0].points[j][2];
    cys[0].points[j][0]= cosA*x + sinA*z;
    cys[0].points[j][2]= -sinA*x + cosA*z;
  }
  for(j=0;j<8;j++){
    x=molecule[0].axis[j][0];
    z=molecule[0].axis[j][2];
    molecule[0].axis[j][0]= cosA*x + sinA*z;
    molecule[0].axis[j][2]= -sinA*x + cosA*z;
  }
  if(cys[0].cleave == 1){
    for(j=0;j<8;j++){
    x=cys[0].cleavesurface[j][0];
    z=cys[0].cleavesurface[j][2];
    cys[0].cleavesurface[j][0]=cosA*x + sinA*z;
    cys[0].cleavesurface[j][2]=-sinA*x + cosA*z;
  }     
  }

  drawMolecule();
  if(molecule[0].type=="crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  if(cys[0].cleave==1){
    drawsurface();
  }
  // End of rotateY function
  }


//
//   Private function to perform rotation of molecule about z-axis
//
function rotateZ(ang) {
  // Declare local variables
  var i, j,x, y, z;
  var angle = ang || 1.0;
  var cosA = Math.cos(-angle*Math.PI/180);
  var sinA = Math.sin(-angle*Math.PI/180);
  var molecule = Mol();
  var cys = OriCrystal();
  // Draw molecule and display on canvas
  for (i=1; i <= molecule[0].numatoms; i++) {
    x = molecule[i].x;
    y = molecule[i].y;
    molecule[i].x =  cosA*x + sinA*y;
    molecule[i].y = -sinA*x + cosA*y;
    }
  for(j=0;j<8;j++){
    x=cys[0].points[j][0];
    y=cys[0].points[j][1];
    cys[0].points[j][0]= cosA*x + sinA*y;
    cys[0].points[j][1]= -sinA*x + cosA*y;
  }
  for(j=0;j<8;j++){
    x=molecule[0].axis[j][0];
    y=molecule[0].axis[j][1];
    molecule[0].axis[j][0]= cosA*x + sinA*y;
    molecule[0].axis[j][1]= -sinA*x + cosA*y;
  }
  if(cys[0].cleave == 1){
    for(j=0;j<8;j++){
    x=cys[0].cleavesurface[j][0];
    y=cys[0].cleavesurface[j][1];
    cys[0].cleavesurface[j][0]=cosA*x + sinA*y;
    cys[0].cleavesurface[j][1]=-sinA*x + cosA*y;
  }    
  }
  drawMolecule();
  if(molecule[0].type=="crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  if(cys[0].cleave==1){
    drawsurface();
  }
  // End of rotateZ function
  }

//
//rotate around x,y,z axis
//
function rotateXYZ(mode){
  var molecule = Mol();
  var cys = OriCrystal();
  var angle = document.getElementById("defaultangle").value;
  switch (mode) {
    case 'x1':
      rotateX(angle);
      break;
    case 'x0':
      angle = -1*angle;
      rotateX(angle);
      break;  
    case 'y1':
      rotateY(angle);
      break;
    case 'y0':
      angle = -1*angle;
      rotateY(angle);
      break;
    case 'z1':
      rotateZ(angle);
      break;
    case 'z0':
      angle = -1*angle;
      rotateZ(angle);
      break;  
  }
  drawMolecule();
  if(molecule[0].type=="crystal" && cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  if(cys[0].cleave == 1){
    drawsurface();
  }
  drawAxis();
}


///
///   Alter molecule IFF mouse is pressed
///
function MouseMove(evt) {
  var newx, newy;
  var dx, dy, tx, ty, da;
  var x, y, z;
  var xc, yc, zc;
  var cosx, cosy, cosz, sinx, siny, sinz;
  var cosA, sinA;
  var step=2;  // Smaller values make less sensitive
  var molecule = Mol();
  var param = parameters();
  var cys = OriCrystal();
  // Save old (x,y) coordinates
  if ( typeof MouseMove.cx == 'undefined' )
    MouseMove.cx = 300;
  if ( typeof MouseMove.cy == 'undefined' )
    MouseMove.cy = 300;

  // Only rotate if mouse pressed, but not on an atom
  if ( mouseState("Show") == 0 ) {
    // Map touch screen and mouse buttons
    newx = evt.pageX;
    newy = evt.pageY;
    // If touch screen
    if (evt.targetTouches) {
      if (evt.targetTouches.length == 1) {
        newx = evt.targetTouches[0].pageX;
        newy = evt.targetTouches[0].pageY;
        }
    }

    // Record movement
    dx = (MouseMove.cx - newx);
    dy = (MouseMove.cy - newy);
    MouseMove.cx = newx;
    MouseMove.cy = newy;
    if ( Math.abs(dx)+Math.abs(dy) > 10)
      return;

    // Handle special case of rotation about a bond
    if ( param.bondmode == "Rotate" ) {
      da = dx + dy;
      BondRotation("Rotate",da);
      drawMolecule();
      if(molecule[0].type=="crystal" && cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      if(cys[0].cleave == 1){
        drawsurface();
      }
      drawAxis();
      return;
    }

    // Find center of molecule
    xc = 0.0;
    yc = 0.0;
    zc = 0.0;
    numatoms = molecule[0].numatoms;
    // if(molecule[0].type=="molecule"){
    for (i=1; i <= numatoms; i++) {
        xc += molecule[i].x;
        yc += molecule[i].y;
        zc += molecule[i].z;
    }
    xc /= numatoms;
    yc /= numatoms;
    zc /= numatoms;

    // If <Shift> key pressed, rotate around z-axis
    if ( evt.shiftKey > 0) {
      cosz = Math.cos(dx*step*Math.PI/180);
      sinz = Math.sin(dx*step*Math.PI/180);

      for (i=1; i <= molecule[0].numatoms; i++) {
        x = molecule[i].x - xc;
        y = molecule[i].y - yc;
        molecule[i].x =  cosz*x + sinz*y + xc;
        molecule[i].y = -sinz*x + cosz*y + yc;
        }
      if(cys[0].cleave == 1){
        for (i=0; i < 8; i++) {
          x = cys[0].cleavesurface[i][0];
          y = cys[0].cleavesurface[i][1];
          cys[0].cleavesurface[i][0] = cosz*x + sinz*y;
          cys[0].cleavesurface[i][1] = -sinz*x + cosz*y;
        }
      }
      if(molecule[0].type == "crystal" && cys[0].cleave == 0){
        for (i=0; i < 8; i++) {
          x = cys[0].points[i][0] - xc;
          y = cys[0].points[i][1] - yc;
          cys[0].points[i][0] = cosz*x + sinz*y + xc;
          cys[0].points[i][1] = -sinz*x + cosz*y + yc;
        }
      }
      drawMolecule();
      if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      if(cys[0].cleave == 1){
        drawsurface();
      }
      drawAxis();
      return;
      }

    // If <Ctrl> key pressed, translate along x- or y-axis
    // if ( evt.ctrlKey > 0) {
      if(molecule[0].mousemove == "translate"){
      tx = dx*0.01;
      ty = dy*0.01;
      for (i=1; i <= molecule[0].numatoms; i++) {
        x = molecule[i].x;
        y = molecule[i].y;
        molecule[i].x = x - tx;
        molecule[i].y = y - ty;
        }
      if(cys[0].cleave == 1){
        for (i=0; i < 8; i++) {
          x = cys[0].cleavesurface[i][0];
          y = cys[0].cleavesurface[i][1];
          cys[0].cleavesurface[i][0] = x -tx;
          cys[0].cleavesurface[i][1] = y -ty;
        }
      }
      if(molecule[0].type == "crystal" && cys[0].cleave == 0){
        for (i=0; i < 8; i++) {
          x = cys[0].points[i][0];
          y = cys[0].points[i][1];
          cys[0].points[i][0] = x -tx;
          cys[0].points[i][1] = y -ty;
        }
      }
      drawMolecule();
      if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      if(cys[0].cleave == 1){
        drawsurface();
      }
      drawAxis();
      return;
      }

    // Rotate entire molecule
    cosx = Math.cos(dy*step*Math.PI/180);
    sinx = Math.sin(dy*step*Math.PI/180);
    cosy = Math.cos(dx*step*Math.PI/180);
    siny = Math.sin(dx*step*Math.PI/180);
    for (i=1; i <= molecule[0].numatoms; i++) {
      x = molecule[i].x - xc;
      y = molecule[i].y - yc;
      z = molecule[i].z - zc;
      molecule[i].x = cosy*x + siny*z + xc;
      molecule[i].y = -sinx*siny*x + cosx*y + sinx*cosy*z + yc;
      molecule[i].z = -cosx*siny*x - sinx*y + cosx*cosy*z + zc;
      }
    drawMolecule();
    for (var j=0; j < 8; j++) {
      x = cys[0].points[j][0] - xc;
      y = cys[0].points[j][1] - yc;
      z = cys[0].points[j][2] - zc;
      cys[0].points[j][0] = cosy*x + siny*z + xc;
      cys[0].points[j][1] = -sinx*siny*x + cosx*y + sinx*cosy*z + yc;
      cys[0].points[j][2] = -cosx*siny*x - sinx*y + cosx*cosy*z + zc;
    }
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    for (var j=0; j < 8; j++) {
      x = molecule[0].axis[j][0];
      y = molecule[0].axis[j][1];
      z = molecule[0].axis[j][2];
      molecule[0].axis[j][0] = cosy*x + siny*z;
      molecule[0].axis[j][1] = -sinx*siny*x + cosx*y + sinx*cosy*z;
      molecule[0].axis[j][2] = -cosx*siny*x - sinx*y + cosx*cosy*z;
      }
    drawAxis();
    for (var j=0; j < 8; j++) {
      x = cys[0].cleavesurface[j][0] - xc;
      y = cys[0].cleavesurface[j][1] - yc;
      z = cys[0].cleavesurface[j][2] - zc;
      cys[0].cleavesurface[j][0] = cosy*x + siny*z + xc;
      cys[0].cleavesurface[j][1] = -sinx*siny*x + cosx*y + sinx*cosy*z + yc;
      cys[0].cleavesurface[j][2] = -cosx*siny*x - sinx*y + cosx*cosy*z + zc;
    }
    if(cys[0].cleave == 1){
      drawsurface();
    }
    }
  }

///
///   Routine to select current element for drawing
///
function pickElem(elem) {
  var tablesize = element(1,"max");
  var i, str, mystyle;
  var mode;
  var param = parameters();
  var backcolor = "silver";
  var active = "lightskyblue";

  if(elem == 'Delete'||elem == 'DelBond'||elem == 'singleBond'||elem == 'doubleBond'||elem == 'tripleBond'||elem == 'RotateBond'){
      if(param.mode == 'View'){
        alert("In View mode,cannot use this function!");
        return;
      }
  }

  // Set display parameters for all buttons
  buttonColor("delbtn",0);
  buttonColor("delbond",0);
  buttonColor("rotbond",0);

  buttonColor("single",0);
  buttonColor("double",0);
  buttonColor("triple",0);
  if(elem == "singleBond"){
    buttonColor("single",1);
    param.bondtype="single";
    return;
  }
  if(elem == "doubleBond"){
    buttonColor("double",1);
    param.bondtype="double";
    return;
  }
  if(elem == "tripleBond"){
    buttonColor("triple",1);
    param.bondtype="triple";
    return;
  }
  if (elem == "Delete") {
    buttonColor("delbtn",1);
    param.atommode="Delete";
    return;
    }
  if (elem == "DelBond") {
    buttonColor("delbond",1);
    param.bondmode="Delete";
    return;
    }
  if (elem == "RotateBond") {
    if (  param.bondmode != "Rotate" ) {
        buttonColor("re-bond",1);
        param.bondmode="Rotate";
      } else {
        param.bondmode="";
        BondRotation("Clear");
        buttonColor("re-bond",0);
      }
    return;
    }

  // Not a button, so set element
  param.element = elem;
  param.atommode = "Add";
  param.bondmode = "Add";
  param.bondtype = "single";
  $(".elements").toggle(200);
  // Finished with pickElem routine
  }


///
///   Routine to select hybridization pattern for current element
///   Possible values are 1 to 4
///
function pickClouds(hybrid) {
  var i, str;
  var clouds = parseInt(hybrid);
  var param = parameters();

  for (i=1; i<5; i++) {
    str = "cld" + i;
    buttonColor(str,0);
    if (i == clouds) {
      buttonColor(str,1);
      }
    }
  param.clouds = clouds;
  }

///
///   Routine to allow rotation about a bond
///
///   mode: "Set" sets atoms, "Rotate" performs rotation, or "Clear"
///   values: Two atoms of bond  OR  single rotation angle
///
function BondRotation(mode,value1,value2) {

  // Define local variables
  var i, pos;
  var x, y, xc, yc;
  var cosA, sinA;
  var step=1.0;  // Larger values make more sensitive
  var molecule = Mol();

  // Save two atoms used to define bond rotation
  if ( typeof BondRotation.RotateAtom1 == 'undefined' )
    BondRotation.RotateAtom1 = 0;
  if ( typeof BondRotation.RotateAtom2 == 'undefined' )
    BondRotation.RotateAtom2 = 0;

  // Save list of atoms to rotate if rotation about a bond
  if ( typeof BondRotation.RotateList == 'undefined' ) {
    BondRotation.RotateList = new Array();
    BondRotation.RotateList[0] = 0;
    }

  // If mode is "Clear", reset variables
  if ( mode == "Clear" ) {
    BondRotation.RotateAtom1 = 0;
    BondRotation.RotateAtom2 = 0;
    BondRotation.RotateList[0] = 0;
    return;
    }

  // If mode is "Set", align molecule along bond
  if ( mode == "Set" ) {
    BondRotation.RotateAtom1 = value1;
    BondRotation.RotateAtom2 = value2;
    bondAlign(value1,value2);
    return;
    }

  // If mode is "Rotate", perform rotation
  if ( mode == "Rotate" ) {
    atom1 = BondRotation.RotateAtom1;
    atom2 = BondRotation.RotateAtom2;
    cosA = Math.cos(value1*step*Math.PI/360);
    sinA = Math.sin(value1*step*Math.PI/360);
    if (BondRotation.RotateList[0] == 0) {
      BondRotation.RotateList[0] = 1;
      BondRotation.RotateList[1] = BondRotation.RotateAtom2;
      BondRotation.RotateList = rotlist(BondRotation.RotateList, atom1, atom2);
      }

    InfoWin("\n--- Bond rotation ---\n");
    for(i=1;i<=BondRotation.RotateList[0];i++){
    j=BondRotation.RotateList[i];
    InfoWin(element(molecule[j].atomicnumber,"symbol")+j+"\n");
    }

    xc = molecule[atom1].x;
    yc = molecule[atom1].y;
    for (pos=1; pos <= BondRotation.RotateList[0]; pos++) {
      i = BondRotation.RotateList[pos];
      x = molecule[i].x - xc;
      y = molecule[i].y - yc;
      molecule[i].x =  cosA*x + sinA*y + xc;
      molecule[i].y = -sinA*x + cosA*y + yc;
      }
    }

  // End of BondRotation routine
  }


///
///   This routine aligns molecule so that bond is parallel to z-axis
///
function bondAlign(atom1, atom2) {
  var i;
  var x, y, z;
  var dx, dy, dz;
  var ctx, cty, stx, sty;
  var molecule = Mol();

  // Determine elements of rotation matrix used to align bond
  dx = molecule[atom2].x - molecule[atom1].x;
  dy = molecule[atom2].y - molecule[atom1].y;
  dz = molecule[atom2].z - molecule[atom1].z;
  if ( (dy == 0) && (dz == 0) ) {
      ctx = 1.0;
      stx = 0.0;
    } else {
      ctx = Math.sqrt( dz*dz / ((dy*dy)+(dz*dz)) );
      stx = Math.sqrt( 1 - (ctx*ctx) );
    }
  vsign = dy*dz;
  if (vsign < 0.0)
    stx = -stx;
  z = stx*dy + ctx*dz;
  if ( (dx == 0) && (z == 0) ) {
      cty = 1.0;
      sty = 0.0;
    } else {
      cty = Math.sqrt( z*z / ((dx*dx)+(z*z)) );
      sty = Math.sqrt( 1 - (cty*cty) );
    }
  vsign = dx*z;
  if (vsign < 0.0)
    sty = -sty;

  // Rotate molecule
  for (i=1; i <= molecule[0].numatoms; i++) {
    x = molecule[i].x;
    y = molecule[i].y;
    z = molecule[i].z;
    molecule[i].x = (x*cty) - (y*stx*sty) - (z*ctx*sty);
    molecule[i].y =           (y*ctx)     - (z*stx);
    molecule[i].z = (x*sty) + (y*stx*cty) + (z*ctx*cty);
    }

  // Make sure second atom in front
  if ( molecule[atom1].z < molecule[atom2].z ) {
    for (i=1; i <= molecule[0].numatoms; i++) {
      molecule[i].x = -molecule[i].x;
      molecule[i].z = -molecule[i].z;
      }
    }

  // End of rotateBond routine
  }


///
///   Routine to determine which atoms bonded to atom2,
///   after but not including atom1
///
function rotlist(RList, atom1, atom2) {
  // Declare local variables
  var i, j;
  var atm, found;
  var molecule = Mol();
  var bonds = BondMatrix();

  // Loop over all bonds on atom2
  for (atm=1; atm <= molecule[0].numatoms; atm++) {
    if ( bonds[atom2][atm] > 0) {
      found = 0;
      if ( atm == atom1 )
        found = 1;
      for (j=1; j <= RList[0]; j++) {
        if ( atm == RList[j] ) {
          found = 1;
          j = RList[0] + 1;
          }
        }
      if (found == 0) {
        RList[0]++;
        RList[RList[0]] = atm;
        rotlist(RList, atom2, atm);
        }
      }
    }

  // End of rotlist routine
  return RList;
  }

///
///   VIEW MODE:
///   Helper routine to show geometry information
///   Parameters - mouse coordinates
///
function geomLabel(ctx,label,width) {
  ctx.lineWidth = 1.0;
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.font = "normal 18px sans-serif";
  ctx.fillStyle = "rgb(255,255,255)";
  ctx.beginPath();
  ctx.fillText(label,width-5,5);
  ctx.closePath();
  }



//
// -------------------- GAUSSION --------------------
//

//@author zexin_xu zexin.xu@nscc-gz.cn
$(document).ready(function(){
	function part2(){
		$(".part-2-1:eq(0) option").css("color","#000");
		$(".part-2-1:eq(0) option").attr("disabled", false);
		$(".part-2-1:eq(1) option").css("color","#000");
		$(".part-2-1:eq(1) option").attr("disabled", false);
		$(".part-2-1:eq(0) select").val("Ground State");
		$(".part-2-1:eq(1) select").val("Mechanics...");
		
		if($(".part-0 option").eq(1).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-1").eq(0).css("display","block");
			$(".part-1").eq(1).css("display","block");
			$(".part-1:eq(0) option:gt(1)").attr("disabled", true);
			$(".part-1:eq(0) option:gt(1)").css("color","#E2E2E2");
			$(".part-2-1:eq(0) option").eq(1).css("color","#E2E2E2");
			$(".part-2-1:eq(0) option").eq(4).css("color","#E2E2E2");
			$(".part-2-1:eq(0) option").eq(1).attr("disabled", true);
			$(".part-2-1:eq(0) option").eq(4).attr("disabled", true);
			if($(".part-2-1:eq(0) option").eq(0).is(":checked")==true){
				$(".part-2-1:eq(1) option").eq(5).css("color","#E2E2E2");
				$(".part-2-1:eq(1) option").eq(9).css("color","#E2E2E2");
				$(".part-2-1:eq(1) option").eq(5).attr("disabled", true);
				$(".part-2-1:eq(1) option").eq(9).attr("disabled", true);
			}else{
				$(".part-2-1:eq(1) option").css("color","#000");
				$(".part-2-1:eq(1) option").attr("disabled", false);
			}
		}else if($(".part-0 option").eq(2).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-1").eq(2).css("display","block");
			$(".part-2-1:eq(0) option").eq(1).css("color","#E2E2E2");
			$(".part-2-1:eq(0) option:gt(2)").css("color","#E2E2E2");
			$(".part-2-1:eq(0) option").eq(1).attr("disabled", true);
			$(".part-2-1:eq(0) option:gt(2)").attr("disabled", true);
			if($(".part-2-1:eq(0) option").eq(0).is(":checked")==true){
				$(".part-2-1:eq(1) option:gt(4)").css("color","#E2E2E2");
				$(".part-2-1:eq(1) option:gt(4)").attr("disabled", true);
			}else{
				$(".part-2-1:eq(1) option").css("color","#000");
				$(".part-2-1:eq(1) option").attr("disabled", false);
			}
		}else if($(".part-0 option").eq(3).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-1").eq(0).css("display","block");
			$(".part-1").eq(1).css("display","block");
			$(".part-1").eq(2).css("display","block");
			$(".part-2-1:eq(0) option").eq(1).css("color","#E2E2E2");
			$(".part-2-1:eq(0) option:gt(2)").css("color","#E2E2E2");
			$(".part-2-1:eq(0) option").eq(1).attr("disabled", true);
			$(".part-2-1:eq(0) option:gt(2)").attr("disabled", true);
			if($(".part-2-1:eq(0) option").eq(0).is(":checked")==true){
				$(".part-2-1:eq(1) option:gt(4)").css("color","#E2E2E2");
				$(".part-2-1:eq(1) option:gt(4)").attr("disabled", true);
			}else{
				$(".part-2-1:eq(1) option").css("color","#000");
				$(".part-2-1:eq(1) option").attr("disabled", false);
			}
		}else if($(".part-0 option").eq(4).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-1").eq(3).css("display","block");
			$(".part-1").eq(4).css("display","block");
			$(".part-2-1:eq(0) option").eq(4).css("color","#E2E2E2");
			$(".part-2-1:eq(0) option").eq(4).attr("disabled", true);
			if($(".part-2-1:eq(0) option").eq(0).is(":checked")==true){
				$(".part-2-1:eq(1) option").eq(9).css("color","#E2E2E2");
				$(".part-2-1:eq(1) option").eq(9).attr("disabled", true);
			}else{
				$(".part-2-1:eq(1) option").css("color","#000");
				$(".part-2-1:eq(1) option").attr("disabled", false);
			}
		}else if($(".part-0 option").eq(5).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-1").eq(5).css("display","block");
		}else if($(".part-0 option").eq(6).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-1").eq(6).css("display","block");
			$(".part-2-1:eq(1) select").val("Hartree-Fock");
			$(".part-2-1:eq(0) option:gt(0)").css("color","#E2E2E2");
			$(".part-2-1:eq(0) option:gt(0)").attr("disabled", true);
			$(".part-2-1:eq(1) option").eq(0).css("color","#E2E2E2");
			$(".part-2-1:eq(1) option").eq(0).attr("disabled", true);
			$(".part-2-1:eq(1) option").eq(1).css("color","#E2E2E2");
			$(".part-2-1:eq(1) option").eq(1).attr("disabled", true);
			$(".part-2-1:eq(1) option:gt(3)").css("color","#E2E2E2");
			$(".part-2-1:eq(1) option:gt(3)").attr("disabled", true);
		}else if($(".part-0 option").eq(7).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-1").eq(7).css("display","block");
			$(".part-2-1:eq(1) select").val("Hartree-Fock");
			$(".part-2-1:eq(0) option:gt(0)").css("color","#E2E2E2");
			$(".part-2-1:eq(0) option:gt(0)").attr("disabled", true);
			$(".part-2-1:eq(1) option").eq(0).css("color","#E2E2E2");
			$(".part-2-1:eq(1) option").eq(0).attr("disabled", true);
			$(".part-2-1:eq(1) option").eq(1).css("color","#E2E2E2");
			$(".part-2-1:eq(1) option").eq(1).attr("disabled", true);
			$(".part-2-1:eq(1) option:gt(4)").css("color","#E2E2E2");
			$(".part-2-1:eq(1) option:gt(4)").attr("disabled", true);
		}else if($(".part-0 option").eq(8).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-2-1:eq(0) option").eq(4).css("color","#E2E2E2");
			$(".part-2-1:eq(0) option").eq(4).attr("disabled", true);
			if($(".part-2-1:eq(0) option").eq(0).is(":checked")==true){
				$(".part-2-1:eq(1) option").eq(9).css("color","#E2E2E2");
				$(".part-2-1:eq(1) option").eq(9).attr("disabled", true);
			}else{
				$(".part-2-1:eq(1) option").css("color","#000");
				$(".part-2-1:eq(1) option").attr("disabled", false);
			}
		}else if($(".part-0 option").eq(9).is(":checked")==true){
			$(".part-1").css("display","none");
			$(".part-2-1:eq(1) select").val("Semi-enpirical...");
			$(".part-2-1:eq(0) option:gt(0)").css("color","#E2E2E2");
			$(".part-2-1:eq(0) option:gt(0)").attr("disabled", true);
			$(".part-2-1:eq(1) option").eq(0).css("color","#E2E2E2");
			$(".part-2-1:eq(1) option").eq(0).attr("disabled", true);
			$(".part-2-1:eq(1) option:gt(3)").css("color","#E2E2E2");
			$(".part-2-1:eq(1) option:gt(3)").attr("disabled", true);
		}else $(".part-1").css("display","none");
		
		if($(".part-2-1:eq(1) select").val()=="Mechanics..."){
			$(".part-2-1-1").css("display","none");
			$(".part-2-1-2").css("display","block");
		}else{
			$(".part-2-1-2").css("display","none");
			$(".part-2-1-1").css("display","block");
		}
	}
	
	
	
	$(".part-0 select").on("click",function(){
		$(".part-2-1:eq(0) select").trigger("click");
		/*location.reload(true);*/
		part2();
	})
	
	$(".part-2-1:eq(0) select").on("click",function(){
		if($(".part-2-1:eq(0) option").eq(0).is(":checked")==true){  //Ground state
			part2();
			hide_element();
			$(".part-2-1-2").css("display","block");
			$(".part-2-1:eq(1)").css("display","block");
			$(".part-2").eq(1).css("display","block");
			/*$(".part-2-2:eq(0)").css("display","block");
			$(".part-2-2:eq(1)").css("display","block");
			$(".part-2-2:eq(2)").css("display","block");*/
		}else if($(".part-2-1:eq(0) option").eq(1).is(":checked")==true){ //zindo
			hide_element();
			$(".part-2-1-1").css("display","block");
			$(".part-2-1:eq(1)").css("display","none");
			$(".part-2-4:gt(5)").css("display","block");
		}else if($(".part-2-1:eq(0) option").eq(2).is(":checked")==true){ //cis
			hide_element();
			$(".part-2-1-1").css("display","block");
			$(".part-2-1:eq(1)").css("display","none");
			$(".part-2").eq(1).css("display","block");
			$(".part-2-2:eq(0)").css("display","block");
			$(".part-2-2:eq(1)").css("display","block");
			$(".part-2-2:eq(2)").css("display","block");
			$(".part-2-4:gt(5)").css("display","block");
		}else if($(".part-2-1:eq(0) option").eq(3).is(":checked")==true){ //sac-ci
			hide_element();
			$(".part-2-1-1").css("display","block");
			$(".part-2-1:eq(1)").css("display","none");
			$(".part-2").eq(1).css("display","block");
			$(".part-2-2:eq(0)").css("display","block");
			$(".part-2-2:eq(1)").css("display","block");
			$(".part-2-2:eq(2)").css("display","block");
		}else if($(".part-2-1:eq(0) option").eq(4).is(":checked")==true){ //td-scf
			hide_element();
			$(".part-2-1-1").css("display","block");
			$(".part-2-1:eq(1)").css("display","block");
			$(".part-2").eq(1).css("display","block");
			$(".part-2-2:eq(0)").css("display","block");
			$(".part-2-2:eq(1)").css("display","block");
			$(".part-2-2:eq(2)").css("display","block");
			$(".part-2-4:gt(5)").css("display","block");
		}
		
	})
	/*console.log("Succseeful!");*/
	
	function hide_element(){
		$(".part-2-1-1").css("display","none");
		$(".part-2-1-2").css("display","none");
		$(".part-2-1:eq(3)").css("display","none");
		$(".part-2-1:eq(4)").css("display","none");
		$(".part-2-1:eq(5)").css("display","none");
		
		$(".part-2").eq(1).css("display","none");
		$(".part-2-2:eq(0)").css("display","none");
		$(".part-2-2:gt(0)").css("display","none");
		
		$(".part-2-4:eq(0)").css("display","none");
		$(".part-2-4:gt(0)").css("display","none");
	}
	
	$(".part-2-1:eq(1) select").on("click",function(){
		/*if($(".part-2-1:eq(0) option").eq(0).is(":checked")==true){*/
			if($(".part-2-1:eq(1) option").eq(0).is(":checked")==true){ //maechamics
				hide_element();
				$(".part-2-1-2").css("display","block");
				$(".part-2-4:eq(1)").css("display","block");
			}else if($(".part-2-1:eq(1) option").eq(1).is(":checked")==true){ //semi
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2-1:eq(3)").css("display","block");
				$(".part-2-4:eq(2)").css("display","block");
			}else if($(".part-2-1:eq(1) option").eq(2).is(":checked")==true){ //hartree
				console.log("Succseeful!");
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2").eq(1).css("display","block");
				$(".part-2-2:eq(0)").css("display","block");
				$(".part-2-2:eq(1)").css("display","block");
				$(".part-2-2:eq(0) select").val("ST0-3G");
				if($(".part-2-1:eq(0) option").eq(4).is(":checked")==true){
					$(".part-2-1:eq(1)").css("display","block");
					$(".part-2-2:eq(2)").css("display","block");
					$(".part-2-4:gt(5)").css("display","block");
				}
			}else if($(".part-2-1:eq(1) option").eq(3).is(":checked")==true){ //DFT
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2-1:eq(4)").css("display","block");
				$(".part-2").eq(1).css("display","block");
				$(".part-2-2:eq(0)").css("display","block");
				$(".part-2-2:eq(4)").css("display","block");
				$(".part-2-2:eq(2)").css("display","block");
				$(".part-2-4:eq(2)").css("display","block");
				$(".part-2-2:eq(0) select").val("ST0-3G");
				if($(".part-2-1:eq(0) option").eq(4).is(":checked")==true){
					$(".part-2-1:eq(1)").css("display","block");
					$(".part-2-2:eq(1)").css("display","block");
					$(".part-2-4:eq(2)").css("display","none");
					$(".part-2-4:gt(5)").css("display","block");
				}
			}else if($(".part-2-1:eq(1) option").eq(4).is(":checked")==true){ //mp2
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2").eq(1).css("display","block");
				$(".part-2-2:eq(0)").css("display","block");
				$(".part-2-2:eq(1)").css("display","block");
				$(".part-2-2:eq(2)").css("display","block");
				$(".part-2-4:eq(3)").css("display","block");
			}else if($(".part-2-1:eq(1) option").eq(5).is(":checked")==true){ //mp4
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2").eq(1).css("display","block");
				$(".part-2-2:eq(0)").css("display","block");
				$(".part-2-2:eq(1)").css("display","block");
				$(".part-2-4:eq(0)").css("display","block");
				$(".part-2-4:eq(3)").css("display","block");
			}else if($(".part-2-1:eq(1) option").eq(6).is(":checked")==true){ //QCISD
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2").eq(1).css("display","block");
				$(".part-2-2:eq(0)").css("display","block");
				$(".part-2-2:eq(1)").css("display","block");
				$(".part-2-4:eq(0)").css("display","block");
				$(".part-2-4:eq(3)").css("display","block");
			}else if($(".part-2-1:eq(1) option").eq(7).is(":checked")==true){ //CCSD
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2").eq(1).css("display","block");
				$(".part-2-2:eq(0)").css("display","block");
				$(".part-2-2:eq(1)").css("display","block");
				$(".part-2-4:eq(0)").css("display","block");
				$(".part-2-4:eq(3)").css("display","block");
			}else if($(".part-2-1:eq(1) option").eq(8).is(":checked")==true){ //CASSCF
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2").eq(1).css("display","block");
				$(".part-2-2:eq(0)").css("display","block");
				$(".part-2-2:eq(1)").css("display","block");
				$(".part-2-4:eq(4)").css("display","block");
				$(".part-2-4:eq(5)").css("display","block");
			}else if($(".part-2-1:eq(1) option").eq(9).is(":checked")==true){ //Compound
				hide_element();
				$(".part-2-1:eq(5)").css("display","block");
			}else if($(".part-2-1:eq(1) option").eq(10).is(":checked")==true){ //custom
				hide_element();
				$(".part-2-1-1").css("display","block");
				$(".part-2").eq(1).css("display","block");
				$(".part-2-2:eq(0)").css("display","block");
				$(".part-2-2:eq(1)").css("display","block");
				$(".part-2-2:eq(2)").css("display","block");
			}
		/*}*/
	})
	
	function hide_element2(){
		$(".part-2-1-1").css("display","none");
		$(".part-2-1-2").css("display","none");
		$(".part-2-1:eq(3)").css("display","none");
		$(".part-2-1:eq(4)").css("display","none");
		$(".part-2-1:eq(5)").css("display","none");
		
		$(".part-2").eq(1).css("display","none");
		$(".part-2-2:eq(0)").css("display","none");
		$(".part-2-2:gt(0)").css("display","none");
		
	}
	
	$(".part-2-2:eq(0) select").on("click",function(){
		
		if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
			hide_element2();
			$(".part-2").eq(1).css("display","block");
			$(".part-2-1-1").css("display","block");
			$(".part-2-2:eq(0)").css("display","block");
			$(".part-2-2:eq(1)").css("display","block");
		}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
			hide_element2();
			$(".part-2").eq(1).css("display","block");
			$(".part-2-1-1").css("display","block");
			$(".part-2-2:eq(0)").css("display","block");
			$(".part-2-2:eq(1)").css("display","block");
			$(".part-2-2:eq(2)").css("display","block");
		}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true||$(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
			hide_element2();
			$(".part-2").eq(1).css("display","block");
			$(".part-2-1-1").css("display","block");
			$(".part-2-2:eq(0)").css("display","block");
			$(".part-2-2:eq(1)").css("display","block");
			$(".part-2-2:eq(3)").css("display","block");
		}else{
			hide_element2();
			$(".part-2-1-1").css("display","block");
			$(".part-2").eq(1).css("display","block");
			$(".part-2-2:eq(0)").css("display","block");
		}
		
		if($(".part-2-1:eq(1) option").eq(3).is(":checked")==true){//DFT下fitting—set
			$(".part-2-2:eq(4)").css("display","block");
			$(".part-2-1:eq(4)").css("display","block");
		}else{
			$(".part-2-2:eq(4)").css("display","none");
			$(".part-2-1:eq(4)").css("display","none");
		}
	})
	
	
	
})

$(document).ready(function(){
	$(".export_gauss").on("click",function(){
		var opt;
		var freq;
		var irc;
		var scan;
		var stable;
		var nmr;
		var traj;
		var admp;
		var molecule;
		
		var p1="#";
		
		var p2="";
		
		var p3="";
		var p31="hf/";
		var p32=""//3-21
		var p33="";
		var p34="";
		var p30="";
		
		var p4="";
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////optimization		
		function opt(){
			opt = "";
			for(var i=0;i<$(".part-1:eq(0) option").length;i++){
				if($(".part-1:eq(0) option").eq(i).is(":checked")==true){
					if($(".part-1:eq(0) option").eq(i).val()!=""){
						opt = $(".part-1:eq(0) option").eq(i).val();
					}
				}
			}
			
			for(var i=0;i<$(".part-1:eq(1) option").length;i++){
				if($(".part-1:eq(1) option").eq(i).is(":checked")==true){
					/*console.log(i);*/
					if(opt!=""&&$(".part-1:eq(1) option").eq(i).val()!=""){
						opt = opt + "," + $(".part-1:eq(1) option").eq(i).val();
					}else if(opt==""&&$(".part-1:eq(1) option").eq(i).val()!=""){
						opt = $(".part-1:eq(1) option").eq(i).val();
					}
				}
			}
			
			if(opt!=""&&$(".part-1:eq(0) input").is(":checked")==true){
				opt = opt + "," + $(".part-1:eq(0) input").val();
			}else if(opt==""&&$(".part-1:eq(0) input").is(":checked")==true){
				opt = $(".part-1:eq(0) input").val();
			}
			
			if(opt!=""&&$(".part-1:eq(1) input").is(":checked")==true){
				opt = opt + "," + $(".part-1:eq(1) input").val();
			}else if(opt==""&&$(".part-1:eq(1) input").is(":checked")==true){
				opt = $(".part-1:eq(1) input").val();
			}
			
			if(opt.length>5) opt = "(" + opt + ")";
			
			if(opt!=""){
				opt = "opt=" + opt;
			}else opt = "opt";
			
			p2 = opt;
			console.log(p2);
		}
		if($(".part-0 option").eq(1).is(":checked")==true){
			opt();
		}
		
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////frequency
		function freq(){
			freq = "";
			for(var i=0;i<$(".part-1:eq(2) option").length;i++){
				if($(".part-1:eq(2) option").eq(i).is(":checked")==true){
					if($(".part-1:eq(2) option").eq(i).val()!=""){
						freq = $(".part-1:eq(2) option").eq(i).val();
					}
				}
			}
			if(freq!=""&&$(".part-1:eq(2) input").is(":checked")==true){
				freq = freq + "," + $(".part-1:eq(2) input").val();
			}else if(freq==""&&$(".part-1:eq(2) input").is(":checked")==true){
				freq = $(".part-1:eq(2) input").val();
			}
			
			if(freq.length>7) freq = "(" + freq + ")";
			
			if(freq!=""){
				freq = "freq=" + freq;
			}else freq = "freq";
			
			p2 = freq;
			console.log(p2);
		}
		if($(".part-0 option").eq(2).is(":checked")==true){
			freq();
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////opt+freq
		
		if($(".part-0 option").eq(3).is(":checked")==true){
			opt();
			p21 = p2;
			freq();
			p2 = p21 + " " + p2;
			console.log(p2);
		}
		
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////IRC
		function irc(){
			irc = "";
			if($(".part-1:eq(3) option").eq(0).is(":checked")==true){//both derctions
				irc = "calcfc"
			}else if($(".part-1:eq(3) option").eq(1).is(":checked")==true&&$(".part-1:eq(4) option").eq(0).is(":checked")==true){//forward+once
				irc = "forward,calcfc";
			}else if($(".part-1:eq(3) option").eq(2).is(":checked")==true&&$(".part-1:eq(4) option").eq(0).is(":checked")==true){//reverse+once
				irc = "reverse,calcfc";
			}else if($(".part-1:eq(3) option").eq(1).is(":checked")==true&&$(".part-1:eq(4) option").eq(1).is(":checked")==true){//forward+always
				irc = "forward,calcall";
			}else if($(".part-1:eq(3) option").eq(2).is(":checked")==true&&$(".part-1:eq(4) option").eq(1).is(":checked")==true){//reverse+always
				irc = "reverse,calcall";
			}else if($(".part-1:eq(3) option").eq(1).is(":checked")==true&&$(".part-1:eq(4) option").eq(2).is(":checked")==true){//forward+read
				irc = "forward,rcfc";
			}else if($(".part-1:eq(3) option").eq(2).is(":checked")==true&&$(".part-1:eq(4) option").eq(2).is(":checked")==true){//reverse+read
				irc = "reverse,rcfc";
			}
			
			if($(".part-1:eq(4) input").eq(0).is(":checked")==true){
				irc = irc + ",maxpoints=" + $(".part-1:eq(4) input").eq(1).val();
			}
			if($(".part-1:eq(3) input").is(":checked")==true){
				irc = irc + ",hf/3-21g:hf/3-21g"
			}
			
			if(irc.length>7) irc = "(" + irc + ")";
			
			if(irc!=""){
				irc = "irc=" + irc;
			}else irc = "irc";
			
			p2 = irc;
			console.log(p2);
		}
		if($(".part-0 option").eq(4).is(":checked")==true){
			irc();
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////scan
		function scan(){
			if($(".part-1:eq(5) option").eq(0).is(":checked")==true){//normal
				p2 = "scan";
			}else if($(".part-1:eq(5) option").eq(1).is(":checked")==true){//relaxed
				p2 = "opt=z-matrix";
			}
			console.log(p2);
		}
		if($(".part-0 option").eq(5).is(":checked")==true){
			scan();
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////stability
		function stable(){
			if($(".part-1:eq(6) input").is(":checked")==true){
				p2 = "stable=opt";
			}else p2 = "stable";
			console.log(p2);
		}
		if($(".part-0 option").eq(6).is(":checked")==true){
			stable();
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NMR
		function nmr(){
			nmr = "";
			for(var i=0;i<$(".part-1:eq(7) option").length;i++){
				if($(".part-1:eq(7) option").eq(i).is(":checked")==true){
						nmr = $(".part-1:eq(7) option").eq(i).val();
				}
			}
			
			if(nmr!=""){
				nmr = "nmr=" + nmr;
			}else nmr = "nmr";
			
			p2 = nmr;
			console.log(p2);
		}
		if($(".part-0 option").eq(7).is(":checked")==true){
			nmr();
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////BOMD
		if($(".part-0 option").eq(8).is(":checked")==true){
			p2 = "traj"
			console.log(p2);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADMP
		if($(".part-0 option").eq(9).is(":checked")==true){
			p2 = "admp"
			console.log(p2);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UFF
		if($(".part-2-1-2").css("display")=="block"){
			for(var i=0;i<$(".part-2-1-2 option").length;i++){
				if($(".part-2-1-2 option").eq(i).is(":checked")==true){
						p3 = $(".part-2-1-2 option").eq(i).val();
				}
			}
			if($(".part-2-4:eq(1) input").is(":checked")==true){
				p3 = p3 + "=qeq";
			}
			console.log(p3);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		if($(".part-2-1-1").css("display")=="block"&&$(".part-2-1:eq(3)").css("display")=="block"){
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				if($(".part-2-1:eq(3) option").eq(0).is(":checked")==true){
					p3 = "am1";
				}else if($(".part-2-1:eq(3) option").eq(1).is(":checked")==true){
					p3 = "pm3";
				}else if($(".part-2-1:eq(3) option").eq(2).is(":checked")==true){
					p3 = "pm3mm";
				}else if($(".part-2-1:eq(3) option").eq(3).is(":checked")==true){
					p3 = "mndo";
				}else if($(".part-2-1:eq(3) option").eq(4).is(":checked")==true){
					p3 = "mndo/3";
				}else if($(".part-2-1:eq(3) option").eq(5).is(":checked")==true){
					p3 = "indo";
				}else if($(".part-2-1:eq(3) option").eq(6).is(":checked")==true){
					p3 = "cndo";
				}
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				if($(".part-2-1:eq(3) option").eq(0).is(":checked")==true){
					p3 = "ram1";
				}else if($(".part-2-1:eq(3) option").eq(1).is(":checked")==true){
					p3 = "rpm3";
				}else if($(".part-2-1:eq(3) option").eq(2).is(":checked")==true){
					p3 = "rpm3mm";
				}else if($(".part-2-1:eq(3) option").eq(3).is(":checked")==true){
					p3 = "rmndo";
				}else if($(".part-2-1:eq(3) option").eq(4).is(":checked")==true){
					p3 = "rmndo/3";
				}else if($(".part-2-1:eq(3) option").eq(5).is(":checked")==true){
					p3 = "rindo";
				}else if($(".part-2-1:eq(3) option").eq(6).is(":checked")==true){
					p3 = "rcndo";
				}
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				if($(".part-2-1:eq(3) option").eq(0).is(":checked")==true){
					p3 = "uam1";
				}else if($(".part-2-1:eq(3) option").eq(1).is(":checked")==true){
					p3 = "upm3";
				}else if($(".part-2-1:eq(3) option").eq(2).is(":checked")==true){
					p3 = "upm3mm";
				}else if($(".part-2-1:eq(3) option").eq(3).is(":checked")==true){
					p3 = "umndo";
				}else if($(".part-2-1:eq(3) option").eq(4).is(":checked")==true){
					p3 = "umndo/3";
				}else if($(".part-2-1:eq(3) option").eq(5).is(":checked")==true){
					p3 = "uindo";
				}else if($(".part-2-1:eq(3) option").eq(6).is(":checked")==true){
					p3 = "ucndo";
				}
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				if($(".part-2-1:eq(3) option").eq(0).is(":checked")==true){
					p3 = "roam1";
				}else if($(".part-2-1:eq(3) option").eq(1).is(":checked")==true){
					p3 = "ropm3";
				}else if($(".part-2-1:eq(3) option").eq(2).is(":checked")==true){
					p3 = "ropm3mm";
				}else if($(".part-2-1:eq(3) option").eq(3).is(":checked")==true){
					p3 = "romndo";
				}else if($(".part-2-1:eq(3) option").eq(4).is(":checked")==true){
					p3 = "romndo/3";
				}else if($(".part-2-1:eq(3) option").eq(5).is(":checked")==true){
					p3 = "roindo";
				}else if($(".part-2-1:eq(3) option").eq(6).is(":checked")==true){
					p3 = "rocndo";
				}
			}
			
			if($(".part-2-4:eq(2) input").is(":checked")==true){
				p3 = p3 + " sparse";
			}
			console.log(p3);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////hartree
		if($(".part-2-1:eq(1) option").eq(2).is(":checked")==true){
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = "hf/"
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "rhf/"
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "uhf/"
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "rohf/"
			}
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			p3 = p31+p32+p33;
			console.log(p3);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DFT
		if($(".part-2-1:eq(1) option").eq(3).is(":checked")==true){
			for(var i=0;i<$(".part-2-1:eq(4) option").length;i++){
				/*if($(".part-2-1:eq(4) option").eq(i).is(":checked")==true){
					p31 =  
				}*/
				p31 = $(".part-2-1:eq(4) select").val().toLowerCase() + "/";
			}
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = p31
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "r" + p31
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "u" + p31
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "ro" + p31
			}
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			if($(".part-2-2:eq(4)").css("display")=="block"){
				if($(".part-2-2:eq(4) option").eq(0).is(":checked")==true){
					p34 = p34;
				}else{
					p34 = "/" + $(".part-2-2:eq(4) select").val().toLowerCase();
				}
			}
			p3 = p31+p32+p33+p34
			console.log(p3);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////mp2
		if($(".part-2-1:eq(1) option").eq(4).is(":checked")==true){
			p31 = "mp2/";
			
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = p31
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "r" + p31
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "u" + p31
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "ro" + p31
			}
			
			if($(".part-2-4:eq(3) input").is(":checked")==true){
				p31 = p31.slice(0,p31.length-1) + "=full/"
			} 
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			if($(".part-2-2:eq(4)").css("display")=="block"){
				if($(".part-2-2:eq(4) option").eq(0).is(":checked")==true){
					p34 = p34;
				}else{
					p34 = "/" + $(".part-2-2:eq(4) select").val().toLowerCase();
				}
			}
			p3 = p31+p32+p33+p34;
			console.log(p3);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////mp4
		if($(".part-2-1:eq(1) option").eq(5).is(":checked")==true){
			p31 = "mp4/";
			
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = p31
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "r" + p31
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "u" + p31
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "ro" + p31
			}
			
			if($(".part-2-4:eq(0) option").eq(0).is(":checked")==true){
				p31 = p31.slice(0,p31.length-1) + "(sdq)/"
			}else if($(".part-2-4:eq(0) option").eq(1).is(":checked")==true){
				p31 = p31.slice(0,p31.length-1) + "(sdtq)/"
			}
			
			if($(".part-2-4:eq(3) input").is(":checked")==true){
				p31 = p31.slice(0,p31.length-2) + ",full" + ")/"
			} 
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			if($(".part-2-2:eq(4)").css("display")=="block"){
				if($(".part-2-2:eq(4) option").eq(0).is(":checked")==true){
					p34 = p34;
				}else{
					p34 = "/" + $(".part-2-2:eq(4) select").val().toLowerCase();
				}
			}
			
			p3 = p31+p32+p33+p34;
			console.log(p3);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////qcisd & ccsd
		if($(".part-2-1:eq(1) option").eq(6).is(":checked")==true||$(".part-2-1:eq(1) option").eq(7).is(":checked")==true){
			if($(".part-2-1:eq(1) option").eq(6).is(":checked")==true){
				p31 = "qcisd/";
			}else if($(".part-2-1:eq(1) option").eq(7).is(":checked")==true){
				p31 = "ccsd/";
			}
			
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = p31
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "r" + p31
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "u" + p31
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "ro" + p31
			}
			
			if($(".part-2-4:eq(0)").css("display")=="block"){
				if($(".part-2-4:eq(0) option").eq(0).is(":checked")==true){
					p31 = p31
				}else if($(".part-2-4:eq(0) option").eq(1).is(":checked")==true){
					p31 = p31.slice(0,p31.length-1) + "(t)/"
				}else if($(".part-2-4:eq(0) option").eq(2).is(":checked")==true){
					p31 = p31.slice(0,p31.length-1) + "(t,e4t)/"
				}
				
				if($(".part-2-4:eq(0) option").eq(0).is(":checked")==true||$(".part-2-4:eq(3) input").is(":checked")==true){
					p31 = p31.slice(0,p31.length-1) + "(full)/"
				}
			}
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			if($(".part-2-2:eq(4)").css("display")=="block"){
				if($(".part-2-2:eq(4) option").eq(0).is(":checked")==true){
					p34 = p34;
				}else{
					p34 = "/" + $(".part-2-2:eq(4) select").val().toLowerCase();
				}
			}
			
			p3 = p31+p32+p33+p34;
			console.log(p3);
		}	
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////casscf
		if($(".part-2-1:eq(1) option").eq(6).is(":checked")==true||$(".part-2-1:eq(1) option").eq(8).is(":checked")==true){
			p31 = "casscf/";
			
			if($(".part-2-4:eq(5) input").eq(1).is(":checked")==true){
				p31 = p31.slice(0,p31.length-1) + "(" + $(".part-2-4:eq(4) input").eq(0).val() + "," + $(".part-2-4:eq(5) input").eq(0).val() + ",rfo)/"
			}else p31 = p31.slice(0,p31.length-1) + "(" + $(".part-2-4:eq(4) input").eq(0).val() + "," + $(".part-2-4:eq(5) input").eq(0).val() + ")/"
			
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = p31
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "r" + p31
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "u" + p31
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "ro" + p31
			}
			 
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			p3 = p31+p32+p33+p34;
			console.log(p3);
		}

		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////compound
		if($(".part-2-1:eq(1) option").eq(6).is(":checked")==true||$(".part-2-1:eq(1) option").eq(9).is(":checked")==true){
			p31 = "casscf/";
			
			for(var i=0;i<$(".part-2-1:eq(5) option").length;i++){
				if($(".part-2-1:eq(5) option").eq(i).is(":checked")==true){
					p31 = $(".part-2-1:eq(5) option").eq(i).val().toLowerCase();
				}
			}
			
			p3 = p31+p32+p33+p34;
			console.log(p3);
		}
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////custom
		if($(".part-2-1:eq(1) option").eq(6).is(":checked")==true||$(".part-2-1:eq(1) option").eq(10).is(":checked")==true){
			p31 = "";
			 			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			p3 = p31+p32+p33+p34;
			console.log(p3);
		}
		
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Zindo
		if($(".part-2-1:eq(0) option").eq(1).is(":checked")==true){
			p31 = "zindo";
			
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = p31
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "r" + p31
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "u" + p31
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "ro" + p31
			}
			
			for(var i=0;i<$(".part-2-4:eq(6) option").length-1;i++){
				if($(".part-2-4:eq(6) option").eq(i).is(":checked")==true){
					if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true&&$(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
						p31 = p31 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
					}else if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true){
						p31 = p31 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ")";
					}else if($(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
						p31 = p31 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
					}else p31 = p31 + "=" + $(".part-2-4:eq(6) option").eq(i).val();
				}
			}
			
			if($(".part-2-4:eq(6) option").eq(3).is(":checked")==true){
				if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true&&$(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
					p31 = p31 + "=" + "(" + "nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
				}else if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true){
					p31 = p31 + "=" + "(" + "nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ")";
				}else if($(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
					p31 = p31 + "=" + "(" + "root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
				}
			}
			
			p3 = p31+p32+p33+p34;
			console.log(p3);
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CIS
		if($(".part-2-1:eq(0) option").eq(2).is(":checked")==true){
			p31 = "zindo";
			
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = p31
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "r" + p31
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "u" + p31
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "ro" + p31
			}
			
			for(var i=0;i<$(".part-2-4:eq(6) option").length-1;i++){
				if($(".part-2-4:eq(6) option").eq(i).is(":checked")==true){
					if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true&&$(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
						p31 = p31 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
					}else if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true){
						p31 = p31 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ")";
					}else if($(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
						p31 = p31 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
					}else p31 = p31 + "=" + $(".part-2-4:eq(6) option").eq(i).val();
				}
			}
			
			if($(".part-2-4:eq(6) option").eq(3).is(":checked")==true){
				if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true&&$(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
					p31 = p31 + "=" + "(" + "nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
				}else if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true){
					p31 = p31 + "=" + "(" + "nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ")";
				}else if($(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
					p31 = p31 + "=" + "(" + "root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
				}
			}
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			p3 = p31+"/"+p32+p33+p34;
			console.log(p3);
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////SAC-CI
		if($(".part-2-1:eq(0) option").eq(3).is(":checked")==true){
			p31 = "sac-ci";
			
			if($(".part-2-1-1 option").eq(0).is(":checked")==true){
				p31 = p31
			}else if($(".part-2-1-1 option").eq(1).is(":checked")==true){
				p31 = "r" + p31
			}else if($(".part-2-1-1 option").eq(2).is(":checked")==true){
				p31 = "u" + p31
			}else if($(".part-2-1-1 option").eq(3).is(":checked")==true){
				p31 = "ro" + p31
			}
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			p3 = p31+"/"+p32+p33+p34;
			console.log(p3);
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TD-SCF
		if($(".part-2-1:eq(0) option").eq(4).is(":checked")==true){
			p30 = "td";
			
			for(var i=0;i<$(".part-2-4:eq(6) option").length-1;i++){
				if($(".part-2-4:eq(6) option").eq(i).is(":checked")==true){
					if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true&&$(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
						p30 = p30 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
					}else if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true){
						p30 = p30 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ")";
					}else if($(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
						p30 = p30 + "=" + "(" + $(".part-2-4:eq(6) option").eq(i).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
					}else p30 = p30 + "=" + $(".part-2-4:eq(6) option").eq(i).val();
				}
			}
			
			if($(".part-2-4:eq(6) option").eq(3).is(":checked")==true){
				if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true&&$(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
					p30 = p30 + "=" + "(" + "nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ",root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
				}else if($(".part-2-4:eq(7) input").eq(0).is(":checked")==true){
					p30 = p30 + "=" + "(" + "nstates=" + $(".part-2-4:eq(7) input").eq(1).val() + ")";
				}else if($(".part-2-4:eq(8) input").eq(0).is(":checked")==true){
					p30 = p30 + "=" + "(" + "root=" + $(".part-2-4:eq(8) input").eq(1).val() + ")";
				}
			}
			
			if($(".part-2-2:eq(0) option").eq(0).is(":checked")==true){
				p32 = "sto-3";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(1).is(":checked")==true){
				p32 = "3-21";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(2).is(":checked")==true){
				p32 = "6-31";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(3).is(":checked")==true){
				p32 = "6-311";
				jia_cheng();
			}else if($(".part-2-2:eq(0) option").eq(4).is(":checked")==true){
				p32 = "aug-cc-pvqz";
			}else if($(".part-2-2:eq(0) option").eq(5).is(":checked")==true){
				p32 = "lanl2dz";
			}else if($(".part-2-2:eq(0) option").eq(6).is(":checked")==true){
				p32 = "lanl2mb";
			}else if($(".part-2-2:eq(0) option").eq(7).is(":checked")==true){
				p32 = "sdd";
			}else if($(".part-2-2:eq(0) option").eq(8).is(":checked")==true){
				p32 = "dgdzvp";
			}else if($(".part-2-2:eq(0) option").eq(9).is(":checked")==true){
				p32 = "dgdzvp2";
			}else if($(".part-2-2:eq(0) option").eq(10).is(":checked")==true){
				p32 = "dgtzvp";
			}else if($(".part-2-2:eq(0) option").eq(11).is(":checked")==true){
				p31 = p31.substr(0,p31.length-1);
				p32 = "";
			}
			
			function jia_cheng(){
				p33 = "g";
				if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(1).is(":checked")==true){
					p33 = "+" + p33;
				}else if($(".part-2-2:eq(1)").css("display")=="block"&&$(".part-2-2:eq(1) option").eq(2).is(":checked")==true){
					p33 = "++" + p33;
				}
				
				if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(1).is(":checked")==true){
					p33 = p33 + "*";
				}else if($(".part-2-2:eq(2)").css("display")=="block"&&$(".part-2-2:eq(2) option").eq(2).is(":checked")==true){
					p33 = p33 + "**";
				}
				
				if($(".part-2-2:eq(3)").css("display")=="block"){
					if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()!=""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + "," + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(0).val()!=""&&$(".part-2-2:eq(3) select").eq(1).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(0).val() + ")";
					}else if($(".part-2-2:eq(3) select").eq(1).val()!=""&&$(".part-2-2:eq(3) select").eq(0).val()==""){
						p33 = p33 + "(" + $(".part-2-2:eq(3) select").eq(1).val() + ")";
					}
				}
			}
			
			p3 = p31+"/"+p32+p33+p34;
			console.log(p3);
		}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Part3
		if($(".part-3-1 input").eq(3).is(":checked")==true){
			p4 = "geom=connectivity";
		}
		if($(".part-3-1 input").eq(1).is(":checked")==true){
			p1 = p1 + "p";
		}
		if($(".part-3-1 input").eq(0).is(":checked")==true&&$(".part-3-1 input").eq(4).is(":checked")==true){	
			p4 = "nosymm scf=qc " + p4;
		}else if($(".part-3-1 input").eq(0).is(":checked")==true){
			p4 = "scf=qc " + p4;
		}else if($(".part-3-1 input").eq(4).is(":checked")==true){
			p4 = "nosymm " + p4;
		}
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Multilayer
		if($(".part-22 input").is(":checked")==true){
			p = p1+" "+"onion("+p2+" "+p3+")"+" "+p4;
		}else p = p1+" "+p2+" "+p3+" "+p4;
		
		for(var i=0;i<p.length-1;i++){
			if(p[i]=="("&&p[i+1]==" "){
				console.log("????");
				p = p.substr(0,i+1) + p.substr(i+2,p.length);
			}
		}
		
		p = "%chk=1.chk" + '\n' + "MEM=6MW" + '\n' + "nproc=1" + '\n' + p + '\n\n' + "Test" + '\n' 
		
		for(var i=0;i<$(".part-2-3 option").length;i++){
			if($(".part-2-3 option").eq(i).is(":checked")==true){
				p = p + '\n' + $(".part-2-3 input").val() + " " + $(".part-2-3 option").eq(i).val();
			}
			
		}

		function fix_file_line(symbol, x, y, z) {
			var str = ' ' + symbol;
			var index = x.indexOf('.');
			for(var i = symbol.length; i < 20 - index; i++) {
				str = str + ' ';
			}
			str = str + x;
			index = y.indexOf('.');
			for(var i = 0; i < 6 - index; i++) {
				str = str + ' ';
			}
			str = str + y;
			index = z.indexOf('.');
			for(var i = 0; i < 6 - index; i++) {
				str = str + ' ';
			}
			str = str + z;
			return str;
		}

		molecule = Mol();
		console.log(molecule);

        for(var i = 1; i <= molecule[0].numatoms; i++) {
        	p = p + '\n' + fix_file_line(element(molecule[i].atomicnumber, "symbol"), molecule[i].x.toFixed(8) + '', molecule[i].y.toFixed(8) + '', molecule[i].z.toFixed(8) + '');
        }

		console.log(p);
		
		function download(filename,text){
			var element = document.createElement('a');
			element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			element.setAttribute('download', filename);
			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element)
		}
		download("Gaussian.gjf",p);	

	})
})

//
// -------------------- VASP --------------------
//

///
/// Generate kpoints file
///
function kpointsACK(){
  var molecule = Mol();
  if(molecule[0].type == "molecule"){
    alert("Unable to generate kpoints file regards aperiodic molecule!");
  }else{
    var line1 = "k-points"+"\r\n";
    var line2 = "0"+"\r\n";
    var line3 = document.getElementById("generation methods").value+"\r\n";
    var line4 = "";
    var kpointset = document.getElementById("kpointset").value;
    var a1 = parseFloat(transformMatrix(1,0,0)[0]);
    var a2 = parseFloat(transformMatrix(1,0,0)[1]);
    var a3 = parseFloat(transformMatrix(1,0,0)[2]);
    var b1 = parseFloat(transformMatrix(0,1,0)[0]);
    var b2 = parseFloat(transformMatrix(0,1,0)[1]);
    var b3 = parseFloat(transformMatrix(0,1,0)[2]);
    var c1 = parseFloat(transformMatrix(0,0,1)[0]);
    var c2 = parseFloat(transformMatrix(0,0,1)[1]);
    var c3 = parseFloat(transformMatrix(0,0,1)[2]);
    var omega = a1*(b2*c3-b3*c2) + a2*(b3*c1-b1*c3) + a3*(b1*c2-b2*c1);
    var b11 = 2*Math.PI*(b2*c3-b3*c2)/omega;
    var b12 = 2*Math.PI*(b3*c1-b1*c3)/omega;
    var b13 = 2*Math.PI*(b1*c2-b2*c1)/omega;
    b11 = b11.toFixed(6);b12 = b12.toFixed(6);b13 = b13.toFixed(6);
    var vb1 = [];
    vb1.push(b11);vb1.push(b12);vb1.push(b13);
    var b21 = 2*Math.PI*(c2*a3-c3*a2)/omega;
    var b22 = 2*Math.PI*(c3*a1-c1*a3)/omega;
    var b23 = 2*Math.PI*(c1*a2-c2*a1)/omega;
    b21 = b21.toFixed(6);b22 = b22.toFixed(6);b23 = b23.toFixed(6);
    var vb2 = [];
    vb2.push(b21);vb2.push(b22);vb2.push(b23);
    var b31 = 2*Math.PI*(a2*b3-a3*b2)/omega;
    var b32 = 2*Math.PI*(a3*b1-a1*b3)/omega;
    var b33 = 2*Math.PI*(a1*b2-a2*b1)/omega;
    b31 = b31.toFixed(6);b32 = b32.toFixed(6);b33 = b33.toFixed(6);
    var vb3 = [];
    vb3.push(b31);vb3.push(b32);vb3.push(b33);
    var rlc_1 = Math.sqrt(vb1[0]*vb1[0]+vb1[1]*vb1[1]+vb1[2]*vb1[2]);
    var rlc_2 = Math.sqrt(vb2[0]*vb2[0]+vb2[1]*vb2[1]+vb2[2]*vb2[2]);
    var rlc_3 = Math.sqrt(vb3[0]*vb3[0]+vb3[1]*vb3[1]+vb3[2]*vb3[2]);
    rlc_1 = rlc_1.toFixed(6);
    rlc_2 = rlc_2.toFixed(6);
    rlc_3 = rlc_3.toFixed(6);
    // InfoWin("rlc_1:"+rlc_1+"\n");
    // InfoWin("rlc_2:"+rlc_2+"\n");
    // InfoWin("rlc_3:"+rlc_3+"\n");
    var kpresolv = 0; 
    if(kpointset == "Coarse"){
      kpresolv = 0.07;
    }else if(kpointset == "Medium"){
      kpresolv = 0.05;
    }else if(kpointset == "Fine"){
      kpresolv = 0.04;
    }
    var k1 = 0; var k2 = 0; var k3 = 0;
    if(kpointset !== "Gamma"){
      k1 = rlc_1/(2*Math.PI*kpresolv) ;
      k2 = rlc_2/(2*Math.PI*kpresolv) ;
      k3 = rlc_3/(2*Math.PI*kpresolv) ;
    }else{
      k1 = 1;
      k2 = 1;
      k3 = 1;
    }
    line4 = Math.round(k1) + " " + Math.round(k2) + " " + Math.round(k3) +"\r\n";
    // InfoWin(k1+" "+k2+" "+k3+"\n");
    // InfoWin("result:"+line4);
    var line5 = "0 0 0"+"\r\n";
    var textcontent = line1 + line2 + line3 +line4 + line5;
    download("k-point.txt",textcontent);
  }
}

///
/// Generate poscar file
///
function poscar(){
  var molecule = Mol();
  if(molecule[0].type == "molecule"){
    alert("Unable to generate poscar file regards aperiodic molecule！")
  }else{
    var line1 = "project name"+"\r\n";
    var line2 = "1.00000000000000"+"\r\n";
    var line3 = transformMatrix(1,0,0)[0].toFixed(14)+" "+transformMatrix(1,0,0)[1].toFixed(14)+" "+transformMatrix(1,0,0)[2].toFixed(14)+"\r\n";
    var line4 = transformMatrix(0,1,0)[0].toFixed(14)+" "+transformMatrix(0,1,0)[1].toFixed(14)+" "+transformMatrix(0,1,0)[2].toFixed(14)+"\r\n";
    var line5 = transformMatrix(0,0,1)[0].toFixed(14)+" "+transformMatrix(0,0,1)[1].toFixed(14)+" "+transformMatrix(0,0,1)[2].toFixed(14)+"\r\n";
    var atomtype = [];
    var atomnum = [];
    for(var i = 1;i <= molecule[0].numatoms; i++){
      var A = molecule[i].atomicnumber;
      var label = element(A,"symbol");
      var isadd = true;
      for(var j = 0; j < atomtype.length; j++){
        if(label == atomtype[j]){
          atomnum[j]++;
          isadd = false;
          break;
        }
      }
      if(isadd == true){
        atomtype.push(label);
        atomnum.push(1);
      }
    }
    var line6 = "";
    for(var i = 0; i < atomtype.length; i++){
      line6 = line6 + atomtype[i] + " ";
    }
    line6+="\r\n";
    var line7 = "";
    for(var j = 0; j <atomnum.length; j++){
      line7 = line7 +atomnum[j] + " ";
    }
    line7+="\r\n";
    var line8 = "Selective dynamic"+"\r\n";
    var line9 = "Direct"+"\r\n";
    var lines = "";
    for(var j = 0; j < atomtype.length; j++){
      for(var i = 1;i <= molecule[0].numatoms; i++){
        var A = molecule[i].atomicnumber;
        var label = element(A,"symbol");   
        if(label == atomtype[j]){
          lines+=molecule[i].originalx.toFixed(14) + " " + molecule[i].originaly.toFixed(14) + " " + molecule[i].originalz.toFixed(14) + " T T T" + "\r\n";
        }
      } 
    }
    lines+="\r\n";
    var textcontent = line1+line2+line3+line4+line5+line6+line7+line8+line9+lines;
    download("poscar.txt",textcontent);
  }
}

//
// incar1
//
$(document).ready(function(){
	$("#incar_top_2").on("click",function(){
		$("#incar_top_2").css("border-bottom","none");
		$("#incar_top_1").css("border-bottom","#999 inset 5px");
		$("#incar_top_3").css("border-bottom","#999 inset 5px");
		$("#I").css("z-index","110");
		$("#S-O-P").css("z-index","100");
		$("#G-S").css("z-index","90");
	});
	$("#incar_top_3").on("click",function(){
		$("#incar_top_3").css("border-bottom","none");
		$("#incar_top_1").css("border-bottom","#999 inset 5px");
		$("#incar_top_2").css("border-bottom","#999 inset 5px");
		$("#G-S").css("z-index","110");
		$("#S-O-P").css("z-index","100");
		$("#I").css("z-index","90");
	});
	$("#incar_top_1").on("click",function(){
		$("#incar_top_1").css("border-bottom","none");
		$("#incar_top_2").css("border-bottom","#999 inset 5px");
		$("#incar_top_3").css("border-bottom","#999 inset 5px");
		$("#S-O-P").css("z-index","110");
		$("#I").css("z-index","100");
		$("#G-S").css("z-index","90");
	});
	
	if($(".incar_part-2-1 option").eq(0).is(":checked")==true){
		$(".incar_part-2-2").css("display","none");
		$(".incar_part-2-3 select").attr("disabled", false);
		$(".incar_part-2-3 label").css("color","#000");
		$(".incar_part-2-4 select").attr("disabled", true);
		$(".incar_part-2-4 label").css("color","#CCC");
	}
	
	$(".incar_part-2-1 select").on("click",function(){
		if($(".incar_part-2-1 option").eq(0).is(":checked")==true){
			$(".incar_part-2-2").css("display","none");
			$(".incar_part-2-3 select").attr("disabled", false);
			$(".incar_part-2-3 label").css("color","#000");
			$(".incar_part-2-4 select").attr("disabled", true);
			$(".incar_part-2-4 label").css("color","#CCC");
		}
		
		if($(".incar_part-2-1 option").eq(1).is(":checked")==true){
			$(".incar_part-2-2").css("display","block");
			$(".incar_part-2-2 label").html("Type of Van der Waals functional:");
			$(".incar_part-2-2 select").val("optB86b-vdW"); 
			$(".Van_der").css("display","block");
			$(".meta_GGA").css("display","none");
			$(".hybrid").css("display","none");
			$(".incar_part-2-3 select").attr("disabled", true);
			$(".incar_part-2-3 label").css("color","#CCC");
			$(".incar_part-2-4 select").attr("disabled", true);
			$(".incar_part-2-4 label").css("color","#CCC");
		}
		
		if($(".incar_part-2-1 option").eq(2).is(":checked")==true){
			$(".incar_part-2-2").css("display","block");
			$(".incar_part-2-2 label").html("Type of meta-GGA:");
			$(".incar_part-2-2 select").val("revTPSS");
			$(".Van_der").css("display","none");
			$(".meta_GGA").css("display","block");
			$(".hybrid").css("display","none");
			$(".incar_part-2-3 select").attr("disabled", true);
			$(".incar_part-2-3 label").css("color","#CCC");
			$(".incar_part-2-4 select").attr("disabled", true);
			$(".incar_part-2-4 label").css("color","#CCC");
		}
		
		if($(".incar_part-2-1 option").eq(3).is(":checked")==true){
			$(".incar_part-2-2").css("display","block");
			$(".incar_part-2-2 label").html("Type of hybrid functional:");
			$(".incar_part-2-2 select").val("HSE06");
			$(".hybrid").css("display","block");
			$(".Van_der").css("display","none");
			$(".meta_GGA").css("display","none");
			$(".incar_part-2-3 select").attr("disabled", false);
			$(".incar_part-2-3 label").css("color","#000");
			
			$(".incar_part-2-4 select").attr("disabled", true);
			$(".incar_part-2-4 label").css("color","#CCC");
		}
		
		if($(".incar_part-2-1 option").eq(4).is(":checked")==true){
			$(".incar_part-2-2").css("display","none");
			$(".incar_part-2-3 select").attr("disabled", false);
			$(".incar_part-2-3 label").css("color","#000");
			$(".incar_part-2-4 select").attr("disabled", true);
			$(".incar_part-2-4 label").css("color","#CCC");
		}
		
		if($(".incar_part-2-1 option").eq(5).is(":checked")==true){
			$(".incar_part-2-2").css("display","none");
			$(".incar_part-2-3 select").attr("disabled", false);
			$(".incar_part-2-3 label").css("color","#000");
			$(".incar_part-2-4 select").attr("disabled", true);
			$(".incar_part-2-4 label").css("color","#CCC");
		}
	})
	
	$(".incar_part-2-2 select").on("click",function(){
		if($(".incar_part-2-1 option").eq(2).is(":checked")==true){
			if($(".meta_GGA").eq(1).is(":checked")==true||$(".meta_GGA").eq(3).is(":checked")==true||$(".meta_GGA").eq(4).is(":checked")==true||$(".meta_GGA").eq(5).is(":checked")==true||$(".meta_GGA").eq(6).is(":checked")==true){
				$(".incar_part-2-4 select").attr("disabled", false);
				$(".incar_part-2-4 label").css("color","#000");
			}else{
				$(".incar_part-2-4 select").attr("disabled", true);
				$(".incar_part-2-4 label").css("color","#CCC");
			}
		}
		
		if($(".incar_part-2-1 option").eq(3).is(":checked")==true){
			
			if($(".hybrid").eq(2).is(":checked")==true){
				
				$(".incar_part-2-3 select").attr("disabled", true);
				$(".incar_part-2-3 label").css("color","#CCC");
				$(".incar_part-2-4 select").attr("disabled", false);
				$(".incar_part-2-4 label").css("color","#000");
			}else{
				$(".incar_part-2-3 select").attr("disabled", false);
				$(".incar_part-2-3 label").css("color","#000");
				$(".incar_part-2-4 select").attr("disabled", true);
				$(".incar_part-2-4 label").css("color","#CCC");
			}
		}
	})
	
	$(".incar_part-2-3 select").on("click",function(){
		if($(".incar_part-2-1 option").eq(3).is(":checked")==true){
			if($(".incar_part-2-3 option").eq(3).is(":checked")==true){
				$(".incar_part-2-4 select").attr("disabled", false);
				$(".incar_part-2-4 label").css("color","#000");
			}else{
				$(".incar_part-2-4 select").attr("disabled", true);
				$(".incar_part-2-4 label").css("color","#CCC");
			}
		}
	})
	
	$(".incar_part-3-1 select").on("click",function(){
		if($(".incar_part-3-1 option").eq(0).is(":checked")==true){
			$(".incar_part-3-3 div").eq(0).html("300.00");
		}
		
		if($(".incar_part-3-1 option").eq(1).is(":checked")==true){
			$(".incar_part-3-3 div").eq(0).html("400.00");
		}
		
		if($(".incar_part-3-1 option").eq(2).is(":checked")==true){
			$(".incar_part-3-3 div").eq(0).html("400.00");
		}
		
		if($(".incar_part-3-1 option").eq(3).is(":checked")==true){
			$(".incar_part-3-3 div").eq(0).html("500.00");
		}
	})
	
	
});

//
// incar2
//
$(document).ready(function(){

  /*part-1****************************************************************************************************/	
    var ISIF;
    var IBRION;
    var EDIFFG;
    var NSW;
    var NBLOCK;
    $("#test_1").on("click",function(){
      if($(".incar_part-1-1 input").eq(0).is(":checked")==true){
        ISIF = 2;
        
      }else if($(".incar_part-1-1 input").eq(1).is(":checked")==true){
        ISIF = 7;
        
      }else if($(".incar_part-1-1 input").eq(2).is(":checked")==true){
        ISIF = 5;
      }
      
      if($(".incar_part-1-1 input").eq(1).is(":checked")==true&&$(".incar_part-1-1 input").eq(2).is(":checked")==true){
        ISIF = 6;
      }
      
      if($(".incar_part-1-1 input").eq(0).is(":checked")==true&&$(".incar_part-1-1 input").eq(2).is(":checked")==true){
        ISIF = 4;
      }
      
      if($(".incar_part-1-1 input").eq(0).is(":checked")==true&&$(".incar_part-1-1 input").eq(1).is(":checked")==true&&$(".incar_part-1-1 input").eq(2).is(":checked")==true){
        ISIF = 3;
      }
      
      if($(".incar_part-1-1 input").eq(0).is(":checked")==true&&$(".incar_part-1-1 input").eq(1).is(":checked")==true&&$(".incar_part-1-1 input").eq(2).is(":checked")==false){
        ISIF = undefined;
      }
      
      if($(".incar_part-1-1 input").eq(0).is(":checked")==false&&$(".incar_part-1-1 input").eq(1).is(":checked")==false&&$(".incar_part-1-1 input").eq(2).is(":checked")==false){
        ISIF = undefined;
      }
      
      if($(".incar_part-1-2 option").eq(0).is(":checked")==true){
        IBRION = 2;
      }else{
        IBRION = 1;
      }
      
      /*console.log(ISIF);
      console.log(IBRION);*/
      
      EDIFFG = $(".incar_part-1-3 input").eq(0).val();
      NSW = $(".incar_part-1-3 input").eq(1).val();
      NBLOCK = $(".incar_part-1-3 input").eq(2).val();
      
      /*console.log(EDIFFG+" "+NSW+" "+NBLOCK)*/
    })
  /*part-2**********************************************************************************************************/
    var GGA;
    var LUSE_VDW;
    var LASPH;
    var LTHOMAS;
    var AGGAC;
    var PARAM1;
    var PARAM2;
    var Zab_vdW;
    var METAGGA;
    var BPARAM;
    var LMIXTAU;
    var IVDW;
    var VDW_S6; 
    var VDW_S8;   
    var VDW_SR;
    var VDW_A1;
    var VDW_A2;
    var VDW_SCALING;
    var LVDW;
    var LHFCALC;
    var HFSCREEN;
    var PRECFOCK;
    var ALGO;
    var TIME;
    var LMAXFOCK;
    var NKREDX;
    var NKREDY;
    var NKREDZ;
    var ALDAX;
    var AGGAX;
    var AGGAC;
    var ALDAC;
    var AEXX;
    var ISPIN;
    var LNONCOLLINEAR;
    var LSORBIT;
     
    function reset_parameters(){
      GGA = undefined;
      LUSE_VDW = undefined;
      LASPH = undefined;
      AGGAC = undefined;
      PARAM1 = undefined;
      PARAM2 = undefined;
      Zab_vdW = undefined;
      METAGGA = undefined;
      BPARAM = undefined;
      LMIXTAU = undefined;
      IVDW = undefined;
      VDW_S6 = undefined; 
      VDW_S8 = undefined;   
      VDW_SR = undefined; 
      VDW_A1 = undefined;
      VDW_A2 = undefined;
      LVDW = undefined;
      LHFCALC = undefined;//17
      HFSCREEN = undefined;
      PRECFOCK = undefined;
      ALGO = undefined;
      TIME = undefined;
      LMAXFOCK = undefined;
      NKREDX = undefined;
      NKREDY = undefined;
      NKREDZ = undefined;//25
      ALDAX = undefined;
      AGGAX = undefined;
      AGGAC = undefined;
      ALDAC = undefined;
      AEXX = undefined;
      LTHOMAS = undefined;
      ISPIN = undefined;
      LNONCOLLINEAR = undefined;
      LSORBIT = undefined;
    }
    $("#test_1").on("click",function(){
      reset_parameters();
      if($(".incar_part-2-1 option").eq(0).is(":checked")==true){
        if($(".incar_part-2-3 option").eq(0).is(":checked")==true){
          GGA = undefined;
        }else if($(".incar_part-2-3 option").eq(1).is(":checked")==true){
          GGA = "AM";
        }else if($(".incar_part-2-3 option").eq(2).is(":checked")==true){
          GGA = "PS";
        }else if($(".incar_part-2-3 option").eq(3).is(":checked")==true){
          GGA = undefined;
        }else if($(".incar_part-2-3 option").eq(4).is(":checked")==true){
          GGA = "RP";
        }else if($(".incar_part-2-3 option").eq(5).is(":checked")==true){
          GGA = "B5";
        }
      }else if($(".incar_part-2-1 option").eq(1).is(":checked")==true){
        if($(".Van_der").eq(0).is(":checked")==true){
          LUSE_VDW = '.TRUE.'
          LASPH = '.TRUE.' 
          AGGAC = "0.0000" 
          GGA = "MK"                           
          PARAM1 = "0.1234"
          PARAM2 = "1.0000"
        }else if($(".Van_der").eq(1).is(":checked")==true){
          LUSE_VDW = '.TRUE.'
          LASPH = '.TRUE.' 
          AGGAC = "0.0000" 
          GGA = "BO"                             
          PARAM1 = "0.1833333333"  
          PARAM2 = "0.2200000000"
        }else if($(".Van_der").eq(2).is(":checked")==true){
          LUSE_VDW = '.TRUE.'
          LASPH = '.TRUE.' 
          AGGAC = "0.0000" 
          GGA = "OR"                             
        }else if($(".Van_der").eq(3).is(":checked")==true){
          LUSE_VDW = '.TRUE.'
          LASPH = '.TRUE.' 
          AGGAC = "0.0000" 
          GGA = "BF"
          Zab_vdW = "-1.8867"                             
        }else if($(".Van_der").eq(4).is(":checked")==true){
          LUSE_VDW = '.TRUE.'
          LASPH = '.TRUE.' 
          AGGAC = "0.0000" 
          GGA = "MK"
          PARAM1 = "0.1234" 
          PARAM2 =  "0.711357" 
          Zab_vdW = "-1.8867"                             
        }else if($(".Van_der").eq(5).is(":checked")==true){
          LUSE_VDW = '.TRUE.'
          LASPH = '.TRUE.' 
          AGGAC = "0.0000" 
          GGA = "RE"                             
        }else if($(".Van_der").eq(6).is(":checked")==true){
          LUSE_VDW = '.TRUE.'
          LASPH = '.TRUE.' 
          AGGAC = "0.0000" 
          GGA = "ML"  
          Zab_vdW = "-1.8867"                           
        }else if($(".Van_der").eq(7).is(":checked")==true){
          LUSE_VDW = '.TRUE.'
          LASPH = '.TRUE.' 
          METAGGA = "SCAN"      
          BPARAM = "15.7"         
        }
      }else if($(".incar_part-2-1 option").eq(2).is(":checked")==true){
        LASPH = ".TRUE." 
        LMIXTAU = ".TRUE."
        
        if($(".meta_GGA").eq(1).is(":checked")==true||$(".meta_GGA").eq(3).is(":checked")==true||$(".meta_GGA").eq(4).is(":checked")==true||$(".meta_GGA").eq(5).is(":checked")==true||$(".meta_GGA").eq(6).is(":checked")==true){
          if($(".incar_part-2-4 option").eq(1).is(":checked")==true){
            IVDW = "11"
            VDW_S6 = "1.0" 
            VDW_S8 = "1.105"   
            VDW_SR = "1.166" 
          }else if($(".incar_part-2-4 option").eq(2).is(":checked")==true){
            IVDW = "12"
            VDW_S6 = "1.000" 
            VDW_S8 = "1.9435"   
            VDW_A1 = "0.4535" 
            VDW_A2 = "4.4752"
          }else if($(".incar_part-2-4 option").eq(3).is(":checked")==true){
            LVDW = ".TRUE."
            IVDW = "2"
            VDW_SR = "0.86"
          }
        }
        
        if($(".meta_GGA").eq(0).is(":checked")==true){
          METAGGA = "RTPSS"
        }else if($(".meta_GGA").eq(1).is(":checked")==true){
          METAGGA = "TPSS"
        }else if($(".meta_GGA").eq(2).is(":checked")==true){
          METAGGA = "SCAN"
        }else if($(".meta_GGA").eq(3).is(":checked")==true){
          METAGGA = "MS2"
        }else if($(".meta_GGA").eq(4).is(":checked")==true){
          METAGGA = "MS1"
        }else if($(".meta_GGA").eq(5).is(":checked")==true){
          METAGGA = "MS0"
        }else if($(".meta_GGA").eq(6).is(":checked")==true){
          METAGGA = "M06L"
        }else if($(".meta_GGA").eq(6).is(":checked")==true){
          METAGGA = "MBJ"
        }
      }else if($(".incar_part-2-1 option").eq(3).is(":checked")==true){
        LHFCALC = ".TRUE."
        //HFSCREEN = "0.2"
        PRECFOCK = "Normal"
        ALGO = "Damped"
        TIME = "0.4"
        LMAXFOCK = "4"
        NKREDX = "1"
        NKREDY = "1"
        NKREDZ = "1"
        if($(".hybrid").eq(0).is(":checked")==true){
          HFSCREEN = "0.2"
          if($(".incar_part-2-3 option").eq(2).is(":checked")==true){
            GGA = "PS"
          }else if($(".incar_part-2-3 option").eq(3).is(":checked")==true){
            if($(".incar_part-2-4 option").eq(2).is(":checked")==true){
              IVDW = "12" 
              VDW_S6 = "1.000" 
              VDW_S8 = "2.310" 
              VDW_A1 = "0.383" 
              VDW_A2 = "5.685"
            }else if($(".incar_part-2-4 option").eq(3).is(":checked")==true){
              LVDW = ".TRUE. "
              IVDW = "2"
              VDW_SR = "0.96"
            }
          }
        }else if($(".hybrid").eq(1).is(":checked")==true){
          if($(".incar_part-2-3 option").eq(1).is(":checked")==true){
            GGA = "AM"
          }else if($(".incar_part-2-3 option").eq(2).is(":checked")==true){
            GGA = "PS"
          }else if($(".incar_part-2-3 option").eq(4).is(":checked")==true){
            GGA = "RP"
          }else if($(".incar_part-2-3 option").eq(5).is(":checked")==true){
            GGA = "B5" 
            ALDAX = "1.00" 
            AGGAX = "1.00" 
            AGGAC = "1.00" 
            ALDAC = "0.00"
          }else if($(".incar_part-2-3 option").eq(3).is(":checked")==true){
            if($(".incar_part-2-4 option").eq(1).is(":checked")==true){
              IVDW = "11"
              VDW_S6 = "1.0" 
              VDW_S8 = "0.928" 
              VDW_SR = "1.287"
            }else if($(".incar_part-2-4 option").eq(2).is(":checked")==true){
              IVDW = "12" 
              VDW_S6 = "1.000" 
              VDW_S8 = "1.2177" 
              VDW_A1 = "0.4145" 
              VDW_A2 = "4.8593"
            }else if($(".incar_part-2-4 option").eq(3).is(":checked")==true){
              LVDW = ".TRUE." 
              IVDW = "2" 
              VDW_SR = "0.96"
            }else if($(".incar_part-2-4 option").eq(6).is(":checked")==true){
              IVDW = "4" 
              VDW_S6 = "12.48" 
              VDW_SR = "1.36"
            }
          }
        }else if($(".hybrid").eq(2).is(":checked")==true){
          GGA = "B3" 
          AEXX = "0.2" 
          AGGAX = "0.72" 
          AGGAC = "0.81" 
          ALDAC = "0.19" 
          if($(".incar_part-2-4 option").eq(1).is(":checked")==true){
            IVDW = "11"
            VDW_S6 = "1.0" 
            VDW_S8 = "1.703" 
            VDW_SR = "1.261"
          }else if($(".incar_part-2-4 option").eq(2).is(":checked")==true){
            IVDW = "12" 
            VDW_S6 = "1.000" 
            VDW_S8 = "1.9889" 
            VDW_A1 = "0.3981" 
            VDW_A2 = "4.4211"
          }else if($(".incar_part-2-4 option").eq(3).is(":checked")==true){
            LVDW = ".TRUE." 
            IVDW = "2" 
            VDW_SR = "0.84"
          }else if($(".incar_part-2-4 option").eq(6).is(":checked")==true){
            IVDW = "4" 
            VDW_S6 = "4.89" 
            VDW_SR = "1.78"
          }else if($(".incar_part-2-4 option").eq(7).is(":checked")==true){
            IVDW = "1"
            LVDW = ".TRUE." 
            VDW_S6 = "1.05" 
            VDW_SCALING = "1.05"
          }
        }
      }else if($(".incar_part-2-1 option").eq(4).is(":checked")==true){
        LHFCALC = ".TRUE."
        LTHOMAS = ".TRUE."
        HFSCREEN = "1.8" 
        PRECFOCK = "Normal"
        ALGO = "Damped"
        TIME = "0.4"
        LMAXFOCK = "4"
        NKREDX = "1"
        NKREDY = "1"
        NKREDZ = "1"
        /*AEXX = "1.0" 
        ALDAC = "0.0" 
        AGGAC = "0.0" */
        if($(".incar_part-2-3 option").eq(1).is(":checked")==true){
          GGA = "AM"
        }else if($(".incar_part-2-3 option").eq(2).is(":checked")==true){
          GGA = "PS"
        }else if($(".incar_part-2-3 option").eq(4).is(":checked")==true){
          GGA = "RP"
        }else if($(".incar_part-2-3 option").eq(5).is(":checked")==true){
          GGA = "B5" 
          ALDAX = "1.00" 
          AGGAX = "1.00" 
          AGGAC = "1.00" 
          ALDAC = "0.00"
        }
      }else if($(".incar_part-2-1 option").eq(5).is(":checked")==true){
        LHFCALC = ".TRUE."
        AEXX = "1.0" 
        ALDAC = "0.0" 
        AGGAC = "0.0" 
        //HFSCREEN = "1.8" 
        PRECFOCK = "Normal"
        ALGO = "Damped"
        TIME = "0.4"
        LMAXFOCK = "4"
        NKREDX = "1"
        NKREDY = "1"
        NKREDZ = "1"
        /*AEXX = "1.0" 
        ALDAC = "0.0" 
        AGGAC = "0.0" */
        if($(".incar_part-2-3 option").eq(1).is(":checked")==true){
          GGA = "AM"
        }else if($(".incar_part-2-3 option").eq(2).is(":checked")==true){
          GGA = "PS"
        }else if($(".incar_part-2-3 option").eq(4).is(":checked")==true){
          GGA = "RP"
        }else if($(".incar_part-2-3 option").eq(5).is(":checked")==true){
          GGA = "B5" 
          ALDAX = "1.00" 
          AGGAX = "1.00" 
          ALDAC = "0.00"
        }
      }
      
      if($(".incar_part-2-5 option").eq(0).is(":checked")==true){
        ISPIN = "1"
      }else if($(".incar_part-2-5 option").eq(1).is(":checked")==true){
        ISPIN = "1"
      }else if($(".incar_part-2-5 option").eq(2).is(":checked")==true){
        ISPIN = "2"
      }else if($(".incar_part-2-5 option").eq(3).is(":checked")==true){
        LNONCOLLINEAR = ".TRUE." 
      }else if($(".incar_part-2-5 option").eq(4).is(":checked")==true){
        LSORBIT = ".TRUE." 
      }
      
    })
    
    
      
  /*part-3**********************************************************************************************************/
    var PREC;
    var ENCUT;
    var LREAL;
    $("#test_1").on("click",function(){
      PREC = $(".incar_part-3-1 select").val();
      
      if($(".incar_part-3-3:eq(1) input").val()!=""){
        ENCUT = $(".incar_part-3-3:eq(1) input").val();
      }else if($(".incar_part-3-2 input").eq(0).is(":checked")==true){
        ENCUT = "520.00";
      }else{
        ENCUT = $(".incar_part-3-3:eq(0) div").html();
      }
      
      if($(".incar_part-3-4 option").eq(0).is(":checked")==true){
        LREAL = ".FALSE.";
      }else{
        LREAL = "Auto";
      }
      
      var parameters={
        "ISIF":ISIF,
        "IBRION":IBRION,
        "EDIFFG":EDIFFG,
        "NSW":NSW,
        "NBLOCK":NBLOCK,
        "PREC":PREC,
        "ENCUT":ENCUT,
        "LREAL":LREAL,
        "GGA":GGA,
        "LUSE_VDW":LUSE_VDW,
        "LASPH":LASPH,
        "LTHOMAS":LTHOMAS,
        "AGGAC":AGGAC,
        "PARAM1":PARAM1,
        "PARAM2":PARAM2,
        "Zab_vdW":Zab_vdW,
        "METAGGA":METAGGA,
        "BPARAM":BPARAM,
        "LMIXTAU":LMIXTAU,
        "IVDW":IVDW,
        "VDW_S6":VDW_S6,
        "VDW_S8":VDW_S8, 
        "VDW_SR":VDW_SR,
        "VDW_A1":VDW_A1,
        "VDW_A2":VDW_A2,
        "VDW_SCALING":VDW_SCALING,
        "LVDW":LVDW,
        "LHFCALC":LHFCALC,
        "HFSCREEN":HFSCREEN,
        "PRECFOCK":PRECFOCK,
        "ALGO":ALGO,
        "TIME":TIME,
        "LMAXFOCK":LMAXFOCK,
        "NKREDX":NKREDX,
        "NKREDY":NKREDY,
        "NKREDZ":NKREDZ,
        "ALDAX": ALDAX,
        "AGGAX":AGGAX,
        "AGGAC":AGGAC,
        "ALDAC":ALDAC,
        "AEXX":AEXX,
        "ISPIN":ISPIN,
        "LNONCOLLINEAR":LNONCOLLINEAR,
        "LSORBIT":LSORBIT
      }
      var parameters2=[
        ISIF,
        IBRION,
        EDIFFG,
        NSW,
        NBLOCK,
        ENCUT,
        LREAL,
        GGA,
        LUSE_VDW,
        LASPH,
        AGGAC,
        PARAM1,
        PARAM2,
        Zab_vdW,
        METAGGA,
        BPARAM,
        LMIXTAU,
        IVDW,
        VDW_S6,
        VDW_S8, 
        VDW_SR,
        VDW_A1,
        VDW_A2,
        VDW_SCALING,
        LVDW,
        LHFCALC,
        HFSCREEN,
        PRECFOCK,
        ALGO,
        TIME,
        LMAXFOCK,
        NKREDX,
        NKREDY,
        NKREDZ,
        ALDAX,
        AGGAX,
        AGGAC,
        ALDAC,
        AEXX,
        LTHOMAS,
        ISPIN,
        LNONCOLLINEAR,
        LSORBIT
      ]
      console.log(parameters);
      /*var parameters4 = JSON.stringify(parameters);
      parameters4 = parameters4.split(",").join("__");
      layer.open({
        type: 1,
        title:"INCAR RESULT",
        skin: 'layui-layer-lan', //加上边框
        area: ['620px', '440px'], //宽高
        content: parameters4
      });*/
      parameters = JSON.stringify(parameters);	
      function download(filename,text){
        var element = document.createElement('a');
        element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element)
      }
       var molecule = Mol();
       if(molecule[0].type == "molecule"){
          alert("Unable to generate kpoints file regards aperiodic molecule!");
       }else{
      download("incar.txt",parameters);}
    });
  });




//
// -------------------- EXPLORER & CONTROL --------------------
//


///
///  Private routine to store name for active window.
///
///  Parameter:
///    mywin = If name of window exists, then set as active window/molecule.
///            Otherwise, create new window with this name.
/// 
///  Return value:
///    Name of active Canvas/window
///
function activeWin(mywin) {

  // Declare local variables
  var i, active;
  var param = mywin || " ";

  // Initialize links
  if (typeof activeWin.mol === "undefined") {
    activeWin.mol = [];
    activeWin.mol[0] = "Dummy";
    }

  // Define defaults for active window and molecule
  if (typeof activeWin.win === "undefined") {
    var tag = document.getElementsByTagName("canvas");
    if ( tag[0] ) {
        activeWin.win = tag[0].id;
        activeWin.mol[1] = activeWin.win;
      } else {
        // alert("No canvas element found.");
        return;
      }
    }

  // User requested to set/view Window information
  if ( param.length > 1 )
    activeWin.win = param;

  // Find active molecule
  active=-1;
  for (i=0; i<activeWin.mol.length; i++)
    if ( activeWin.mol[i] == activeWin.win )
      active = i;

  // If requested window not found, add to list
  if ( active < 0 ) {
    active = activeWin.mol.length;
    activeWin.mol[active] = activeWin.win;
    }

  // Make correct molecule active
  Mol(active);

  // Define routines used to handle mouse events
  var canvas = document.getElementById(activeWin.win);
  if ( canvas ) {
    canvas.onmousedown = MouseDown;
    document.onmouseup = MouseUp;
    canvas.onmousemove = MouseMove;
    canvas.addEventListener("mousewheel", MouseWheel, false);  // IE9,Chrome,Safari,Opera
    canvas.addEventListener("DOMMouseScroll", MouseWheel, false); // Firefox
    canvas.addEventListener("touchstart", MouseDown);
    canvas.addEventListener("touchend", MouseUp);
    canvas.addEventListener("touchmove", MouseMove);
    }
    
  // Finished with activeWin routine
  return activeWin.win;
  }

//#   function initialize()
//#
//#   Initialization Routines
//#     - Load properties of elements
//#     - Define Handlers for mouse events
//#     - Draw molecule
//#
function initialize() {

  // Define handler for drawing area (canvas)
  // activeWin defines routines to handle mouse events
  var activeCanvas = activeWin();
  var molfile = document.getElementById('molfile');

  // If no canvas element found, see if userDefined() creates one.
  if ( ! activeCanvas ) {
    userDefined();
    activeCanvas = activeWin("");
    if ( ! activeCanvas ) {
      alert("No canvas present. Either create a canvas or remove onLoad=initialize() statement from <body>.");
      }
    return;
    }

  // Handler for loading files. After file selected, calls "MyFileReader"
  if ( molfile ) {
    // Verify browser supports HTML5 FileReader
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        molfile.addEventListener('change', MyFileReader, false);
      } else {
        alert('The File APIs are not fully supported by your browser.');
      }
    }

  // Initialize molecular geometry
  var molecule = Mol();
  var cys = OriCrystal();
  var param = parameters();
  // Set display mode to View
  viewmode();

  // Draw molecule
  if ( typeof molecule == 'undefined' )
    delMolecule();
  if (molecule[0].numatoms < 1) {
    delMolecule();
    loadMolecule();
    formula();  // Display molecular formula
    centerMolecule();  // Center molecule
    }
   drawMolecule();
   if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
  // Set default drawing atom
  pickClouds(4);
  buttonColor("rotatemode",1);
  buttonColor("single",1);
  param.element = "C";
  param.atommode = "Add";
  param.bondmode = "Add";
  param.bondtype = "single";
  // Execute user-defined routine
  //userDefined();
  }

//#   function parameters()
//#
//#   Define constants used to control drawing.
//#   Get/set values using:
//#      var param = parameters();
//#
//#    param.mode   = Interface mode.  Set to "Draw" or "View"
//#    param.element   = Type of element to add next.  Default = "C"
//#    param.clouds = # of hybrid orbitals.  Default = 4
//#    param.bondmode   = Bond mode.  Set to "Add", "Delete", or "Rotate"
//#    param.atommode    = Add atom mode.  Set to "Add" or "Delete"
//#
function parameters() {

  // Initialize parameter array if necessary
  if ( typeof parameters.values === "undefined" )
    parameters.values = new paramObject();

  // Define default values for parameters
  if ( typeof parameters.values.mode == 'undefined' )
    parameters.values.mode = "View";
  if ( typeof parameters.values.elem == 'undefined' )
    parameters.values.elem = "C";
  if ( typeof parameters.values.clouds == 'undefined' )
    parameters.values.clouds = 4;
  if ( typeof parameters.values.add == 'undefined' )
    parameters.values.add = "Add";
  if ( typeof parameters.values.bond == 'undefined' )
    parameters.values.bond = "Add";
  if ( typeof parameters.values.bondtype == 'undefined' )
    parameters.values.bondtype = "single";
  if ( typeof parameters.values.action == 'undefined' )
    parameters.values.action = "press";
  if ( typeof parameters.values.mousedownxyz == 'undefined' )
    parameters.values.mousedownxyz = [0,0,0];
  if ( typeof parameters.values.centermove == 'undefined' )
    parameters.values.centermove = [0,0,0];
  // End of parameters routine
  return parameters.values;
  }


///
///   Define structure for drawing parameters
///
function paramObject() {
  this.mode = "View";
  this.element = "C";
  this.clouds = 4;
  this.bondmode = "Add";
  this.atommode = "Add";
  this.bondtype = "single";
  this.action = "press";
  }


///
///  Routine to save/restore molecular coordinates, bonds, ...
///
///  Parameter: mode
///      pop  - restore last saved set of coordinates
///      save - store current information
///      redo - 'Undo' last pop
///
function Undo(mode) {
  var param = parameters();
  if(param.mode == 'View'){
    alert("In View mode,cannot use this function!");
    return;
  }
  // Declare local variables
  var i, pos;
  var maxBonds;
  var MAXSAVE=10;
  var molecule = Mol();
  var cys = OriCrystal();
  var bonds = BondMatrix();

  // Initialization of variables
  if ( typeof Undo.num == 'undefined' ) {
    Undo.num = 0;
  	Undo.mol = [];
  	Undo.bonds = [];
  	for (i=0; i < MAXSAVE; i++) {
  	  Undo.mol[i] = [];
  	  Undo.mol[i][0] = 0;
  	  Undo.bonds[i] = [];
  	  }
    }

  // Save current geometry information
  if ( mode == "save")  {
  	pos = Undo.num;
    // InfoWin(" --- Saving geometry in slot " + pos + " ---\n");
  	Undo.mol[pos] = null;
  	Undo.mol[pos] = [];
    Undo.mol[pos][0] = molecule[0].numatoms;
    for (i=1; i <= molecule[0].numatoms; i++) {
      Undo.mol[pos][i] = new atomObject();
      Undo.mol[pos][i].atomicnumber = molecule[i].atomicnumber;
      Undo.mol[pos][i].x = molecule[i].x;
      Undo.mol[pos][i].y = molecule[i].y;
      Undo.mol[pos][i].z = molecule[i].z;
      Undo.mol[pos][i].originalx = molecule[i].originalx;
      Undo.mol[pos][i].originaly = molecule[i].originaly;
      Undo.mol[pos][i].originalz = molecule[i].originalz;
      Undo.mol[pos][i].ishide = molecule[i].ishide;
      Undo.mol[pos][i].cysid = molecule[i].cysid;
      Undo.mol[pos][i].iscleaveatom = molecule[i].iscleaveatom;
      Undo.mol[pos][i].color = molecule[i].color;
      Undo.mol[pos][i].bonds = [];
      Undo.mol[pos][i].charge = molecule[i].charge;
      Undo.mol[pos][i].highlite = molecule[i].highlite;
      }
  	Undo.bonds[pos] = null;
  	Undo.bonds[pos] = [];
    for (i=1; i <= molecule[0].numatoms; i++) {
      Undo.bonds[pos][i] = [];
      for (j=0; j <= molecule[0].numatoms; j++) {
        Undo.bonds[pos][i][j] = bonds[i][j];
        }
      }

    // alert("Coordinate set "+Undo.num+" contains "+Undo.mol[pos][0]+" atoms.");
    Undo.num = ( (Undo.num+1) % MAXSAVE );
    return;
    }

  // Set position of 'last saved' geometry information
  if ( mode == "pop")  {
    Undo('save');
    pos = ( (Undo.num+MAXSAVE-2) % MAXSAVE );
  	Undo.num = pos;
    // InfoWin(" --- Attempting to restore from slot " + pos + " ---\n");
  	if ( Undo.mol[pos][0] < 1 ) {
      alert("ERROR: No saved coordinates to restore.");
      return;
  	  }
  	}

  // Attempt to reverse last 'undo' (pop)
  if ( mode == "redo")  {
    pos = ( (Undo.num+1) % MAXSAVE );
  	Undo.num = pos;
    // InfoWin(" --- Attempting to go back to slot " + pos + " ---\n");
  	if ( Undo.mol[pos][0] < 1 ) {
      alert("ERROR: No saved coordinates to restore.");
      return;
  	  }
  	}

  if ( (mode == "redo") || (mode == "pop") )  {
    molecule[0].numatoms = Undo.mol[pos][0];
    for (i=1; i <= Undo.mol[pos][0]; i++) {
      molecule[i].atomicnumber = Undo.mol[pos][i].atomicnumber;
      molecule[i].x = Undo.mol[pos][i].x;
      molecule[i].y = Undo.mol[pos][i].y;
      molecule[i].z = Undo.mol[pos][i].z;
      molecule[i].originalx = Undo.mol[pos][i].originalx;
      molecule[i].originaly = Undo.mol[pos][i].originaly;
      molecule[i].originalz = Undo.mol[pos][i].originalz;
      molecule[i].ishide = Undo.mol[pos][i].ishide;
      molecule[i].cysid = Undo.mol[pos][i].cysid;
      molecule[i].iscleaveatom = Undo.mol[pos][i].iscleaveatom;
      molecule[i].color = Undo.mol[pos][i].color;
      molecule[i].charge = Undo.mol[pos][i].charge;
      molecule[i].highlite = Undo.mol[pos][i].highlite;
      }
    for (i=1; i <= molecule[0].numatoms; i++) {
      for (j=0; j <= molecule[0].numatoms; j++) {
        bonds[i][j] = Undo.bonds[pos][i][j];
        }
      }
    centerMolecule();
    formula();
    drawMolecule();
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    drawAxis();
    return;
    }

  // End of Undo routine
  }

///
///clear console or property windows
///
function clearWin(mode){
  if( mode == 0 ){
    InfoWin("",1);
  }else{
  PropWin("",1);
  }
}

function clearCanvas(load){
  delMolecule();
  delCrystal();

  // draw CH4 as default molecule
  var molecule = Mol();
  var cys = OriCrystal();
  var param = parameters();

  // Draw molecule
  if ( typeof molecule == 'undefined' )
    delMolecule();
  if (molecule[0].numatoms < 1) {
    delMolecule();
    if ( load )
      loadMolecule();
    formula();  // Display molecular formula
    centerMolecule();  // Center molecule
  }
  drawMolecule();
  if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
    drawCube();
  }
  if(cys[0].preview == 1){
    drawCube();
  }
  drawAxis();
}

///
///   Clear drawing window (canvas)
///
function clear(ctx, width, height) {
  // Clear plot area
  var color = document.getElementById('colorPicker').value;
  if(color == "" || undefined){
    color="#ffffff";
  }

  // change color of cube, line, axis label for better impression
  if(color > "#888888"){
    drawCube.color = "#000000";
    drawline.color = "#000000";
    drawAxis.labelColor = "#000000";
  } else{
    drawCube.color = "#ffffff";
    drawline.color = "#ffffff";
    drawAxis.labelColor = "#ffffff";
  }
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // Show border around plot area
  // ctx.beginPath();
  // ctx.rect(1,1,width-1,height-1);
  // ctx.lineWidth = 2;
  // ctx.strokeStyle = "rgb(95,95,127)";
  // ctx.stroke();
  // ctx.closePath();
  }

///
///In view mode, there are two operation mode(rotate/translate) that could be switched.
///
function changeopmode(mode){
  var molecule = Mol();
  if( molecule[0].mousemove == "rotate"&&mode=="translate"){
      molecule[0].mousemove = "translate";
      buttonColor('translatemode',1);
      buttonColor('rotatemode',0);
   }else if(molecule[0].mousemove == "translate"&&mode=="rotate"){
      molecule[0].mousemove = "rotate";
      buttonColor('translatemode',0);
      buttonColor('rotatemode',1);
   } 
   // InfoWin(molecule[0].mousemove);
}


///
///   VIEW MODE: Routine to display geometry information to user
///
function viewGeom(OnAtom) {
  // Declare local variables
  var i, A1, A2, A3, A4;
  var dx, dy, dz, d;
  var dux, duy, duz, dvx, dvy, dvz, du, dv;
  var label;
  var activecanvas = activeWin("");
  var canvas = document.getElementById(activecanvas);
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var molecule = Mol();
  var cys = OriCrystal();
  // Initialize geom array if necessary
  if ( typeof viewGeom.geom == 'undefined' ) {
    viewGeom.geom = [0,0,0,0,0];
    }

  // If valid atom not sent, zero array
  if (OnAtom == 0) {
    for (i=0; i < 5; i++)
      viewGeom.geom[i] = 0;
    drawMolecule();
    if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
      drawCube();
    }
    if(cys[0].preview == 1){
      drawCube();
    }
    drawAxis();
    if(cys[0].cleave == 1){
      drawsurface();
    }
    return;
    }

  // If duplicate atom sent, zero array and return
  if (OnAtom) {
    for (i=1; i < 5; i++) {
      if (viewGeom.geom[i] == OnAtom)
        viewGeom(0);
        if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
          drawCube();
        }
        if(cys[0].preview == 1){
          drawCube();
        }
        drawAxis();
      }
    }

  // Display appropriate information to user
  viewGeom.geom[0] = viewGeom.geom[0] + 1;
  sw = viewGeom.geom[0];
  viewGeom.geom[sw] = OnAtom;

  switch (sw) {
    case 1:
        A1 = molecule[viewGeom.geom[1]].atomicnumber;
        var orix = molecule[viewGeom.geom[1]].originalx;
        var oriy = molecule[viewGeom.geom[1]].originaly;
        var oriz = molecule[viewGeom.geom[1]].originalz;
        label = element(A1,"symbol") + viewGeom.geom[1].toString()+"\n";
        PropWin("Element" + "          x             " +"y             " + "z" + "\n\n    "+element(A1,"symbol") + viewGeom.geom[1].toString()+"          " + orix.toFixed(4) + "    " + oriy.toFixed(4) + "    " + oriz.toFixed(4)+"\n");
        PropWin("-------------------------------------------------------"+"\n");
        if ( molecule[0].showcharges != 0 ) {
          label += ": Charge = ";
          if ( molecule[viewGeom.geom[1]].charge > 0 )
            label += "+";
          label += molecule[viewGeom.geom[1]].charge.toFixed(2);
          }
        drawMolecule();
        if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
          drawCube();
        }
        if(cys[0].preview == 1){
          drawCube();
        }
        drawAxis();
        if(cys[0].cleave == 1){
          drawsurface();
        }
        geomLabel(ctx,label,width);
        break;
    case 2:
        // Bond distance
        dx = molecule[viewGeom.geom[1]].x - molecule[viewGeom.geom[2]].x;
        dy = molecule[viewGeom.geom[1]].y - molecule[viewGeom.geom[2]].y;
        dz = molecule[viewGeom.geom[1]].z - molecule[viewGeom.geom[2]].z;
        d = Math.sqrt(dx*dx+dy*dy+dz*dz);
        d = d.toFixed(3);
        d = d.toString();
        A1 = molecule[viewGeom.geom[1]].atomicnumber;
        A2 = molecule[viewGeom.geom[2]].atomicnumber;
        label  = element(A1,"symbol") + viewGeom.geom[1].toString() + "--";
        label += element(A2,"symbol") + viewGeom.geom[2].toString();
        label += " = " + d;
        drawMolecule();
        if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
          drawCube();
        }
        if(cys[0].preview == 1){
          drawCube();
        }
        drawAxis();
        if(cys[0].cleave == 1){
          drawsurface();
        }
        geomLabel(ctx,label,width);
        PropWin("Bond distance:\n\n"+label+"\n");
        PropWin("-------------------------------------------------------"+"\n");
        break;
    case 3:
        // Bond angle
        A1 = molecule[viewGeom.geom[1]].atomicnumber;
        A2 = molecule[viewGeom.geom[2]].atomicnumber;
        A3 = molecule[viewGeom.geom[3]].atomicnumber;
        label  = element(A1,"symbol") + viewGeom.geom[1].toString() + "--";
        label += element(A2,"symbol") + viewGeom.geom[2].toString() + "--";
        label += element(A3,"symbol") + viewGeom.geom[3].toString();
        ang = angle(molecule,viewGeom.geom[1],viewGeom.geom[2],viewGeom.geom[3]);
        ang = ang.toFixed(1);
        ang = ang.toString();
        label += " = " + ang + "ᵒ";
        drawMolecule();
        if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
          drawCube();
        }
        if(cys[0].preview == 1){
          drawCube();
        }
        drawAxis();
        if(cys[0].cleave == 1){
          drawsurface();
        }
        geomLabel(ctx,label,width);
        PropWin("Bond angle:\n\n"+label+"\n");
        PropWin("-------------------------------------------------------"+"\n");
        break;
    case 4:
        // Dihedral angle
        A1 = molecule[viewGeom.geom[1]].atomicnumber;
        A2 = molecule[viewGeom.geom[2]].atomicnumber;
        A3 = molecule[viewGeom.geom[3]].atomicnumber;
        A4 = molecule[viewGeom.geom[4]].atomicnumber;
        label  = element(A1,"symbol") + viewGeom.geom[1].toString() + "--";
        label += element(A2,"symbol") + viewGeom.geom[2].toString() + "--";
        label += element(A3,"symbol") + viewGeom.geom[3].toString() + "--";
        label += element(A4,"symbol") + viewGeom.geom[4].toString();
        ang = dihedral(molecule,viewGeom.geom[1],viewGeom.geom[2],viewGeom.geom[3],viewGeom.geom[4]);
        ang = ang.toFixed(1);
        ang = ang.toString();
        label += " = " + ang;
        drawMolecule();
        if(molecule[0].type=="crystal"&&cys[0].cleave == 0){
          drawCube();
        }
        if(cys[0].preview == 1){
          drawCube();
        }
        drawAxis();
        if(cys[0].cleave == 1){
          drawsurface();
        }
        geomLabel(ctx,label,width);
        for (i=0; i < 5; i++)
          viewGeom.geom[i] = 0;

        PropWin("Dihedral angle:\n\n"+label+"\n");
        PropWin("-------------------------------------------------------"+"\n");
        break;
      }
  }


//#   function InfoWin(mytext,mode)
//#
//#   Routine to write text to information window.
//#
//#   Parameters:
//#     mytext:  String to write to output window
//#     mode:    If >0, then clear text window
//#
function InfoWin(mytext,mode) {

  var outstring = mytext || "";
  var clearwin = mode || 0;

  if ( ! document.getElementById("information") )
    return;
  if ( clearwin > 0 ){

    document.getElementById("information").value  = outstring;
    document.getElementById("information").scrollTop = document.getElementById("information").scrollHeight;
    // document.getElementById("information").setAttribute("style","height:100%;width:100%;background-color:#EBEBEB;position:absolute;top:50px;left:1080px;");
    // alert("hhh");
  }
  else{
    document.getElementById("information").value += outstring;
    document.getElementById("information").scrollTop = document.getElementById("information").scrollHeight;
    // document.getElementById("information").setAttribute("style","height:100%;width:100%;background-color:#EBEBEB;position:absolute;top:50px;left:1080px;");
  }
  }


//#   function PropWin(mytext,mode)
//#
//#   Routine to write text to property window (textarea with an id of "Property").
//#
//#   Parameters:
//#     mytext:  String to write to output window
//#     mode:    If >0, then clear text window
//# 
function PropWin(mytext,mode) {

  var outstring = mytext || "";
  var clearwin = mode || 0;

  if ( ! document.getElementById("property") )
    return;
  if ( clearwin > 0 ){

    document.getElementById("property").value  = outstring;
    document.getElementById("property").scrollTop = document.getElementById("property").scrollHeight;
    // document.getElementById("information").setAttribute("style","height:100%;width:100%;background-color:#EBEBEB;position:absolute;top:50px;left:1080px;");
    // alert("hhh");
  }
  else{
    document.getElementById("property").value += outstring;
    document.getElementById("property").scrollTop = document.getElementById("property").scrollHeight;
    // document.getElementById("information").setAttribute("style","height:100%;width:100%;background-color:#EBEBEB;position:absolute;top:50px;left:1080px;");
  }
  }

///
/// Switch between draw mode and view mode
///
function changeMode(){
  var param = parameters();
  var molecule = Mol();
  var cys = OriCrystal();
  if(param.mode == "View"){
    param.mode = "Draw";
    param.element = "C";
    param.atommode  = "Add";
    param.bondmode = "Add";
    $(".rotate").hide();
    $(".size").hide();
    $(".abc").hide();
    //mode icon switch
    var mode = document.getElementById("mode");
    mode.innerHTML = 'Mode &nbsp;<i style="font-size: 100%" class="fa fa-pencil-square-o"></i>';
    //viewcon stop using
    var viewicons = document.getElementsByClassName("viewicon");
    for(var i = 0;i< viewicons.length;i++){
      viewicons[i].setAttribute("style","color: rgba(100,100,100,0.4)");
      if(viewicons[i].parentNode.title=="recenter"){
        viewicons[i].setAttribute("style","color: rgba(100,100,100,0.4);font-size:150%;");
      }
      if(viewicons[i].parentNode.title=="Translate mode"){
        viewicons[i].setAttribute("style","color: rgba(100,100,100,0.4);font-size:120%;");
      }
      if(viewicons[i].parentNode.title=="Rotate mode"){
        viewicons[i].setAttribute("style","color: rgba(100,100,100,0.4);font-size:120%;");
      }
    }
    var abc = document.getElementById('ABC');
    // var xyz = document.getElementById('XYZ');
    var size = document.getElementById('Size');
    abc.setAttribute("style","color:rgba(100, 100, 100, 0.4)");
    // xyz.setAttribute("style","color:rgba(100, 100, 100, 0.4)");
    size.setAttribute("style","color:rgba(100, 100, 100, 0.4)");
    var rotate = document.getElementById('Rotate');
    rotate.innerHTML='<img src="./src/img/icons/xuanzhuan6.png" width="30%" height="70%" ><span class="caret" style="color: rgba(100,100,100,0.4)"></span>';
    var pos = document.getElementById('pos');
    pos.innerHTML='<img src="./src/img/icons/pos4.png" width="80%" height="100%" >';
    var delatom = document.getElementById('delbtn');
    delatom.innerHTML='<img src="./src/img/icons/deleteatom.png" width="85%" height="100%" >';
    var delbond = document.getElementById('delbond');
    delbond.innerHTML='<img src="./src/img/icons/deletebond.png" width="85%" height="100%" >';
    var hidebond = document.getElementById('hidebond');
    hidebond.innerHTML='<img src="./src/img/icons/hidebond2.png" width="85%" height="100%" >';
    var atomh = document.getElementById('atomh');
    atomh.innerHTML='<img src="./src/img/icons/atomH2.png" width="85%" height="100%" >';
    var hidecube = document.getElementById('hidecube');
    hidecube.innerHTML='<img src="./src/img/icons/hidecube3.png" width="85%" height="100%" >';
    var color = document.getElementById('color');
    color.innerHTML='<img src="./src/img/icons/color1.png" width="85%" height="100%" ><div style="display:none;"><input type="text" class="inp" id="colorPicker" title="Canvas Color"><div class="palette" id="colorPalette"></div></div>';
    var single = document.getElementById('single');
    single.innerHTML='<img src="./src/img/icons/singlebond.png" width="85%" height="100%" >';
    var double = document.getElementById('double');
    double.innerHTML='<img src="./src/img/icons/doublebond.png" width="85%" height="100%" >';
    var triple = document.getElementById('triple');
    triple.innerHTML='<img src="./src/img/icons/triplebond.png" width="85%" height="100%" >';
    var rebond = document.getElementById('re-bond');
    rebond.innerHTML='<img src="./src/img/icons/rotatebond.png" width="85%" height="100%" >';
    var mechanics = document.getElementById('mechanics');
    mechanics.innerHTML='<img src="./src/img/icons/mechanics.png" width="85%" height="100%" >';
    //var Kpoint = document.getElementById('Kpoint');
    //Kpoint.innerHTML='<img src="./src/img/icons/kpoint3.png" width="18" height="15"><span class="caret viewicon" style="color: rgba(100,100,100,0.4)"></span>';
    //drawicon come into using
    var drawicons = document.getElementsByClassName("drawicon");
    for(var i = 0;i< drawicons.length;i++){
      drawicons[i].setAttribute("style","");
    }
    var s = document.getElementById('s');
    var sp = document.getElementById('sp');
    var sp2 = document.getElementById('sp2');
    var sp3 = document.getElementById('sp3');
    s.setAttribute("style","");
    sp.setAttribute("style","");
    sp2.setAttribute("style","");
    sp3.setAttribute("style","");
    // var bond = document.getElementById('Bonds');
    // bond.innerHTML='<img src="./src/img/icons/bond.png" width="15" height="15"><span class="caret drawicon"></span>';
    // var rebond = document.getElementById('re-bond');
    // rebond.innerHTML='<img src="./src/img/icons/re-bond2.png" id="re-bond" width="17" height="17">';
    var translate = document.getElementById('Translate');
    translate.innerHTML='<img src="./src/img/icons/t5.png" width="30%" height="60%"><span class="caret drawicon"></span>';
    
    // var divider1 =document.getElementsByClassName('divider1');
    // for(var i = 0;i< divider1.length;i++){
    //   divider1[i].setAttribute("style",'height: 4px;margin-left:auto;margin-right:auto;margin-top: -2px;margin-bottom:3px;background-color:#6A6969');
    // }
    // var divider2 =document.getElementsByClassName('divider2');
    // for(var i = 0;i< divider2.length;i++){
    //   divider2[i].setAttribute("style",'height: 12px;font-size:10px;font-weight: bolder;text-align: center;line-height: 1px; margin: -1px auto -2px auto;');
    // }
    // var divider3 =document.getElementsByClassName('divider3');
    // for(var i = 0;i< divider3.length;i++){
    //   divider3[i].setAttribute("style",'height: 12px;font-size:10px;font-weight: bolder;text-align: center;line-height: 1px; margin: -9px auto -4px auto;');
    // }
  }else{
    param.mode = "View";
    // pickElem("ClearBond");
    if(molecule[0].moveAck==1){
            molecule[0].moveAck = 0;
            buttonColor("Translate",0);
            for(var i = 1; i <= molecule[0].numatoms; i++){
              molecule[i].highlite = 0;
            }
            drawMolecule();
            if(molecule[0].type=="crystal" && cys[0].cleave == 0){
              drawCube();
            }
            if(cys[0].preview == 1){
              drawCube();
            }
            drawAxis();
        }
    // Show molecular formula
    formula();
    showCoord(1);
    //mode icon switch
    var mode = document.getElementById("mode");
    mode.innerHTML = 'Mode &nbsp;<i style="font-size: 100%" class="fa fa-eye"></i>';
    //viewcion come into using
    // InfoWin("right1"+"\n");
    var viewicons = document.getElementsByClassName("viewicon");
    // InfoWin("right2"+"\n");
    for(var i = 0;i< viewicons.length;i++){
      viewicons[i].setAttribute("style","");
      if(viewicons[i].parentNode.title=="recenter"){
        viewicons[i].setAttribute("style","font-size:150%;")
      }
      if(viewicons[i].parentNode.title=="Translate mode"){
        viewicons[i].setAttribute("style","font-size:120%;");
      }
      if(viewicons[i].parentNode.title=="Rotate mode"){
        viewicons[i].setAttribute("style","font-size:120%;");
      }
    }
    // InfoWin("right3"+"\n");
    var abc = document.getElementById('ABC');
    // var xyz = document.getElementById('XYZ');
    var size = document.getElementById('Size');
    abc.setAttribute("style","");
    // xyz.setAttribute("style","");
    size.setAttribute("style","");
    var rotate = document.getElementById('Rotate');
    rotate.innerHTML='<img src="./src/img/icons/xuanzhuan3.png" width="30%" height="70%" ><span class="caret"></span>';
    var pos = document.getElementById('pos');
    pos.innerHTML='<img src="./src/img/icons/pos.png" width="85%" height="100%" >';
    var delatom = document.getElementById('delbtn');
    delatom.innerHTML='<img src="./src/img/icons/deleteatom3.png" width="85%" height="100%" >';
    var delbond = document.getElementById('delbond');
    delbond.innerHTML='<img src="./src/img/icons/deletebond3.png" width="85%" height="100%" >';
    var hidebond = document.getElementById('hidebond');
    hidebond.innerHTML='<img src="./src/img/icons/hidebond.png" width="85%" height="100%" >';
    var atomh = document.getElementById('atomh');
    atomh.innerHTML='<img src="./src/img/icons/atomH.png" width="85%" height="100%" >';
    var hidecube = document.getElementById('hidecube');
    hidecube.innerHTML='<img src="./src/img/icons/hidecube.png" width="85%" height="100%" >';
    var color = document.getElementById('color');
    color.innerHTML='<img src="./src/img/icons/color.png" width="30%" height="70%" ><div style="display:none;"><input type="text" class="inp" id="colorPicker" title="Canvas Color"><div class="palette" id="colorPalette"></div></div>';
    var single = document.getElementById('single');
    single.innerHTML='<img src="./src/img/icons/singlebond1.png" width="85%" height="100%" >';
    var double = document.getElementById('double');
    double.innerHTML='<img src="./src/img/icons/doublebond1.png" width="85%" height="100%" >';
    var triple = document.getElementById('triple');
    triple.innerHTML='<img src="./src/img/icons/triplebond1.png" width="85%" height="100%" >';
    var rebond = document.getElementById('re-bond');
    rebond.innerHTML='<img src="./src/img/icons/rotatebond1.png" width="85%" height="100%" >';
    var mechanics = document.getElementById('mechanics');
    mechanics.innerHTML='<img src="./src/img/icons/mechanics2.png" width="85%" height="100%" >';
    //var Kpoint = document.getElementById('Kpoint');
    //Kpoint.innerHTML='<img src="./src/img/icons/kpoint2.png" width="18" height="15"><span class="caret viewicon"></span>';
    //drawcon stop using
    var drawicons = document.getElementsByClassName("drawicon");
    for(var i = 0;i< drawicons.length;i++){
      drawicons[i].setAttribute("style","color:rgba(100, 100, 100, 0.4)");
    }
    var s = document.getElementById('s');
    var sp = document.getElementById('sp');
    var sp2 = document.getElementById('sp2');
    var sp3 = document.getElementById('sp3');
    s.setAttribute("style","color:rgba(100, 100, 100, 0.4)");
    sp.setAttribute("style","color:rgba(100, 100, 100, 0.4)");
    sp2.setAttribute("style","color:rgba(100, 100, 100, 0.4)");
    sp3.setAttribute("style","color:rgba(100, 100, 100, 0.4)");
    // var bond = document.getElementById('Bonds');
    // bond.innerHTML='<img src="./src/img/icons/bond2.png" width="15" height="15"><span class="caret drawicon" style="color:rgba(100, 100, 100, 0.4)"></span>';
    // var rebond = document.getElementById('re-bond');
    // rebond.innerHTML='<img src="./src/img/icons/re-bond3.png" id="re-bond" width="17" height="17">';
    var translate = document.getElementById('Translate');
    translate.innerHTML='<img src="./src/img/icons/t6.png" width="30%" height="70%"><span class="caret drawicon" style="color:rgba(100, 100, 100, 0.4)"></span>';

    $(".translate").hide();
  }
}

//#   function drawmode()
//#
//#   Routine to enable display of "draw mode" interface.
//#
function drawmode() {
  var param = parameters();

  param.mode = "Draw";
  param.element = "C";
  param.atommode  = "Add";
  param.bondmode = "Add";
  }


//#   function viewmode()
//#
//#   Routine to enable display of "view mode" interface.
//#
function viewmode() {
  var param = parameters();
  param.mode = "View";

  // Show molecular formula
  formula();
  showCoord(1);
  }


//
// -------------------- HTML --------------------
//

//#   function buttonColor(button, mode)
//#
//#   Set color of buttons
//#
//#   Parameters
//#     button - string containing ID name for button
//#     mode   - 0=inactive, 1=active
//#
function buttonColor(button, mode) {

  mode = mode || 0;
  var buttoncolor = "";
  if ( mode )
    buttoncolor = "#B3B2B2";
  if ( document.getElementById(button) )
    document.getElementById(button).style.backgroundColor = buttoncolor;
  }

$(document).ready(function(){
  $("#Rotate").click(function(){
    var param = parameters();
    if(param.mode == 'Draw'){
      alert("In Draw mode,cannot rotate molecule!");
      return;
    } 
    $(".size").hide();
    $(".abc").hide();
    $(".rotate").toggle(300);
  });

  $("#rotateclose").click(function(){
    $(".rotate").toggle(300);
  });

  $("#ABC").click(function(){
    var param = parameters();
    if(param.mode == 'Draw'){
      alert("In Draw mode,cannot use this function!");
      return;
    }
    $(".rotate").hide();
  $(".size").hide();
  $(".abc").toggle(300);
  });

  $("#abcclose").click(function(){
    $(".abc").toggle(300);
  });

  $("#Size").click(function(){
    var param = parameters();
    if(param.mode == 'Draw'){
      alert("In Draw mode,cannot use this function!");
      return;
    }
    $(".abc").hide();
  $(".rotate").hide();
  $(".size").toggle(200);
  });

  $("#sizeclose").click(function(){
  $(".size").toggle(300);
    });

  $("#translateclose").click(function(){
  $(".translate").toggle(300);
  var molecule = Mol();
  var cys = OriCrystal();
    molecule[0].moveAck = 0;
      buttonColor("Translate",0);
      for(var i = 1; i <= molecule[0].numatoms; i++){
        molecule[i].highlite = 0;
      }
      drawMolecule();
      if(molecule[0].type=="crystal" && cys[0].cleave == 0){
        drawCube();
      }
      if(cys[0].preview == 1){
        drawCube();
      }
      drawAxis();
  });

  $(".file").eq(1).click(function(){
  layer.open({
  type: 1,
  title:"Export File",
  skin: 'layui-layer-lan',
  area: ['500px', '350px'],
  content: $("#exportfile"),
  btn: ['Create','Close'],
  btnAlign: 'l',
  shade:0,
  offset: '50%-175px',
  moveOut: true,
  yes: function(index,layero){
    layer.close(index);
    $("#exportfile").css("display","none");	
    var index = document.getElementById('exportfiletype').selectedIndex;
    var filetype = document.getElementById("exportfiletype").options[index].value;
    export_file(filetype);
  },
  cancel:function(){
    $("#exportfile").css("display","none");
  },
  scrollbar: false
  });
  });

  $(".calculate").eq(0).click(function(){
    var molecule = Mol();
  if(molecule[0].type == "molecule"){
      alert("Unable to generate VASP file regards aperiodic molecule！");
  }else{
    layer.open({
      type: 1,
      title:"VASP",
      skin: 'layui-layer-lan',
      area: ['760px', '740px'],
      content: $("#calculate"),
      shade:0,
      offset: '50px',
      moveOut: true,
      cancel:function(){
        $("#calculate").css("display","none");
      },
      scrollbar: false
    });
  }
});

  $(".calculate").eq(1).click(function(){
    var molecule = Mol();
  if(molecule[0].type == "crystal"){
      alert("Unable to generate Gaussian file regards periodic molecule！");
  }else{
    layer.open({
      type: 1,
      title:"Gaussian",
      skin: 'layui-layer-lan',
      area: ['1160px', '700px'],
      content: $("#gauss"),
      shade:0,
      offset: '50px',
      moveOut: true,
      cancel:function(){
        $("#gauss").css("display","none");
      },
      scrollbar: false
    });
  }
});

layui.use('element', function(){
  var element = layui.element;
  });

$(".build").eq(0).click(function(){
  layer.open({
  type: 1,
  title:"Build Crystal",
  skin: 'layui-layer-lan',
  area: ['750px', '540px'],
  content: $("#buildcrystal"),
  btn: 'Build',
  btnAlign: 'l',
  offset: '50%-270px',
  shade:0,
  moveOut: true,
  yes: function(index,layero){
    layer.close(index);
    $("#buildcrystal").css("display","none");
    buildcrystalACK();
  },
  cancel:function(){
    $("#buildcrystal").css("display","none");
  },
  scrollbar: false
});
});
  
$(".build").eq(1).click(function(){
layer.open({
  type: 1,
  title:"Build Vacuum Slab",
  skin: 'layui-layer-lan',
  area: ['520px', '340px'],
  content: $("#vacuum"),
  btn: 'Build',
  btnAlign: 'l',
  offset: '50%-270px',
  shade:0,
  moveOut: true,
  yes: function(index,layero){
    $("#vacuum").css("display","none");
    layer.close(index);
    vacuumthicknesschangedACK();
  },
  cancel:function(){
    $("#vacuum").css("display","none");
  },
  scrollbar: false
});
});

$(".build").eq(2).click(function(){
layer.open({
  type: 1,
  title:"Cleave Surface Setting",
  skin: 'layui-layer-lan',
  area: ['620px', '440px'],
  content: $("#cleavesurface"),
  btn: 'Build',
  btnAlign: 'l',
  offset: '50%-270px',
  shade:0,
  moveOut: true,
  yes: function(index,layero){
    $("#cleavesurface").css("display","none");
    layer.close(index);
    cleaveACK();
  },
  cancel:function(){
    $("#cleavesurface").css("display","none");
  },
  scrollbar: false
});
});

$(".build").eq(3).click(function(){
layer.open({
  type: 1,
  title:"Supercell Setting",
  skin: 'layui-layer-lan', 
  area: ['520px', '340px'], 
  content: $("#supercell"),
  btn: 'Build',
  btnAlign: 'l',
  offset: '50%-270px',
  shade:0,
  moveOut: true,
  yes: function(index,layero){
    $("#supercell").css("display","none");
    layer.close(index);
    mode_supercell();
  },
  cancel:function(){
    $("#supercell").css("display","none");
  },
  scrollbar: false
});
});

$("#Element").click(function(){
  var param = parameters();
  if(param.mode == 'View'){
    alert("In View mode,cannot use this function!");
    return;
  }
  $(".elements").toggle(200);
});
$("#Delete").click(function(){
  var param = parameters();
    if(param.mode == 'View'){
      alert("In View mode,cannot use this function!");
      return;
    }
  $(".delete").toggle(200);
});
$("#Bonds").click(function(){
  var param = parameters();
    if(param.mode == 'View'){
      alert("In View mode,cannot use this function!");
      return;
    }
  $(".bonds").toggle(200);
});
$("#Translate").click(function(){
  var param = parameters();
    if(param.mode == 'View'){
      alert("In View mode,cannot use this function!");
      return;
    }
  $(".translate").toggle(200);
});
$(".left").click(function(){
  $(".step-2").toggle(200);
});
});


//
// --------------------- Example Structures ---------------
//
var exam1 = new File(["test.pdbqt\n\
 OpenBabel04161920063D\n\
\n\
 33 38  0  0  1  0  0  0  0  0999 V2000\n\
    0.0490   -2.6630    2.3380 N   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.0320   -3.9760    2.3800 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.1290   -4.6550    3.5780 N   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -1.2340   -5.6210    3.7320 C   0  0  1  0  0  0  0  0  0  0  0  0\n\
   -1.4010   -6.3260    2.4040 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.8190   -5.8750    1.2470 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.0310   -4.7410    1.2210 N   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -1.1830   -6.7730    0.1470 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.8670   -6.7610   -1.2020 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -1.3930   -7.7920   -1.9860 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -2.1910   -8.7770   -1.4530 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -2.5210   -8.8020   -0.0930 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -2.0070   -7.7900    0.6930 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -2.1400   -7.4990    2.1380 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -2.7710   -8.1520    2.9480 O   0  0  0  0  0  0  0  0  0  0  0  0\n\
    0.4920   -4.4970    0.4420 H   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.0130   -2.0160    1.1430 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.2830   -2.7160    0.0520 N   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.3510   -2.1080   -1.1380 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.1290   -0.7080   -1.2040 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.6340   -2.8150   -2.3160 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
    0.1550   -0.0170   -0.0100 C   0  0  2  0  0  0  0  0  0  0  0  0\n\
   -0.1950   -0.0550   -2.4430 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
    0.3990    1.4700   -0.0220 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
    0.2070   -0.6970    1.1140 N   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.4730   -0.7740   -3.5670 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.6920   -2.1480   -3.5030 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.8960   -6.6220    4.8070 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -1.8710   -7.0420    5.6910 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -1.5610   -7.9640    6.6750 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
   -0.2740   -8.4570    6.7790 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
    0.7020   -8.0330    5.8970 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
    0.3910   -7.1150    4.9110 C   0  0  0  0  0  0  0  0  0  0  0  0\n\
  1  2  1  0  0  0  0\n\
  2  3  2  0  0  0  0\n\
  3  4  1  0  0  0  0\n\
  4 28  1  1  0  0  0\n\
  5  4  1  0  0  0  0\n\
  6  5  2  0  0  0  0\n\
  7  6  1  0  0  0  0\n\
  7  2  1  0  0  0  0\n\
  8 13  1  0  0  0  0\n\
  8  6  1  0  0  0  0\n\
  9  8  2  0  0  0  0\n\
 10 11  2  0  0  0  0\n\
 10  9  1  0  0  0  0\n\
 11 12  1  0  0  0  0\n\
 12 13  2  0  0  0  0\n\
 13 14  1  0  0  0  0\n\
 14  5  1  0  0  0  0\n\
 14 15  2  0  0  0  0\n\
 16  7  1  0  0  0  0\n\
 17  1  1  0  0  0  0\n\
 18 17  2  0  0  0  0\n\
 19 18  1  0  0  0  0\n\
 20 19  1  0  0  0  0\n\
 20 22  1  0  0  0  0\n\
 21 19  2  0  0  0  0\n\
 22 24  1  6  0  0  0\n\
 22 25  1  0  0  0  0\n\
 23 20  2  0  0  0  0\n\
 25 17  2  0  0  0  0\n\
 26 27  2  0  0  0  0\n\
 26 23  1  0  0  0  0\n\
 27 21  1  0  0  0  0\n\
 28 33  2  0  0  0  0\n\
 28 29  1  0  0  0  0\n\
 29 30  2  0  0  0  0\n\
 30 31  1  0  0  0  0\n\
 32 31  2  0  0  0  0\n\
 33 32  1  0  0  0  0\n\
M  END"], "C26HN5O.mol", {type: "text/plain",});

var exam2 = new File(["_chemical_formula_structural     'Fe3 O4'\n\
_chemical_formula_sum            'Fe3 O4'\n\
_chemical_name_systematic        'Iron diiron(III) oxide'\n\
_space_group_IT_number           227\n\
_symmetry_cell_setting           cubic\n\
_symmetry_space_group_name_Hall  'F 4d 2 3 -1d'\n\
_symmetry_space_group_name_H-M   'F d -3 m :1'\n\
_cell_angle_alpha                90\n\
_cell_angle_beta                 90\n\
_cell_angle_gamma                90\n\
_cell_formula_units_Z            8\n\
_cell_length_a                   8.384\n\
_cell_length_b                   8.384\n\
_cell_length_c                   8.384\n\
_cell_volume                     589.3\n\
_cod_original_sg_symbol_H-M      'F d -3 m S'\n\
_cod_database_code               1010369\n\
loop_\n\
_symmetry_equiv_pos_as_xyz\n\
x,y,z\n\
y,z,x\n\
z,x,y\n\
x,z,y\n\
y,x,z\n\
z,y,x\n\
x,-y,-z\n\
y,-z,-x\n\
z,-x,-y\n\
x,-z,-y\n\
y,-x,-z\n\
z,-y,-x\n\
-x,y,-z\n\
-y,z,-x\n\
-z,x,-y\n\
-x,z,-y\n\
-y,x,-z\n\
-z,y,-x\n\
-x,-y,z\n\
-y,-z,x\n\
-z,-x,y\n\
-x,-z,y\n\
-y,-x,z\n\
-z,-y,x\n\
1/4-x,1/4-y,1/4-z\n\
1/4-y,1/4-z,1/4-x\n\
1/4-z,1/4-x,1/4-y\n\
1/4-x,1/4-z,1/4-y\n\
1/4-y,1/4-x,1/4-z\n\
1/4-z,1/4-y,1/4-x\n\
1/4-x,1/4+y,1/4+z\n\
1/4-y,1/4+z,1/4+x\n\
1/4-z,1/4+x,1/4+y\n\
1/4-x,1/4+z,1/4+y\n\
1/4-y,1/4+x,1/4+z\n\
1/4-z,1/4+y,1/4+x\n\
1/4+x,1/4-y,1/4+z\n\
1/4+y,1/4-z,1/4+x\n\
1/4+z,1/4-x,1/4+y\n\
1/4+x,1/4-z,1/4+y\n\
1/4+y,1/4-x,1/4+z\n\
1/4+z,1/4-y,1/4+x\n\
1/4+x,1/4+y,1/4-z\n\
1/4+y,1/4+z,1/4-x\n\
1/4+z,1/4+x,1/4-y\n\
1/4+x,1/4+z,1/4-y\n\
1/4+y,1/4+x,1/4-z\n\
1/4+z,1/4+y,1/4-x\n\
x,1/2+y,1/2+z\n\
1/2+x,y,1/2+z\n\
1/2+x,1/2+y,z\n\
y,1/2+z,1/2+x\n\
1/2+y,z,1/2+x\n\
1/2+y,1/2+z,x\n\
z,1/2+x,1/2+y\n\
1/2+z,x,1/2+y\n\
1/2+z,1/2+x,y\n\
x,1/2+z,1/2+y\n\
1/2+x,z,1/2+y\n\
1/2+x,1/2+z,y\n\
y,1/2+x,1/2+z\n\
1/2+y,x,1/2+z\n\
1/2+y,1/2+x,z\n\
z,1/2+y,1/2+x\n\
1/2+z,y,1/2+x\n\
1/2+z,1/2+y,x\n\
x,1/2-y,1/2-z\n\
1/2+x,-y,1/2-z\n\
1/2+x,1/2-y,-z\n\
y,1/2-z,1/2-x\n\
1/2+y,-z,1/2-x\n\
1/2+y,1/2-z,-x\n\
z,1/2-x,1/2-y\n\
1/2+z,-x,1/2-y\n\
1/2+z,1/2-x,-y\n\
x,1/2-z,1/2-y\n\
1/2+x,-z,1/2-y\n\
1/2+x,1/2-z,-y\n\
y,1/2-x,1/2-z\n\
1/2+y,-x,1/2-z\n\
1/2+y,1/2-x,-z\n\
z,1/2-y,1/2-x\n\
1/2+z,-y,1/2-x\n\
1/2+z,1/2-y,-x\n\
-x,1/2+y,1/2-z\n\
1/2-x,y,1/2-z\n\
1/2-x,1/2+y,-z\n\
-y,1/2+z,1/2-x\n\
1/2-y,z,1/2-x\n\
1/2-y,1/2+z,-x\n\
-z,1/2+x,1/2-y\n\
1/2-z,x,1/2-y\n\
1/2-z,1/2+x,-y\n\
-x,1/2+z,1/2-y\n\
1/2-x,z,1/2-y\n\
1/2-x,1/2+z,-y\n\
-y,1/2+x,1/2-z\n\
1/2-y,x,1/2-z\n\
1/2-y,1/2+x,-z\n\
-z,1/2+y,1/2-x\n\
1/2-z,y,1/2-x\n\
1/2-z,1/2+y,-x\n\
-x,1/2-y,1/2+z\n\
1/2-x,-y,1/2+z\n\
1/2-x,1/2-y,z\n\
-y,1/2-z,1/2+x\n\
1/2-y,-z,1/2+x\n\
1/2-y,1/2-z,x\n\
-z,1/2-x,1/2+y\n\
1/2-z,-x,1/2+y\n\
1/2-z,1/2-x,y\n\
-x,1/2-z,1/2+y\n\
1/2-x,-z,1/2+y\n\
1/2-x,1/2-z,y\n\
-y,1/2-x,1/2+z\n\
1/2-y,-x,1/2+z\n\
1/2-y,1/2-x,z\n\
-z,1/2-y,1/2+x\n\
1/2-z,-y,1/2+x\n\
1/2-z,1/2-y,x\n\
1/4-x,3/4-y,3/4-z\n\
3/4-x,1/4-y,3/4-z\n\
3/4-x,3/4-y,1/4-z\n\
1/4-y,3/4-z,3/4-x\n\
3/4-y,1/4-z,3/4-x\n\
3/4-y,3/4-z,1/4-x\n\
1/4-z,3/4-x,3/4-y\n\
3/4-z,1/4-x,3/4-y\n\
3/4-z,3/4-x,1/4-y\n\
1/4-x,3/4-z,3/4-y\n\
3/4-x,1/4-z,3/4-y\n\
3/4-x,3/4-z,1/4-y\n\
1/4-y,3/4-x,3/4-z\n\
3/4-y,1/4-x,3/4-z\n\
3/4-y,3/4-x,1/4-z\n\
1/4-z,3/4-y,3/4-x\n\
3/4-z,1/4-y,3/4-x\n\
3/4-z,3/4-y,1/4-x\n\
1/4-x,3/4+y,3/4+z\n\
3/4-x,1/4+y,3/4+z\n\
3/4-x,3/4+y,1/4+z\n\
1/4-y,3/4+z,3/4+x\n\
3/4-y,1/4+z,3/4+x\n\
3/4-y,3/4+z,1/4+x\n\
1/4-z,3/4+x,3/4+y\n\
3/4-z,1/4+x,3/4+y\n\
3/4-z,3/4+x,1/4+y\n\
1/4-x,3/4+z,3/4+y\n\
3/4-x,1/4+z,3/4+y\n\
3/4-x,3/4+z,1/4+y\n\
1/4-y,3/4+x,3/4+z\n\
3/4-y,1/4+x,3/4+z\n\
3/4-y,3/4+x,1/4+z\n\
1/4-z,3/4+y,3/4+x\n\
3/4-z,1/4+y,3/4+x\n\
3/4-z,3/4+y,1/4+x\n\
1/4+x,3/4-y,3/4+z\n\
3/4+x,1/4-y,3/4+z\n\
3/4+x,3/4-y,1/4+z\n\
1/4+y,3/4-z,3/4+x\n\
3/4+y,1/4-z,3/4+x\n\
3/4+y,3/4-z,1/4+x\n\
1/4+z,3/4-x,3/4+y\n\
3/4+z,1/4-x,3/4+y\n\
3/4+z,3/4-x,1/4+y\n\
1/4+x,3/4-z,3/4+y\n\
3/4+x,1/4-z,3/4+y\n\
3/4+x,3/4-z,1/4+y\n\
1/4+y,3/4-x,3/4+z\n\
3/4+y,1/4-x,3/4+z\n\
3/4+y,3/4-x,1/4+z\n\
1/4+z,3/4-y,3/4+x\n\
3/4+z,1/4-y,3/4+x\n\
3/4+z,3/4-y,1/4+x\n\
1/4+x,3/4+y,3/4-z\n\
3/4+x,1/4+y,3/4-z\n\
3/4+x,3/4+y,1/4-z\n\
1/4+y,3/4+z,3/4-x\n\
3/4+y,1/4+z,3/4-x\n\
3/4+y,3/4+z,1/4-x\n\
1/4+z,3/4+x,3/4-y\n\
3/4+z,1/4+x,3/4-y\n\
3/4+z,3/4+x,1/4-y\n\
1/4+x,3/4+z,3/4-y\n\
3/4+x,1/4+z,3/4-y\n\
3/4+x,3/4+z,1/4-y\n\
1/4+y,3/4+x,3/4-z\n\
3/4+y,1/4+x,3/4-z\n\
3/4+y,3/4+x,1/4-z\n\
1/4+z,3/4+y,3/4-x\n\
3/4+z,1/4+y,3/4-x\n\
3/4+z,3/4+y,1/4-x\n\
loop_\n\
_atom_site_label\n\
_atom_site_type_symbol\n\
_atom_site_symmetry_multiplicity\n\
_atom_site_Wyckoff_symbol\n\
_atom_site_fract_x\n\
_atom_site_fract_y\n\
_atom_site_fract_z\n\
_atom_site_occupancy\n\
_atom_site_attached_hydrogens\n\
_atom_site_calc_flag\n\
Fe1 Fe2+ 16 d 0.625 0.625 0.625 0.5 0 d\n\
Fe2 Fe3+ 16 d 0.625 0.625 0.625 0.5 0 d\n\
Fe3 Fe3+ 8 a 0. 0. 0. 1. 0 d\n\
O1 O2- 32 e 0.375 0.375 0.375 1. 0 d\n\
loop_\n\
_atom_type_symbol\n\
_atom_type_oxidation_number\n\
Fe2+ 2.000\n\
Fe3+ 3.000\n\
O2- -2.000\n\
loop_\n\
_cod_related_entry_id\n\
_cod_related_entry_database\n\
_cod_related_entry_code\n\
1 ChemSpider 4937312\n\
"], "Fe3O4.cif", {type: "text/plain",});

var exam3 = new File(["#(C) 2018 by FIZ Karlsruhe - Leibniz Institute for Information Infrastructure.  All rights reserved.\n\
data_86351-ICSD\n\
_database_code_ICSD 86351\n\
_audit_creation_date 1999-11-30\n\
_audit_update_record 2003-04-01\n\
_chemical_name_systematic 'Cobalt disulfide'\n\
_chemical_formula_structural 'Co S2'\n\
_chemical_formula_sum 'Co1 S2'\n\
_chemical_name_structure_type Pyrite-FeS2(cP12)\n\
_chemical_name_mineral Galtierite\n\
_exptl_crystal_density_diffrn 4.81\n\
_cell_measurement_temperature 295.\n\
_publ_section_title 'Charge densities in Co S2 and Ni S2 (pyrite structure)'\n\
loop_\n\
_citation_id\n\
_citation_journal_full\n\
_citation_year\n\
_citation_journal_volume\n\
_citation_page_first\n\
_citation_page_last\n\
_citation_journal_id_ASTM\n\
primary 'Acta Crystallographica, Section B: Structural Science' 1991 47 650 659\n\
ASBSDK\n\
loop_\n\
_publ_author_name\n\
'Nowack, E.'\n\
'Schwarzenbach, D.'\n\
'Hahn, T.'\n\
_cell_length_a 5.5385(2)\n\
_cell_length_b 5.5385(2)\n\
_cell_length_c 5.5385(2)\n\
_cell_angle_alpha 90.\n\
_cell_angle_beta 90.\n\
_cell_angle_gamma 90.\n\
_cell_volume 169.89\n\
_cell_formula_units_Z 4\n\
_symmetry_space_group_name_H-M 'P a -3'\n\
_symmetry_Int_Tables_number 205\n\
_refine_ls_R_factor_all 0.015\n\
loop_\n\
_symmetry_equiv_pos_site_id\n\
_symmetry_equiv_pos_as_xyz\n\
1 '-z+1/2, x+1/2, y'\n\
2 'z+1/2, x, -y+1/2'\n\
3 'z, -x+1/2, y+1/2'\n\
4 '-z, -x, -y'\n\
5 'y, -z+1/2, x+1/2'\n\
6 '-y+1/2, z+1/2, x'\n\
7 'y+1/2, z, -x+1/2'\n\
8 '-y, -z, -x'\n\
9 'x+1/2, y, -z+1/2'\n\
10 'x, -y+1/2, z+1/2'\n\
11 '-x+1/2, y+1/2, z'\n\
12 '-x, -y, -z'\n\
13 'z+1/2, -x+1/2, -y'\n\
14 '-z+1/2, -x, y+1/2'\n\
15 '-z, x+1/2, -y+1/2'\n\
16 'z, x, y'\n\
17 '-y, z+1/2, -x+1/2'\n\
18 'y+1/2, -z+1/2, -x'\n\
19 '-y+1/2, -z, x+1/2'\n\
20 'y, z, x'\n\
21 '-x+1/2, -y, z+1/2'\n\
22 '-x, y+1/2, -z+1/2'\n\
23 'x+1/2, -y+1/2, -z'\n\
24 'x, y, z'\n\
loop_\n\
_atom_type_symbol\n\
_atom_type_oxidation_number\n\
Co2+ 2\n\
S1- -1\n\
loop_\n\
_atom_site_label\n\
_atom_site_type_symbol\n\
_atom_site_symmetry_multiplicity\n\
_atom_site_Wyckoff_symbol\n\
_atom_site_fract_x\n\
_atom_site_fract_y\n\
_atom_site_fract_z\n\
_atom_site_B_iso_or_equiv\n\
_atom_site_occupancy\n\
_atom_site_attached_hydrogens\n\
Co1 Co2+ 4 a 0 0 0 . 1. 0\n\
S1 S1- 8 c 0.38988(1) 0.38988(1) 0.38988(1) . 1. 0\n\
loop_\n\
_atom_site_aniso_label\n\
_atom_site_aniso_type_symbol\n\
_atom_site_aniso_U_11\n\
_atom_site_aniso_U_22\n\
_atom_site_aniso_U_33\n\
_atom_site_aniso_U_12\n\
_atom_site_aniso_U_13\n\
_atom_site_aniso_U_23\n\
Co1 Co2+ 0.00426(2) 0.00426(2) 0.00426(2) 0.00001(1) 0.00001(1) 0.00001(1)\n\
S1 S1- 0.00453(2) 0.00453(2) 0.00453(2) -0.00016(2) -0.00016(2) -0.00016(2)\n\
#End of TTdata_86351-ICSD"], "CoS2.cif", {type: "text/plain",});

var exam4 = new File(["data_CSD_CIF_ABAGAO\n\
_audit_creation_date 2016-11-22\n\
_audit_creation_method CSD-ConQuest-V1\n\
_database_code_CSD ABAGAO\n\
_database_code_depnum_ccdc_archive 'CCDC 1498689'\n\
_chemical_formula_sum 'C14 H15 Cu1 N3 O5'\n\
_chemical_formula_moiety\n\
;\n\
(C14 H13 Cu1 N3 O4)n,H2 O1\n\
;\n\
_journal_coden_Cambridge 580\n\
_journal_volume 119\n\
_journal_year 2016\n\
_journal_page_first 563\n\
_journal_name_full 'Polyhedron '\n\
loop_\n\
_publ_author_name\n\
\"A.Timothy Royappa\"\n\
\"A.D.Royappa\"\n\
\"R.F.Moral\"\n\
\"A.L.Rheingold\"\n\
\"R.J.Papoular\"\n\
\"D.M.Blum\"\n\
\"T.Q.Duong\"\n\
\"J.R.Stepherson\"\n\
\"O.D.Vu\"\n\
\"Banghao Chen\"\n\
\"M.R.Suchomel\"\n\
\"J.A.Golen\"\n\
\"G.Andre\"\n\
\"N.Kourkoumelis\"\n\
\"A.D.Mercer\"\n\
\"A.M.Pekarek\"\n\
\"D.C.Kelly\"\n\
_chemical_name_systematic\n\
;\n\
catena-[(\m-ethanedioato)-(1-(pyridin-2-yl)-N-((pyridin-2-yl)methyl)methanamin\n\
e)-copper(ii) monohydrate]\n\
;\n\
_chemical_name_common\n\
;\n\
catena-[(mu-oxalato)-(di-(2-picolyl)amine)-copper(ii) monohydrate]\n\
;\n\
_cell_volume   2959.318\n\
_exptl_crystal_colour 'blue'\n\
_exptl_crystal_density_diffrn 1.656\n\
_exptl_crystal_description 'block'\n\
_diffrn_ambient_temperature 100\n\
#These two values have been output from a single CSD field.\n\
_refine_ls_R_factor_gt 0.0362\n\
_refine_ls_wR_factor_gt 0.0362\n\
_symmetry_cell_setting orthorhombic\n\
_symmetry_space_group_name_H-M 'P b c a'\n\
_symmetry_Int_Tables_number 61\n\
loop_\n\
_symmetry_equiv_pos_site_id\n\
_symmetry_equiv_pos_as_xyz\n\
1 x,y,z\n\
2 1/2-x,-y,1/2+z\n\
3 -x,1/2+y,1/2-z\n\
4 1/2+x,1/2-y,-z\n\
5 -x,-y,-z\n\
6 -1/2+x,y,-1/2-z\n\
7 x,-1/2-y,-1/2+z\n\
8 -1/2-x,-1/2+y,z\n\
_cell_length_a 18.5834(8)\n\
_cell_length_b 8.3215(4)\n\
_cell_length_c 19.1366(7)\n\
_cell_angle_alpha 90\n\
_cell_angle_beta 90\n\
_cell_angle_gamma 90\n\
_cell_formula_units_Z 8\n\
loop_\n\
_atom_type_symbol\n\
_atom_type_radius_bond\n\
C 0.68\n\
H 0.23\n\
Cu 1.32\n\
N 0.68\n\
O 0.68\n\
loop_\n\
_atom_site_label\n\
_atom_site_type_symbol\n\
_atom_site_fract_x\n\
_atom_site_fract_y\n\
_atom_site_fract_z\n\
Cu1 Cu 0.56165(2) 0.43062(4) 0.28700(2)\n\
O1 O 0.64917(12) 0.5891(2) 0.34381(10)\n\
O2 O 0.53447(12) 0.6511(2) 0.26192(10)\n\
O3 O 0.65868(13) 0.8518(3) 0.36868(11)\n\
O4 O 0.54528(12) 0.9114(2) 0.28233(11)\n\
N1 N 0.50185(14) 0.4072(3) 0.37356(12)\n\
N2 N 0.62594(15) 0.3848(3) 0.20563(12)\n\
N3 N 0.60376(14) 0.2231(3) 0.32100(12)\n\
H1 H 0.57550 0.13460 0.30130\n\
C1 C 0.63138(17) 0.7346(4) 0.33832(15)\n\
C2 C 0.59693(18) 0.2173(4) 0.39779(15)\n\
H2 H 0.63600 0.27650 0.41940\n\
H3 H 0.59900 0.10680 0.41390\n\
C3 C 0.52577(18) 0.2912(4) 0.41742(15)\n\
C4 C 0.67725(18) 0.2740(4) 0.21948(16)\n\
C5 C 0.43969(19) 0.4820(4) 0.38716(16)\n\
H4 H 0.42400 0.56200 0.35680\n\
C6 C 0.56533(17) 0.7708(4) 0.29063(15)\n\
C7 C 0.62106(19) 0.4481(4) 0.14073(16)\n\
H5 H 0.58560 0.52410 0.13150\n\
C8 C 0.39805(19) 0.4446(4) 0.44456(16)\n\
H6 H 0.35500 0.49840 0.45300\n\
C9 C 0.4219(2) 0.3252(4) 0.48922(17)\n\
H7 H 0.39460 0.29690 0.52810\n\
C10 C 0.67760(17) 0.2119(4) 0.29343(15)\n\
H8 H 0.69380 0.10110 0.29430\n\
H9 H 0.71010 0.27540 0.32190\n\
C11 C 0.6675(2) 0.4028(4) 0.08760(17)\n\
H10 H 0.66340 0.44730 0.04320\n\
C12 C 0.4860(2) 0.2482(4) 0.47595(16)\n\
H11 H 0.50260 0.16830 0.50590\n\
C13 C 0.72500(19) 0.2248(4) 0.16824(18)\n\
H12 H 0.76010 0.14840 0.17820\n\
C14 C 0.7199(2) 0.2905(5) 0.10193(18)\n\
H13 H 0.75190 0.25890 0.06710\n\
O5 O 0.76306(14) 0.9821(3) 0.45424(10)\n\
H14 H 0.78750 1.03440 0.42450\n\
H15 H 0.73300 0.92210 0.43320\n\
Cu1B Cu 0.43835(2) 0.93062(4) 0.21300(2)\n\
O4B O 0.45472(12) 0.4114(2) 0.21767(11)\n\
loop_\n\
_geom_bond_atom_site_label_1\n\
_geom_bond_atom_site_label_2\n\
_geom_bond_distance\n\
_geom_bond_site_symmetry_1\n\
_geom_bond_site_symmetry_2\n\
Cu1 O1 2.359 1_555 1_555\n\
O1 C1 1.259 1_555 1_555\n\
O2 Cu1 1.963 1_555 1_555\n\
O3 C1 1.243 1_555 1_555\n\
O4 C6 1.238 1_555 1_555\n\
N1 Cu1 2.004 1_555 1_555\n\
N2 Cu1 1.999 1_555 1_555\n\
N3 Cu1 2.004 1_555 1_555\n\
H1 N3 0.980 1_555 1_555\n\
C1 C6 1.559 1_555 1_555\n\
C2 N3 1.476 1_555 1_555\n\
H2 C2 0.970 1_555 1_555\n\
H3 C2 0.971 1_555 1_555\n\
C3 N1 1.354 1_555 1_555\n\
C4 N2 1.353 1_555 1_555\n\
C5 N1 1.338 1_555 1_555\n\
H4 C5 0.930 1_555 1_555\n\
C6 O2 1.274 1_555 1_555\n\
C7 N2 1.352 1_555 1_555\n\
H5 C7 0.930 1_555 1_555\n\
C8 C5 1.379 1_555 1_555\n\
H6 C8 0.931 1_555 1_555\n\
C9 C8 1.383 1_555 1_555\n\
H7 C9 0.931 1_555 1_555\n\
C10 N3 1.473 1_555 1_555\n\
H8 C10 0.970 1_555 1_555\n\
H9 C10 0.970 1_555 1_555\n\
C11 C7 1.386 1_555 1_555\n\
H10 C11 0.930 1_555 1_555\n\
C12 C3 1.389 1_555 1_555\n\
H11 C12 0.930 1_555 1_555\n\
C13 C4 1.384 1_555 1_555\n\
H12 C13 0.931 1_555 1_555\n\
C14 C11 1.377 1_555 1_555\n\
H13 C14 0.931 1_555 1_555\n\
O5 H14 0.848 1_555 1_555\n\
H15 O5 0.851 1_555 1_555\n\
Cu1B O4 2.395 1_555 1_555\n\
O4B Cu1 2.395 1_555 1_555\n\
C2 C3 1.506 1_555 1_555\n\
C4 C10 1.507 1_555 1_555\n\
C9 C12 1.376 1_555 1_555\n\
C13 C14 1.385 1_555 1_555\n\
#END\n\
"], "ABAGAO_MOF.cif", {type: "text/plain",});


//
// --------------------- ChemKit API ---------------
//

function UFF() {
    var param = parameters();
    if(param.mode == 'View'){
      alert("In View mode,cannot use this function!");
      return;
    }

    var mol_data = export_mol("content");
    // temp = temp.split('\r\n');
    // var mol_data = "";
    // for (var i = 0; i < temp.length; i++) {
    //   mol_data = mol_data + temp[i] + '\\n';
    // }

    var post_data = {
      'ff':"UFF",
      'mol_data':mol_data
    };
    console.log(JSON.stringify(post_data));
    $.ajax({
        url: 'https://matgen.nscc-gz.cn/chemkit/ichem/1',
        data: JSON.stringify(post_data),
        contentType: 'application/json',
        type: 'post',
        dataType: 'json',
        async: false,
        success: function(result) {
          console.log(result);
          if(result.pdb_data != "") {
            readPDBfile(result.pdb_data.split('\n'));
            InfoWin("Energy = " + result.energy);
            centerMolecule();
            drawMolecule();
            drawAxis();
          }
          else {
            alert("No data");
          }
        },
        error: function(xOptions, textStatus, errorThrown) {
            alert('error in getting data ' + textStatus);
            console.log("xOptions:", xOptions);
            console.log("textStatus:", textStatus);
            console.log("error:", errorThrown);
        }
    });
}

function irrKPoints() {
  var molecule = Mol();
  if (molecule[0].type != "crystal"){
    alert("Only periodic molecule can apply this function!");
    return;
  }
  var cif_data = export_cif("content");
  // temp = temp.split('\r\n');
  // var mol_data = "";
  // for (var i = 0; i < temp.length; i++) {
  //   mol_data = mol_data + temp[i] + '\\n';
  // }

  var post_data = {
    'ff':"-irk",
    'cif_data':cif_data
  };
  console.log(JSON.stringify(post_data));
  $.ajax({
      url: 'https://matgen.nscc-gz.cn/chemkit/spg/1',
      data: JSON.stringify(post_data),
      contentType: 'application/json',
      type: 'post',
      // dataType: 'json',
      async: true,
      success: function(result) {
        console.log(result);
        if(result != "") {
          InfoWin(result);
        }
        else {
          alert("No data");
        }
      },
      error: function(xOptions, textStatus, errorThrown) {
          alert('error in getting data ' + textStatus);
          console.log("xOptions:", xOptions);
          console.log("textStatus:", textStatus);
          console.log("error:", errorThrown);
      }
  });
}

function spaceGroup() {
  var molecule = Mol();
  if (molecule[0].type != "crystal"){
    alert("Only periodic molecule can apply this function!");
    return;
  }
  var cif_data = export_cif("content");
  // temp = temp.split('\r\n');
  // var mol_data = "";
  // for (var i = 0; i < temp.length; i++) {
  //   mol_data = mol_data + temp[i] + '\\n';
  // }
  console.log(cif_data);

  var post_data = {
    'ff':"-s",
    'cif_data':cif_data
  };
  console.log(JSON.stringify(post_data));
  $.ajax({
      url: 'https://matgen.nscc-gz.cn/chemkit/spg/2',
      data: JSON.stringify(post_data),
      contentType: 'application/json',
      type: 'post',
      // dataType: 'json',
      async: true,
      success: function(result) {
        console.log(result);
        if(result != "") {
          InfoWin(result);
        }
        else {
          alert("No data");
        }
      },
      error: function(xOptions, textStatus, errorThrown) {
          alert('error in getting data ' + textStatus);
          console.log("xOptions:", xOptions);
          console.log("textStatus:", textStatus);
          console.log("error:", errorThrown);
      }
  });
}

