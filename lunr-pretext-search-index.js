var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-spherical-coords",
  "level": "1",
  "url": "sec-spherical-coords.html",
  "type": "Section",
  "number": "1.1",
  "title": "Spherical Coordinates",
  "body": " Spherical Coordinates  It is not always easy to visualize functions with spherical coordinates. Thankully Mathematica makes it easy with SphericalPlot[ ] . We just need a function determined by angles and . Let's try one.   SphericalPlot3D[Sin[Theta]^2*Cos[Phi]-Sin[Phi],{Theta,-2Pi,2Pi},{Phi,0,Pi}]       Spherical Plots   Try graphing the following using ParametricPlot[ ] :           We use the power, sum, and constant multiple rules and find that the derivative is .     Differentiating a polynomial   Write a Mathematica function that converts rectangular coordinates to spherical coordinates. Then use your function to convert the following coordinates to spherical coordinates.           We use the power, sum, and constant multiple rules and find that the derivative is .    The \"bumpy sphere” with an equation in spherical coordinates is , with and , where and are positive numbers and and are positive integers, may be used in applied mathematics to model tumor growth.   "
},
{
  "id": "sec-spherical-coords-4",
  "level": "2",
  "url": "sec-spherical-coords.html#sec-spherical-coords-4",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-spherical-coords-5",
  "level": "2",
  "url": "sec-spherical-coords.html#sec-spherical-coords-5",
  "type": "Example",
  "number": "1.1.2",
  "title": "Spherical Plots.",
  "body": " Spherical Plots   Try graphing the following using ParametricPlot[ ] :           We use the power, sum, and constant multiple rules and find that the derivative is .   "
},
{
  "id": "sec-spherical-coords-6",
  "level": "2",
  "url": "sec-spherical-coords.html#sec-spherical-coords-6",
  "type": "Example",
  "number": "1.1.3",
  "title": "Differentiating a polynomial.",
  "body": " Differentiating a polynomial   Write a Mathematica function that converts rectangular coordinates to spherical coordinates. Then use your function to convert the following coordinates to spherical coordinates.           We use the power, sum, and constant multiple rules and find that the derivative is .   "
},
{
  "id": "sec-spherical-coords-8",
  "level": "2",
  "url": "sec-spherical-coords.html#sec-spherical-coords-8",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": ""
},
{
  "id": "sec-vector-value",
  "level": "1",
  "url": "sec-vector-value.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vector Valued Functions",
  "body": " Vector Valued Functions  Mathematica makes vector-valued functions as simple as an other function. We just need to use a parameter (like ) for the input, and a vector as the output.  For example, let's plot, differentiate, and integrate the function . First we define the function r[t_]:= {Cos[t], .5Sqrt[t]*Sin[t]} .  To plot , use ParametricPlot[ ] as follows ParametricPlot[r[t],{t,0,5Pi}] . Similarly, we find the derivative by D[r[t],t] , and the integral with Integrate[r[t],t] .   Try graphing the following using ParametricPlot[ ] :          Graph the curve with parametric equations , , and .  Explain the appearance of the graph by showing it lies on a sphere. You can do so by converting to spherical coordinates, plot with SphericalPlot[ ] , and then plot them together with the Show[plot1, plot2] function.    Consider the function .  What is the initial point of the path corresponding to ?  What is ?  Plot the curve. (Use ParametricPlot3D.)   "
},
{
  "id": "sec-vector-value-5",
  "level": "2",
  "url": "sec-vector-value.html#sec-vector-value-5",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": " Try graphing the following using ParametricPlot[ ] :        "
},
{
  "id": "sec-vector-value-6",
  "level": "2",
  "url": "sec-vector-value.html#sec-vector-value-6",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": " Graph the curve with parametric equations , , and .  Explain the appearance of the graph by showing it lies on a sphere. You can do so by converting to spherical coordinates, plot with SphericalPlot[ ] , and then plot them together with the Show[plot1, plot2] function.  "
},
{
  "id": "sec-vector-value-7",
  "level": "2",
  "url": "sec-vector-value.html#sec-vector-value-7",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " Consider the function .  What is the initial point of the path corresponding to ?  What is ?  Plot the curve. (Use ParametricPlot3D.)  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
