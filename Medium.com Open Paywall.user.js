// ==UserScript==
// @name         Medium.com Open Paywall
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  It directs all Medum URLs to cached addresses.Thus, all articles can be read for free.
// @author       hcode
// @match https://*.medium.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAgVBMVEUSEA7///8AAACfnp6qqakIBQD29vY+PjwNCwhhYGCRkZDq6ur8/PwjIiD39/cLCQbk5OS+vr3MzMtLSknw8PB1dHPExMOLioqura1RUFC4t7dsa2oqKCfc3NwxMC8eHRtFREPS0dFbWlmBgH+Qj481NDJxcG9IR0Z9fHxYVlYYFxTlfFIPAAAGI0lEQVR4nO2cb1vqPAzGR3VSZDDQqaj8ERU9+v0/4INjK9vaJZ1HZnOe+/dSpFduuqVpmiaKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiUF6cauSfVuOw4nFxzrK4/4Yl6pkf9+70CtX5wIPb7wi85cfd9iDwzkfg9KOzJenEY9yH0wvU6spHYXdL1Bk/6tVnegpNDUMmMw+BF+u427B6ww97FfXgZPYKry88FJ51tEU9skPOVccf7buokYfAROlug7IuZtGXvr0xLx4KXztNoXrPmPEeVA/vnzFnzgtcbbpMobpk56/bE/F3aLXlFf7pMIVajenBznrVt//BlytW4LaDTeqGHuu1Z317i+5ZV5o8+k8hs7j2PX+5Sbxbv/IWGC/JgS57Wf6asG5hMPAOueko5uoX5i+36oETOPcUmNLBUdeY4aeIP9modO1nGvO4/5bASK0Z3+5rGhPF/JrASO0SWuDYK+TmgtvfE8hvcbz8HzfKbwr8mNK2zTziNY8opgcpbuIht9y/8MapN2aMoAXOPARyzjhogQM2XlM7boiwBbLxGp+LCVvgYEib55GLCVwgE6+xLiZ4gdN30j6PLGTgAgfnlH0+KboQBFLrfUbFa6WLoQYIQeAZFYwQBpoo5oFIqoUg8I46khm3b1iNi6Ge9RAEvj5Rz1h7fq3cKM1U4AIvyUzpqm0KTS7mMnyB94TA1nitPGzM1uELJFPBLWmjdFlEMXMlQCCVuk2enTaa7zwKEBgpKqZ0x2tlFDPbpBIEUkdO02uHkSY7/vXt8AXSyc2FS2C5UdrFEgTSG7skttyMiWK+SjIkCIzX1BmmbaVxMSMhAukSmvGmeUBbupg8khMhMF4TAq38mhoWH+TbKREC6ZPtVVR/C81G6V6QwGtqCt9qdpoo5pCVkiGQzj/U68yMi7kRJfCNOI1JRlVDTRSzzJ2PEIE6pmoTqiWIqtxAFhkbIQKZaond0VKzpAxlCaTTuMd4TZeCysS3FIF0OWlmptDM9Is0gZqytPI7FC5mqovFUYxAOuQeH1zm3sUUfzAPrRyB8Y6awqKovPwVjjt9OQLp8plZnpwxW8fVceIFCfygSi/yuMWke18kCqSrXvI5KzNwlSoTUQI/CIFf9WvqvpjjSh5DkkD64sFcHaOYD5kC6dKz5EmpIrWxqk67JIF0ivTBRDGvcgWS8dqwcELJpJKlkSVQf1L5tdviO7VstyyBPtXAjZJuYQLjHVdJuncxtVSwMIE+twwbr600gUOmVHZwMRQtkL/807gjKk/gU7vBOSPhAiPmdlOztESgwG5XBeQJjBSVIk2a5V0SBf4hBFrX0AUKTCfEFN78AwIj9dpq8mxinYYKFJi2h9yO82yBAttTpIldBBy6QOeV63TSEq85KvEDFZiWhRXuLiFtKdI3MQLVdXHK525dYT6ukzlK80IVWG5sbbd4+NyZInVVqYcpMD3eG2t5Rl1NIRLX1d4gBerKO3bhqrZzNxRYOT1uiAJrmZds4rTbMYXOG3chClQ3tVVgGzleQ22H3OO163UNUKDVP+TcVbdsV5G2ONzgBMbKCsRcq722/s3dPSA4gWm8tS2x9giRHa+5W3iQR/vk5acToZ15wanjrmC8q0+h+1IvsfPYu12n/zotLacPs40jCFtU/yPRThdDXyK87bMZ0MGgtq5Ot/YDqGq3fpzl9+Tm/4ttf+2cDgatW28qOYrPayH3yPWaUs9nofCzz6eUbAdkx2zq/fip49a59tC332H1+B5qOmttLwOVI21Xcsqrl+Bgq/trOkYfrGRWj5VjijQbWlb6nLTlrProvZlbxDVVW02aKky8ZkUx7uXGzXbZi0JTA9LOvOlKzW/SdDHap2PjUaFn/52/08c2yRnYsZX+PFQlNAvvu+nbf//0vlRvtj6WNJMuhSOxThEXzDhNWhIHPwhdiGZoZubjZT7vDfPUs9dgVU4ed6vr2Zgns5Z7dZmNs2YUo0YXSTf62FhMfLD6AOl0OZk03sBIL0ddGZ4+KNVeuL9n/c2vpXWFvoNuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4n/IfqYlbKrAESfoAAAAASUVORK5CYII=
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    window.location.href = "https://archive.is/newest/" + window.location.href

})();
