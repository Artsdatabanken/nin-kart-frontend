import sysconfig from "Funksjoner/config";
import colorArray2Image from "../../../../Funksjoner/palette/colorArray2Image";

function drawAll(drawArgs) {
  const layer = {
    [drawArgs.kode]: {
      data: { source: drawArgs.forelderkode },
      draw: {
        [drawArgs.kode]: {
          order: 700
        }
      }
    }
  };
  return layer;
}

function lagStyle(format, drawArgs) {
  const { opplyst, url } = drawArgs;
  let newPalette = makePalette(opplyst, drawArgs.barn);
  const gradient = {
    base: "raster",
    blend: "multiply",
    animated: false,
    shaders: {
      uniforms: {
        palette: newPalette,
        depth: 1 - (drawArgs.depth || 0) / 8 - 0.5 / 8
      },
      blocks: {
        global: `
        highp float rgbaToIndex(vec4 rgba) {
            const float pixelWidth = 1./512.;
            // G = MSB, color 256-511, B = LSB, color 0-255
            return (rgba.g*256. + rgba.b)*255.*pixelWidth+0.5*pixelWidth;
          }`,
        color: `
          float v = rgbaToIndex(sampleRaster(0));
          color = texture2D(palette, vec2(v, depth));
      `
      }
    }
  };
  return { name: drawArgs.kode, value: gradient };
}

const kodeTilIndex = {
  _: 0,
  "NN-LA-TI-K-A-1": 1,
  "NN-LA-TI-I-A-1": 2,
  "NN-LA-TI-I-A-2": 3,
  "NN-LA-TI-I-A-3": 4,
  "NN-LA-TI-I-A-4": 5,
  "NN-LA-TI-I-A-5": 6,
  "NN-LA-TI-I-A-6": 7,
  "NN-LA-TI-I-A-7": 8,
  "NN-LA-TI-I-A-8": 9,
  "NN-LA-TI-I-A-9": 10,
  "NN-LA-TI-I-A-10": 11,
  "NN-LA-TI-I-A-11": 12,
  "NN-LA-TI-I-A-12": 13,
  "NN-LA-TI-I-A-13": 14,
  "NN-LA-TI-I-A-14": 15,
  "NN-LA-TI-I-A-15": 16,
  "NN-LA-TI-I-A-16": 17,
  "NN-LA-TI-I-A-17": 18,
  "NN-LA-TI-I-A-18": 19,
  "NN-LA-TI-I-A-19": 20,
  "NN-LA-TI-I-A-20": 21,
  "NN-LA-TI-I-A-21": 22,
  "NN-LA-TI-I-A-22": 23,
  "NN-LA-TI-I-A-23": 24,
  "NN-LA-TI-I-A-24": 25,
  "NN-LA-TI-I-A-25": 26,
  "NN-LA-TI-I-A-26": 27,
  "NN-LA-TI-I-A-27": 28,
  "NN-LA-TI-I-A-28": 29,
  "NN-LA-TI-I-A-29": 30,
  "NN-LA-TI-I-A-30": 31,
  "NN-LA-TI-I-A-31": 32,
  "NN-LA-TI-I-A-32": 33,
  "NN-LA-TI-I-A-33": 34,
  "NN-LA-TI-I-A-34": 35,
  "NN-LA-TI-I-A-35": 36,
  "NN-LA-TI-I-A-36": 37,
  "NN-LA-TI-I-A-37": 38,
  "NN-LA-TI-I-A-38": 39,
  "NN-LA-TI-I-A-39": 40,
  "NN-LA-TI-I-A-40": 41,
  "NN-LA-TI-I-A-41": 42,
  "NN-LA-TI-I-A-42": 43,
  "NN-LA-TI-I-A-43": 44,
  "NN-LA-TI-I-A-44": 45,
  "NN-LA-TI-I-A-45": 46,
  "NN-LA-TI-I-A-46": 47,
  "NN-LA-TI-I-A-47": 48,
  "NN-LA-TI-I-A-48": 49,
  "NN-LA-TI-I-A-49": 50,
  "NN-LA-TI-I-A-50": 51,
  "NN-LA-TI-I-A-51": 52,
  "NN-LA-TI-I-A-52": 53,
  "NN-LA-TI-I-A-53": 54,
  "NN-LA-TI-I-A-54": 55,
  "NN-LA-TI-I-D-1": 56,
  "NN-LA-TI-I-D-2": 57,
  "NN-LA-TI-I-D-3": 58,
  "NN-LA-TI-I-D-4": 59,
  "NN-LA-TI-I-D-5": 60,
  "NN-LA-TI-I-D-6": 61,
  "NN-LA-TI-I-D-7": 62,
  "NN-LA-TI-I-D-8": 63,
  "NN-LA-TI-I-D-9": 64,
  "NN-LA-TI-I-D-10": 65,
  "NN-LA-TI-I-D-11": 66,
  "NN-LA-TI-I-D-12": 67,
  "NN-LA-TI-I-D-13": 68,
  "NN-LA-TI-I-D-14": 69,
  "NN-LA-TI-I-D-15": 70,
  "NN-LA-TI-I-D-16": 71,
  "NN-LA-TI-I-D-17": 72,
  "NN-LA-TI-I-D-18": 73,
  "NN-LA-TI-I-D-19": 74,
  "NN-LA-TI-I-D-20": 75,
  "NN-LA-TI-I-D-21": 76,
  "NN-LA-TI-I-D-22": 77,
  "NN-LA-TI-I-D-23": 78,
  "NN-LA-TI-I-D-24": 79,
  "NN-LA-TI-I-D-25": 80,
  "NN-LA-TI-I-D-26": 81,
  "NN-LA-TI-I-D-27": 82,
  "NN-LA-TI-I-D-28": 83,
  "NN-LA-TI-I-D-29": 84,
  "NN-LA-TI-I-D-30": 85,
  "NN-LA-TI-I-D-31": 86,
  "NN-LA-TI-I-D-32": 87,
  "NN-LA-TI-I-D-33": 88,
  "NN-LA-TI-I-D-34": 89,
  "NN-LA-TI-I-D-35": 90,
  "NN-LA-TI-I-D-36": 91,
  "NN-LA-TI-I-D-37": 92,
  "NN-LA-TI-I-D-38": 93,
  "NN-LA-TI-I-D-39": 94,
  "NN-LA-TI-I-D-40": 95,
  "NN-LA-TI-I-D-41": 96,
  "NN-LA-TI-I-D-42": 97,
  "NN-LA-TI-I-D-43": 98,
  "NN-LA-TI-I-D-44": 99,
  "NN-LA-TI-I-D-45": 100,
  "NN-LA-TI-I-D-46": 101,
  "NN-LA-TI-I-D-47": 102,
  "NN-LA-TI-I-D-48": 103,
  "NN-LA-TI-I-D-49": 104,
  "NN-LA-TI-I-D-50": 105,
  "NN-LA-TI-I-D-51": 106,
  "NN-LA-TI-I-D-52": 107,
  "NN-LA-TI-I-D-53": 108,
  "NN-LA-TI-I-D-54": 109,
  "NN-LA-TI-I-D-55": 110,
  "NN-LA-TI-I-D-56": 111,
  "NN-LA-TI-I-D-57": 112,
  "NN-LA-TI-I-D-58": 113,
  "NN-LA-TI-I-D-59": 114,
  "NN-LA-TI-I-D-60": 115,
  "NN-LA-TI-I-D-61": 116,
  "NN-LA-TI-I-D-62": 117,
  "NN-LA-TI-I-D-63": 118,
  "NN-LA-TI-I-D-64": 119,
  "NN-LA-TI-I-D-65": 120,
  "NN-LA-TI-I-D-66": 121,
  "NN-LA-TI-I-D-67": 122,
  "NN-LA-TI-I-D-68": 123,
  "NN-LA-TI-I-D-69": 124,
  "NN-LA-TI-I-D-70": 125,
  "NN-LA-TI-I-D-71": 126,
  "NN-LA-TI-I-D-72": 127,
  "NN-LA-TI-I-D-73": 128,
  "NN-LA-TI-I-D-74": 129,
  "NN-LA-TI-I-D-75": 130,
  "NN-LA-TI-I-D-76": 131,
  "NN-LA-TI-I-D-77": 132,
  "NN-LA-TI-I-D-78": 133,
  "NN-LA-TI-I-D-79": 134,
  "NN-LA-TI-I-D-80": 135,
  "NN-LA-TI-I-D-81": 136,
  "NN-LA-TI-I-D-82": 137,
  "NN-LA-TI-I-D-83": 138,
  "NN-LA-TI-I-D-84": 139,
  "NN-LA-TI-I-D-85": 140,
  "NN-LA-TI-I-D-86": 141,
  "NN-LA-TI-I-D-87": 142,
  "NN-LA-TI-I-D-88": 143,
  "NN-LA-TI-I-D-89": 144,
  "NN-LA-TI-I-D-90": 145,
  "NN-LA-TI-I-D-91": 146,
  "NN-LA-TI-I-D-92": 147,
  "NN-LA-TI-I-D-93": 148,
  "NN-LA-TI-I-D-94": 149,
  "NN-LA-TI-I-D-95": 150,
  "NN-LA-TI-I-D-96": 151,
  "NN-LA-TI-I-D-97": 152,
  "NN-LA-TI-I-D-98": 153,
  "NN-LA-TI-I-D-99": 154,
  "NN-LA-TI-I-D-100": 155,
  "NN-LA-TI-I-D-101": 156,
  "NN-LA-TI-I-D-102": 157,
  "NN-LA-TI-I-D-103": 158,
  "NN-LA-TI-I-D-104": 159,
  "NN-LA-TI-I-S-1": 160,
  "NN-LA-TI-I-S-2": 161,
  "NN-LA-TI-I-S-3": 162,
  "NN-LA-TI-I-S-4": 163,
  "NN-LA-TI-I-S-5": 164,
  "NN-LA-TI-I-S-6": 165,
  "NN-LA-TI-I-S-7": 166,
  "NN-LA-TI-I-S-8": 167,
  "NN-LA-TI-I-S-9": 168,
  "NN-LA-TI-I-S-10": 169,
  "NN-LA-TI-I-S-11": 170,
  "NN-LA-TI-I-S-12": 171,
  "NN-LA-TI-I-S-13": 172,
  "NN-LA-TI-I-S-14": 173,
  "NN-LA-TI-I-S-15": 174,
  "NN-LA-TI-I-S-16": 175,
  "NN-LA-TI-I-S-17": 176,
  "NN-LA-TI-I-S-18": 177,
  "NN-LA-TI-I-S-19": 178,
  "NN-LA-TI-I-S-20": 179,
  "NN-LA-TI-I-S-21": 180,
  "NN-LA-TI-I-S-22": 181,
  "NN-LA-TI-I-S-23": 182,
  "NN-LA-TI-I-S-24": 183,
  "NN-LA-TI-I-S-25": 184,
  "NN-LA-TI-I-S-26": 185,
  "NN-LA-TI-I-S-27": 186,
  "NN-LA-TI-I-S-28": 187,
  "NN-LA-TI-I-S-29": 188,
  "NN-LA-TI-I-S-30": 189,
  "NN-LA-TI-I-S-31": 190,
  "NN-LA-TI-I-S-32": 191,
  "NN-LA-TI-I-S-33": 192,
  "NN-LA-TI-I-S-34": 193,
  "NN-LA-TI-I-S-35": 194,
  "NN-LA-TI-I-S-36": 195,
  "NN-LA-TI-K-F-1": 196,
  "NN-LA-TI-K-F-2": 197,
  "NN-LA-TI-K-F-3": 198,
  "NN-LA-TI-K-F-4": 199,
  "NN-LA-TI-K-F-5": 200,
  "NN-LA-TI-K-F-6": 201,
  "NN-LA-TI-K-F-7": 202,
  "NN-LA-TI-K-F-8": 203,
  "NN-LA-TI-K-F-9": 204,
  "NN-LA-TI-K-F-10": 205,
  "NN-LA-TI-K-F-11": 206,
  "NN-LA-TI-K-F-12": 207,
  "NN-LA-TI-K-F-13": 208,
  "NN-LA-TI-K-F-14": 209,
  "NN-LA-TI-K-F-15": 210,
  "NN-LA-TI-K-F-16": 211,
  "NN-LA-TI-K-F-17": 212,
  "NN-LA-TI-K-F-18": 213,
  "NN-LA-TI-K-F-19": 214,
  "NN-LA-TI-K-F-20": 215,
  "NN-LA-TI-K-F-21": 216,
  "NN-LA-TI-K-F-22": 217,
  "NN-LA-TI-K-F-23": 218,
  "NN-LA-TI-K-F-24": 219,
  "NN-LA-TI-K-F-25": 220,
  "NN-LA-TI-K-F-26": 221,
  "NN-LA-TI-K-S-1": 222,
  "NN-LA-TI-K-S-2": 223,
  "NN-LA-TI-K-S-3": 224,
  "NN-LA-TI-K-S-4": 225,
  "NN-LA-TI-K-S-5": 226,
  "NN-LA-TI-K-S-6": 227,
  "NN-LA-TI-K-S-7": 228,
  "NN-LA-TI-K-S-8": 229,
  "NN-LA-TI-K-S-9": 230,
  "NN-LA-TI-K-S-10": 231,
  "NN-LA-TI-K-S-11": 232,
  "NN-LA-TI-K-S-12": 233,
  "NN-LA-TI-K-S-13": 234,
  "NN-LA-TI-K-S-14": 235,
  "NN-LA-TI-K-S-15": 236,
  "NN-LA-TI-K-S-16": 237,
  "NN-LA-TI-K-S-17": 238,
  "NN-LA-TI-K-S-18": 239,
  "NN-LA-TI-K-S-19": 240,
  "NN-LA-TI-K-S-20": 241,
  "NN-LA-TI-K-S-21": 242,
  "NN-LA-TI-K-S-22": 243,
  "NN-LA-TI-K-S-23": 244,
  "NN-LA-TI-K-S-24": 245,
  "NN-LA-TI-K-S-25": 246,
  "NN-LA-TI-K-S-26": 247,
  "NN-LA-TI-K-S-27": 248,
  "NN-LA-TI-K-S-28": 249,
  "NN-LA-TI-K-S-29": 250,
  "NN-LA-TI-K-S-30": 251,
  "NN-LA-TI-K-S-31": 252,
  "NN-LA-TI-K-S-32": 253,
  "NN-LA-TI-K-S-33": 254,
  "NN-LA-TI-K-S-34": 255,
  "NN-LA-TI-K-S-35": 256,
  "NN-LA-TI-K-S-36": 257,
  "NN-LA-TI-K-S-37": 258,
  "NN-LA-TI-K-S-38": 259,
  "NN-LA-TI-K-S-39": 260,
  "NN-LA-TI-K-S-40": 261,
  "NN-LA-TI-K-S-41": 262,
  "NN-LA-TI-K-S-42": 263,
  "NN-LA-TI-K-S-43": 264,
  "NN-LA-TI-K-S-44": 265,
  "NN-LA-TI-K-S-45": 266,
  "NN-LA-TI-K-S-46": 267,
  "NN-LA-TI-K-S-47": 268,
  "NN-LA-TI-K-S-48": 269,
  "NN-LA-TI-K-S-49": 270,
  "NN-LA-TI-K-S-50": 271,
  "NN-LA-TI-K-S-51": 272,
  "NN-LA-TI-K-S-52": 273,
  "NN-LA-TI-K-S-53": 274,
  "NN-LA-TI-K-S-54": 275,
  "NN-LA-TI-K-S-55": 276,
  "NN-LA-TI-K-S-56": 277,
  "NN-LA-TI-K-S-57": 278,
  "NN-LA-TI-K-S-58": 279,
  "NN-LA-TI-K-S-59": 280,
  "NN-LA-TI-K-S-60": 281,
  "NN-LA-TI-K-S-61": 282,
  "NN-LA-TI-K-S-62": 283,
  "NN-LA-TI-K-S-63": 284,
  "NN-LA-TI-I-A": 285,
  "NN-LA-TI-I-D": 286,
  "NN-LA-TI-I-S": 287,
  "NN-LA-TI-K-F": 288,
  "NN-LA-TI-M-S": 289,
  "NN-LA-TI-M-D": 290,
  "NN-LA-TI-M-A": 291
};

function finnBarn(kode, barn) {
  for (var barnet of barn) if (kode.startsWith(barnet.kode)) return barnet;
  return { kode: kode, farge: "#fff" };
}

function makePalette(opplyst, barna) {
  const hash = {};
  for (var b of barna) hash[b.kode] = b.farge;
  const colors = [];
  Object.keys(kodeTilIndex).forEach(kode => {
    const barnet = finnBarn(kode, barna);
    if (barnet.kode == opplyst.kode) colors.push("#f88");
    else colors.push(barnet.farge);
  });
  return colorArray2Image(colors);
}

function lagSource({ url, zoom }, { bbox }) {
  const source = sysconfig.createTileSource(url, "Raster", zoom, bbox);
  //  source.tile_size = 256;
  return source;
}

export default { drawAll, lagSource, lagStyle };
