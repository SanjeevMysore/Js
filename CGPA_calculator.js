function result(g1,c1,g2,c2,g3,c3,g4,c4,g5,c5,g6,c6){
  var avg=(g1*c1)+(g2*c2)+(g3*c3)+(g4*c4)+(g5*c5)+(g6*c6)
  var CGPA=avg/(c1+c2+c3+c4+c5+c6)
  document.write(CGPA)
}
result(8,3,9,3,10,3,7,4,8,4,9,3);
