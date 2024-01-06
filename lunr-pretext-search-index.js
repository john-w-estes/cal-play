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
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-vector-value",
  "level": "1",
  "url": "sec-vector-value.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vector Valued Functions",
  "body": " Vector Valued Functions  Mathematica makes vector-valued functions as simple as an other function. We just need to use a parameter (like ) for the input, and a vector as the output.  For example, let's plot, differentiate, and integrate the function . First we define the function r[t_]:= {Cos[t], .5Sqrt[t]*Sin[t]} .  To plot , use ParametricPlot[ ] as follows ParametricPlot[r[t],{t,0,5Pi}] . Similarly, we find the derivative by D[r[t],t] , and the integral with Integrate[r[t],t] .   Try graphing the following using ParametricPlot[ ] :          Graph the curve with parametric equations , , and .  Explain the appearance of the graph by showing it lies on a sphere. You can do so by converting to spherical coordinates, plot with SphericalPlot[ ] , and then plot them together with the Show[plot1, plot2] function.    Consider the function .  What is the initial point of the path corresponding to ?  What is ?  Plot the curve. (Use ParametricPlot3D.)   "
},
{
  "id": "sec-vector-value-5",
  "level": "2",
  "url": "sec-vector-value.html#sec-vector-value-5",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " Try graphing the following using ParametricPlot[ ] :        "
},
{
  "id": "sec-vector-value-6",
  "level": "2",
  "url": "sec-vector-value.html#sec-vector-value-6",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " Graph the curve with parametric equations , , and .  Explain the appearance of the graph by showing it lies on a sphere. You can do so by converting to spherical coordinates, plot with SphericalPlot[ ] , and then plot them together with the Show[plot1, plot2] function.  "
},
{
  "id": "sec-vector-value-7",
  "level": "2",
  "url": "sec-vector-value.html#sec-vector-value-7",
  "type": "Example",
  "number": "2.1.3",
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
