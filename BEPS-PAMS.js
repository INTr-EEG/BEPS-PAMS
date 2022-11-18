/****************** 
 * Beps-Pams Test *
 ******************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'BEPS-PAMS';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'Audio': ['Yes', 'No'], 'Debug': ['No', 'Yes'], 'Show boxes': ['No', 'Yes']};

// Start code blocks for 'Before Experiment'

function make_sound(name, filepath) {
    return new sound.Sound({"win": psychoJS.window, "value": filepath, "secs": (- 1), "stereo": true, "hamming": true, "name": name});
}

function make_img(name, file_name, pos, size, opacity) {
    return new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_name, "pos": pos, "size": size, "opacity": opacity});
}

function make_slide(name, pos = [0, 0], size = SLIDE_SIZE) {
    return make_img(name, `${SLIDES_DIR}/${name}.png`, pos, size, 1);
}

var fillColor;
var lineColor;
function make_rect(name, pos, size, opacity, lineColor, lineWidth = 3, fillColor = null) {
    if ((fillColor !== null)) {
        fillColor = new util.Color(fillColor);
    }
    if ((lineColor !== null)) {
        lineColor = new util.Color(lineColor);
    }
    return new visual.Rect({"win": psychoJS.window, "name": name, "width": size[0], "height": size[1], "pos": pos, "lineWidth": lineWidth, "lineColor": lineColor, "fillColor": fillColor, "opacity": opacity});
}

var cimgs;
function make_boxes(names, xys, sizes, opacity = CLICK_BOX_OPACITY, lineColor = "green") {
    var cimgs;
    cimgs = [];
    for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        cimgs.push(make_rect(names[i], xys[i], sizes[i], opacity, lineColor));
    }
    return cimgs;
}

function make_circle(name, pos, size, fillColor = "black", lineColor = "black", lineWidth = 3, opacity = 1) {
    if ((lineColor !== null)) {
        lineColor = new util.Color(lineColor);
    }
    if ((fillColor !== null)) {
        fillColor = new util.Color(fillColor);
    }
    return new visual.Polygon({"win": psychoJS.window, "name": name, "edges": 360, "size": size, "pos": pos, "lineWidth": lineWidth, "lineColor": lineColor, "fillColor": fillColor, "opacity": opacity});
}

function make_radio0(name, pos) {
    return make_circle(name, pos, [0.03, 0.03], null, "black");
}

function make_radio1(name, pos) {
    return make_circle(name, pos, [0.023, 0.023], "black", null, 0);
}

var min_y;
function find_min_y(cimgs) {
    var min_y, y;
    min_y = 0.5;
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        y = (cimg.pos[1] - (cimg.height / 2));
        if ((min_y > y)) {
            min_y = y;
        }
    }
    return min_y;
}

function make_radios(func, cimgs, res = [], offset = (- 0.05)) {
    var min_y, radio_y;
    min_y = find_min_y(cimgs);
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        radio_y = (min_y + offset);
        res.push(func(cimg.name, [cimg.pos[0], radio_y]));
    }
    return res;
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(beginRoutineBegin());
flowScheduler.add(beginRoutineEachFrame());
flowScheduler.add(beginRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/aud/BEPS Instructions.m4a', 'path': 'resources/aud/BEPS Instructions.m4a'},
    {'name': 'resources/aud/BEPS Q01.m4a', 'path': 'resources/aud/BEPS Q01.m4a'},
    {'name': 'resources/aud/BEPS Q02.m4a', 'path': 'resources/aud/BEPS Q02.m4a'},
    {'name': 'resources/aud/BEPS Q03.m4a', 'path': 'resources/aud/BEPS Q03.m4a'},
    {'name': 'resources/aud/BEPS Q04.m4a', 'path': 'resources/aud/BEPS Q04.m4a'},
    {'name': 'resources/aud/BEPS Q04a.m4a', 'path': 'resources/aud/BEPS Q04a.m4a'},
    {'name': 'resources/aud/BEPS Q05.m4a', 'path': 'resources/aud/BEPS Q05.m4a'},
    {'name': 'resources/aud/BEPS Q06.m4a', 'path': 'resources/aud/BEPS Q06.m4a'},
    {'name': 'resources/aud/BEPS Q07.m4a', 'path': 'resources/aud/BEPS Q07.m4a'},
    {'name': 'resources/aud/BEPS Q08.m4a', 'path': 'resources/aud/BEPS Q08.m4a'},
    {'name': 'resources/aud/PAMS Q01.m4a', 'path': 'resources/aud/PAMS Q01.m4a'},
    {'name': 'resources/aud/PAMS Q02.m4a', 'path': 'resources/aud/PAMS Q02.m4a'},
    {'name': 'resources/aud/PAMS Q03.m4a', 'path': 'resources/aud/PAMS Q03.m4a'},
    {'name': 'resources/aud/PAMS Q04.m4a', 'path': 'resources/aud/PAMS Q04.m4a'},
    {'name': 'resources/aud/PAMS Q05.m4a', 'path': 'resources/aud/PAMS Q05.m4a'},
    {'name': 'resources/aud/PAMS Q06.m4a', 'path': 'resources/aud/PAMS Q06.m4a'},
    {'name': 'resources/aud/PAMS Q07.m4a', 'path': 'resources/aud/PAMS Q07.m4a'},
    {'name': 'resources/aud/PAMS Q08.m4a', 'path': 'resources/aud/PAMS Q08.m4a'},
    {'name': 'resources/aud/PAMS Q09.m4a', 'path': 'resources/aud/PAMS Q09.m4a'},
    {'name': 'resources/aud/PAMS Q10.m4a', 'path': 'resources/aud/PAMS Q10.m4a'},
    {'name': 'resources/aud/PAMS Q11.m4a', 'path': 'resources/aud/PAMS Q11.m4a'},
    {'name': 'resources/aud/PAMS Q12.m4a', 'path': 'resources/aud/PAMS Q12.m4a'},
    {'name': 'resources/aud/PAMS Q13.m4a', 'path': 'resources/aud/PAMS Q13.m4a'},
    {'name': 'resources/aud/PAMS Q14.m4a', 'path': 'resources/aud/PAMS Q14.m4a'},
    {'name': 'resources/aud/PAMS Q15.m4a', 'path': 'resources/aud/PAMS Q15.m4a'},
    {'name': 'resources/imgs/slides/slide-02.png', 'path': 'resources/imgs/slides/slide-02.png'},
    {'name': 'resources/imgs/slides/slide-03.png', 'path': 'resources/imgs/slides/slide-03.png'},
    {'name': 'resources/imgs/slides/slide-04.png', 'path': 'resources/imgs/slides/slide-04.png'},
    {'name': 'resources/imgs/slides/slide-05.png', 'path': 'resources/imgs/slides/slide-05.png'},
    {'name': 'resources/imgs/slides/slide-06.png', 'path': 'resources/imgs/slides/slide-06.png'},
    {'name': 'resources/imgs/slides/slide-07.png', 'path': 'resources/imgs/slides/slide-07.png'},
    {'name': 'resources/imgs/slides/slide-09.png', 'path': 'resources/imgs/slides/slide-09.png'},
    {'name': 'resources/imgs/slides/slide-10.png', 'path': 'resources/imgs/slides/slide-10.png'},
    {'name': 'resources/imgs/slides/slide-11.png', 'path': 'resources/imgs/slides/slide-11.png'},
    {'name': 'resources/imgs/slides/slide-12.png', 'path': 'resources/imgs/slides/slide-12.png'},
    {'name': 'resources/imgs/slides/slide-13.png', 'path': 'resources/imgs/slides/slide-13.png'},
    {'name': 'resources/imgs/slides/slide-14.png', 'path': 'resources/imgs/slides/slide-14.png'},
    {'name': 'resources/imgs/slides/slide-15.png', 'path': 'resources/imgs/slides/slide-15.png'},
    {'name': 'resources/imgs/slides/slide-16.png', 'path': 'resources/imgs/slides/slide-16.png'},
    {'name': 'resources/imgs/slides/slide-17.png', 'path': 'resources/imgs/slides/slide-17.png'},
    {'name': 'resources/imgs/slides/slide-18.png', 'path': 'resources/imgs/slides/slide-18.png'},
    {'name': 'resources/imgs/slides/slide-19.png', 'path': 'resources/imgs/slides/slide-19.png'},
    {'name': 'resources/imgs/slides/slide-20.png', 'path': 'resources/imgs/slides/slide-20.png'},
    {'name': 'resources/imgs/slides/slide-21.png', 'path': 'resources/imgs/slides/slide-21.png'},
    {'name': 'resources/imgs/slides/slide-22.png', 'path': 'resources/imgs/slides/slide-22.png'},
    {'name': 'resources/imgs/slides/slide-23.png', 'path': 'resources/imgs/slides/slide-23.png'},
    {'name': 'resources/seqs/conditions.csv', 'path': 'resources/seqs/conditions.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var beginClock;
var expVersion;
var AUD_DIR;
var IMGS_DIR;
var SLIDES_DIR;
var SEQ_FILE;
var SHOW_DEBUG;
var USE_AUDIO;
var SHOW_BOUND_BOX;
var CLICK_BOX_OPACITY;
var BOUND_BOX_OPACITY;
var SLIDE_H;
var SLIDE_W;
var SLIDE_SIZE;
var MOUSE;
var MOUSE_L;
var MOUSE_L_prev;
var SOUND;
var previous_wrong;
var all_cimgs;
var trialClock;
var run_anim;
var aimgs;
var starts;
var ends;
var all_anims;
var trial_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  expVersion = "2022.09.26";
  AUD_DIR = "resources/aud";
  IMGS_DIR = "resources/imgs";
  SLIDES_DIR = `${IMGS_DIR}/slides`;
  SEQ_FILE = "resources/seqs/conditions.csv";
  SHOW_DEBUG = (expInfo["Debug"] === "Yes");
  USE_AUDIO = (expInfo["Audio"] === "Yes");
  SHOW_BOUND_BOX = (expInfo["Show boxes"] === "Yes");
  CLICK_BOX_OPACITY = (SHOW_DEBUG ? 0.2 : 0);
  BOUND_BOX_OPACITY = (SHOW_BOUND_BOX ? 1 : 0);
  /*
  Slides are 1052 x 745 pixels.
  Positions and sizes of clickable areas are hard
  coded, so changing this will break _everything_!
  */
  SLIDE_H = 0.7;
  SLIDE_W = ((SLIDE_H / 745) * 1052);
  SLIDE_SIZE = [SLIDE_W, SLIDE_H];
  MOUSE = new core.Mouse({"win": psychoJS.window});
  MOUSE_L = 0;
  MOUSE_L_prev = 0;
  SOUND = null;
  previous_wrong = false;
  all_cimgs = {"slide-02": get_5umbrellas, "slide-03": get_pattern1, "slide-04": get_pattern2, "slide-05": get_symmetry, "slide-06": get_shapes, "slide-07": get_cookies, "slide-09": get_flowers, "slide-10": get_yes_no, "slide-11": get_red_apples1, "slide-12": get_red_apples2, "slide-13": get_9or6, "slide-14": get_20or12, "slide-15": get_5or8, "slide-16": get_21or17, "slide-17": get_num_pattern, "slide-18": get_green_apples, "slide-19": get_farm, "slide-20": get_cows, "slide-21": get_2plus2, "slide-22": get_sweets, "slide-23": get_3minus1};
  
  function get_5umbrellas() {
      var names, sizes, xys, y0, y1;
      names = ["orange", "white", "yellow", "black", "red"];
      y0 = 0.175;
      y1 = (y0 - 0.35);
      xys = [[(- 0.305), y0], [0, y0], [0.305, y0], [(- 0.185), y1], [0.1615, y1]];
      sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          sizes.push([0.245, 0.21]);
      }
      return make_boxes(names, xys, sizes);
  }
  function get_pattern1() {
      var names, sizes, xys, y0;
      names = ["star", "bread", "watermelon", "pizza"];
      y0 = (- 0.195);
      xys = [[(- 0.335), y0], [(- 0.105), y0], [0.13, y0], [0.345, y0]];
      sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          sizes.push([0.14, 0.14]);
      }
      return make_boxes(names, xys, sizes);
  }
  function get_pattern2() {
      var names, sizes, xys, y0;
      names = ["ice_cream", "basketball", "car", "beachball"];
      y0 = (- 0.189);
      xys = [[(- 0.351), (y0 + 0.012)], [(- 0.134), y0], [0.097, y0], [0.334, y0]];
      sizes = [[0.08, 0.205], [0.13, 0.13], [0.18, 0.1], [0.13, 0.13]];
      return make_boxes(names, xys, sizes);
  }
  function get_symmetry() {
      var names, sizes, xys, y0;
      names = ["burger", "sun", "cloud", "tree"];
      y0 = (- 0.135);
      xys = [[(- 0.357), y0], [(- 0.118), y0], [0.128, (y0 + 0.004)], [0.37, (y0 + 0.006)]];
      sizes = [[0.185, 0.185], [0.18, 0.18], [0.22, 0.16], [0.205, 0.215]];
      return make_boxes(names, xys, sizes);
  }
  function get_shapes() {
      var names, sizes, xys, y0;
      names = ["rectangle", "triangle", "circle", "square"];
      y0 = (- 0.183);
      xys = [[(- 0.328), (y0 - 0.006)], [(- 0.078), (y0 + 0.002)], [0.144, y0], [0.36, y0]];
      sizes = [[0.248, 0.1], [0.152, 0.132], [0.132, 0.132], [0.126, 0.126]];
      return make_boxes(names, xys, sizes);
  }
  function get_cookies() {
      var names, sizes, xys, y0;
      names = ["cookie1", "cookie2", "cookie3", "cookie4"];
      y0 = (- 0.146);
      xys = [[(- 0.351), (y0 + 0.01)], [(- 0.122), y0], [0.111, (y0 + 0.01)], [0.362, y0]];
      sizes = [[0.205, 0.205], [0.17, 0.17], [0.222, 0.22], [0.198, 0.195]];
      return make_boxes(names, xys, sizes);
  }
  
  function get_flowers() {
      var names, sizes, xys, y0;
      names = ["flowers3", "flowers4", "flowers5", "flowers1"];
      y0 = (- 0.133);
      xys = [[(- 0.362), y0], [(- 0.119), (y0 + 0.029)], [0.13, (y0 + 0.032)], [0.367, (y0 + 0.008)]];
      sizes = [[0.19, 0.06], [0.13, 0.131], [0.2, 0.125], [0.082, 0.086]];
      return make_boxes(names, xys, sizes);
  }
  function get_yes_no() {
      var names, sizes, xys, y0;
      names = ["yes", "no"];
      y0 = (- 0.256);
      xys = [[(- 0.284), y0], [0.292, y0]];
      sizes = [[0.262, 0.09], [0.262, 0.09]];
      return make_boxes(names, xys, sizes);
  }
  function get_red_apples1() {
      var names, sizes, xys, y0;
      names = ["10", "12", "8", "13"];
      y0 = (- 0.199);
      xys = [[(- 0.374), (y0 + 0.003)], [(- 0.115), y0], [0.123, y0], [0.365, y0]];
      sizes = [];
      for (var i, _pj_c = 0, _pj_a = util.range(names.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          sizes.push([0.175, 0.135]);
      }
      return make_boxes(names, xys, sizes);
  }
  function get_red_apples2() {
      var names, sizes, xys, y0;
      names = ["7", "9", "10", "8"];
      y0 = (- 0.199);
      xys = [[(- 0.367), (y0 + 0.003)], [(- 0.113), y0], [0.126, y0], [0.368, (y0 + 0.003)]];
      sizes = [[0.165, 0.135], [0.17, 0.135], [0.17, 0.135], [0.16, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  function get_9or6() {
      var h0, names, sizes, w0, xys, y0;
      names = ["9", "6"];
      y0 = 0.021;
      w0 = 0.18;
      h0 = 0.27;
      xys = [[(- 0.302), y0], [0.297, y0]];
      sizes = [[w0, h0], [w0, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_20or12() {
      var h0, names, sizes, w0, xys, y0;
      names = ["20", "12"];
      y0 = 0.001;
      w0 = 0.33;
      h0 = 0.23;
      xys = [[(- 0.252), y0], [0.26, y0]];
      sizes = [[w0, h0], [w0, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_5or8() {
      var h0, names, sizes, w0, xys, y0;
      names = ["5", "8"];
      y0 = 0.021;
      w0 = 0.18;
      h0 = 0.27;
      xys = [[(- 0.307), y0], [0.296, y0]];
      sizes = [[w0, h0], [w0, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_21or17() {
      var h0, names, sizes, w0, xys, y0;
      names = ["21", "17"];
      y0 = (- 0.014);
      w0 = 0.32;
      h0 = 0.225;
      xys = [[(- 0.268), y0], [0.27, y0]];
      sizes = [[w0, h0], [w0, h0]];
      return make_boxes(names, xys, sizes);
  }
  function get_num_pattern() {
      var names, sizes, xys, y0;
      names = ["12", "9", "11", "10"];
      y0 = (- 0.199);
      xys = [[(- 0.362), (y0 + 0.003)], [(- 0.113), y0], [0.126, y0], [0.368, (y0 + 0.003)]];
      sizes = [[0.153, 0.135], [0.17, 0.135], [0.17, 0.135], [0.16, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  function get_green_apples() {
      var names, sizes, xys, y0;
      names = ["2", "1", "4", "3"];
      y0 = (- 0.199);
      xys = [[(- 0.362), (y0 + 0.003)], [(- 0.113), y0], [0.126, y0], [0.368, (y0 + 0.003)]];
      sizes = [[0.153, 0.135], [0.17, 0.135], [0.17, 0.135], [0.16, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  function get_farm() {
      var names, sizes, x0, xys, y0;
      names = ["2", "4", "1", "3"];
      x0 = 0.002;
      y0 = (- 0.234);
      xys = [[(x0 - 0.362), (y0 + 0.003)], [(x0 - 0.113), y0], [(x0 + 0.126), y0], [(x0 + 0.368), (y0 + 0.003)]];
      sizes = [[0.153, 0.135], [0.17, 0.135], [0.17, 0.135], [0.16, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  function get_cows() {
      var names, sizes, x0, xys, y0;
      names = ["6", "4", "5", "2"];
      x0 = 0.002;
      y0 = (- 0.234);
      xys = [[(x0 - 0.362), (y0 + 0.003)], [(x0 - 0.113), y0], [(x0 + 0.126), y0], [(x0 + 0.368), (y0 + 0.003)]];
      sizes = [[0.153, 0.135], [0.17, 0.135], [0.17, 0.135], [0.16, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  function get_2plus2() {
      var names, sizes, x0, xys, y0;
      names = ["3", "0", "2", "4"];
      x0 = 0.002;
      y0 = (- 0.234);
      xys = [[(x0 - 0.362), (y0 + 0.003)], [(x0 - 0.113), y0], [(x0 + 0.126), y0], [(x0 + 0.368), (y0 + 0.003)]];
      sizes = [[0.153, 0.135], [0.17, 0.135], [0.17, 0.135], [0.16, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  function get_sweets() {
      var names, sizes, x0, xys, y0;
      names = ["2", "7", "5", "3"];
      x0 = 0.002;
      y0 = (- 0.234);
      xys = [[(x0 - 0.362), (y0 + 0.003)], [(x0 - 0.113), y0], [(x0 + 0.126), y0], [(x0 + 0.368), (y0 + 0.003)]];
      sizes = [[0.153, 0.135], [0.17, 0.135], [0.17, 0.135], [0.16, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  function get_3minus1() {
      var names, sizes, x0, xys, y0;
      names = ["1", "3", "2", "4"];
      x0 = 0.002;
      y0 = (- 0.234);
      xys = [[(x0 - 0.362), (y0 + 0.003)], [(x0 - 0.113), y0], [(x0 + 0.126), y0], [(x0 + 0.368), (y0 + 0.003)]];
      sizes = [[0.153, 0.135], [0.17, 0.135], [0.17, 0.135], [0.16, 0.135]];
      return make_boxes(names, xys, sizes);
  }
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  run_anim = false;
  aimgs = null;
  starts = null;
  ends = null;
  function anim_beps_q04() {
      var end_times, names, sizes, start_times, xys;
      names = ["box_pattern", "box_options"];
      xys = [[0, 0.15], [0, (- 0.22)]];
      sizes = [[0.8, 0.2], [0.9, 0.25]];
      start_times = [2, 5];
      end_times = [4, 7];
      return [make_boxes(names, xys, sizes, 1, "red"), start_times, end_times];
  }
  function anim_pams_q10() {
      var end_times, names, sizes, start_times, xys;
      names = ["box_long_pencil"];
      xys = [[(- 0.022), 0.16]];
      sizes = [[0.85, 0.23]];
      start_times = [2];
      end_times = [8];
      return [make_boxes(names, xys, sizes, 1, "red"), start_times, end_times];
  }
  function anim_pams_q11() {
      var end_times, names, sizes, start_times, xys;
      names = ["box_chicken"];
      xys = [[(- 0.215), 0.005]];
      sizes = [[0.23, 0.18]];
      start_times = [6.5];
      end_times = [9.7];
      return [make_boxes(names, xys, sizes, 1, "red"), start_times, end_times];
  }
  function anim_pams_q12() {
      var end_times, names, sizes, start_times, xys;
      names = ["box_cows"];
      xys = [[0, 0.125]];
      sizes = [[0.67, 0.41]];
      start_times = [1.9];
      end_times = [4.2];
      return [make_boxes(names, xys, sizes, 1, "red"), start_times, end_times];
  }
  all_anims = {"BEPS Q04": anim_beps_q04, "PAMS Q10": anim_pams_q10, "PAMS Q11": anim_pams_q11, "PAMS Q12": anim_pams_q12};
  
  trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var beginComponents;
function beginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin'-------
    t = 0;
    beginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    beginComponents = [];
    
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function beginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginRoutineEnd() {
  return async function () {
    //------Ending Routine 'begin'-------
    for (const thisComponent of beginComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, SEQ_FILE, '0:'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var cimg_names;
var response;
var has_responded;
var RESPONSE_TIME;
var slide_num;
var qn_num;
var slide;
var radio0s;
var radio1s;
var aud_file;
var SOUND_DUR;
var SOUND_START;
var _pj;
var key;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData("expVersion", expVersion);
    cimgs = [];
    cimg_names = [];
    response = null;
    has_responded = false;
    RESPONSE_TIME = null;
    slide_num = slideNum;
    qn_num = qnNum;
    if ((((taskName === "BEPS") && (qn_num === "Q04a")) && (! previous_wrong))) {
        previous_wrong = false;
        continueRoutine = false;
    }
    slide = make_slide(slide_num);
    slide.autoDraw = true;
    cimgs = all_cimgs[slide_num]();
    radio0s = [];
    radio1s = [];
    if ((slide_num === "slide-02")) {
        radio0s = make_radios(make_radio0, cimgs.slice(0, 3), radio0s);
        radio0s = make_radios(make_radio0, cimgs.slice(3), radio0s);
        radio1s = make_radios(make_radio1, cimgs.slice(0, 3), radio1s);
        radio1s = make_radios(make_radio1, cimgs.slice(3), radio1s);
    } else {
        radio0s = make_radios(make_radio0, cimgs, radio0s);
        radio1s = make_radios(make_radio1, cimgs, radio1s);
    }
    for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        cimgs[i].opacity = CLICK_BOX_OPACITY;
        cimgs[i].autoDraw = true;
        radio0s[i].autoDraw = true;
    }
    if (USE_AUDIO) {
        if (((taskName === "BEPS") && (qn_num === "Q01"))) {
            aud_file = `${AUD_DIR}/BEPS Instructions.m4a`;
        } else {
            aud_file = `${AUD_DIR}/${taskName} ${qn_num}.m4a`;
        }
        SOUND = make_sound("sound", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND_START = 0;
        SOUND.play();
    }
    if (SHOW_DEBUG) {
        cimg_names = [];
        for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            cimg_names.push(cimgs[i].name);
        }
    }
    
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    key = `${taskName} ${qn_num}`;
    if ((USE_AUDIO && _pj.in_es6(key, all_anims))) {
        run_anim = true;
        [aimgs, starts, ends] = all_anims[key]();
    }
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_text);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((((taskName === "BEPS") && (qn_num === "Q01")) && (SOUND_START === 0)) && ((t - SOUND_DUR) > 0))) {
        aud_file = `${AUD_DIR}/${taskName} ${qn_num}.m4a`;
        SOUND = make_sound("sound", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND_START = t;
        SOUND.play();
    }
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        console.log(`MOUSE_L_prev = ${MOUSE_L_prev}; MOUSE_L = ${MOUSE_L}`);
        MOUSE_L_prev = MOUSE_L;
        if (MOUSE_L) {
            for (var i, _pj_c = 0, _pj_a = util.range(cimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                if ((cimgs[i].contains(MOUSE) || radio0s[i].contains(MOUSE))) {
                    if ((! has_responded)) {
                        has_responded = true;
                    }
                    response = cimgs[i].name;
                    for (var radio, _pj_f = 0, _pj_d = radio1s, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                        radio = _pj_d[_pj_f];
                        radio.autoDraw = false;
                        if ((response === radio.name)) {
                            radio.autoDraw = true;
                        }
                    }
                    RESPONSE_TIME = t;
                }
            }
        }
    }
    if (((RESPONSE_TIME !== null) && ((t - RESPONSE_TIME) > 0.5))) {
        continueRoutine = false;
    }
    if ((slide_num !== "slide-07")) {
        for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            cimg = _pj_a[_pj_c];
            if (cimg.contains(MOUSE)) {
                cimg.opacity = BOUND_BOX_OPACITY;
            } else {
                cimg.opacity = CLICK_BOX_OPACITY;
            }
        }
    }
    if (SHOW_DEBUG) {
        trial_text.text = `
    taskName = ${taskName}
    aud_file = ${aud_file}
    slide_num = ${slide_num}
    qn_num = ${qn_num}
    cimg_names = ${cimg_names}
    response = ${response}
    corrAns = ${corrAns}
    t = ${round(t, 3)}`
    ;
    }
    
    if (run_anim) {
        for (var i, _pj_c = 0, _pj_a = util.range(aimgs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((t >= starts[i])) {
                aimgs[i].autoDraw = true;
            }
            if ((t >= ends[i])) {
                aimgs[i].autoDraw = false;
            }
        }
    }
    
    
    // *trial_text* updates
    if (t >= 0.0 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var is_correct;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (USE_AUDIO) {
        SOUND.stop();
    }
    for (var cimg, _pj_c = 0, _pj_a = cimgs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        cimg = _pj_a[_pj_c];
        cimg.size = [0, 0];
        cimg.autoDraw = false;
    }
    for (var radio, _pj_c = 0, _pj_a = radio0s, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        radio = _pj_a[_pj_c];
        radio.size = [0, 0];
        radio.autoDraw = false;
    }
    for (var radio, _pj_c = 0, _pj_a = radio1s, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        radio = _pj_a[_pj_c];
        radio.size = [0, 0];
        radio.autoDraw = false;
    }
    slide.size = [0, 0];
    slide.autoDraw = false;
    if ((response === null)) {
        response = "";
    }
    is_correct = ((response.toString() === corrAns.toString()) ? 1 : 0);
    if ((response === "")) {
        is_correct = "";
    }
    psychoJS.experiment.addData("response", response);
    psychoJS.experiment.addData("is_correct", is_correct);
    psychoJS.experiment.addData("end_timestamp", util.MonotonicClock.getDateStr());
    psychoJS.experiment.addData("total_seconds", globalClock.getTime());
    if ((((taskName === "BEPS") && (qn_num === "Q04")) && (is_correct === 0))) {
        previous_wrong = true;
    }
    if (SHOW_DEBUG) {
        console.log(`response = ${response}`);
        console.log(`corrAns = ${corrAns}`);
        console.log(`previous_wrong = ${previous_wrong}`);
    }
    
    if (run_anim) {
        run_anim = false;
    }
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
