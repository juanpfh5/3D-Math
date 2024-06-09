// window.MathJax = {
//     tex: {
//         inlineMath: [['$', '$'], ['\\(', '\\)']],
//         displayMath: [['$$', '$$'], ['\\[', '\\]']]
//     },
//     svg: {
//         fontCache: 'global'
//     }
// };

window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        packages: {'[+]': ['tex-svg']},
        processEscapes: true
    },
    svg: {
        fontCache: 'global'
    }
};