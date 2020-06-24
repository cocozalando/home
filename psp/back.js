   function GetSelectedPsp(){
        var y = document.getElementById("year");
        var c = document.getElementById("campaign");
        var h = document.getElementById("channel");
        var s = document.getElementById("subchannel");
        var result = '001MAR' + y.options[y.selectedIndex].value + c.options[c.selectedIndex].value + '-' + h.options[h.selectedIndex].value + '-' + s.options[s.selectedIndex].value + '-E';

        document.getElementById("result").innerHTML = result;
      }

    function GetSelectedText(){
        var y = document.getElementById("year");
        var c = document.getElementById("campaign");
        var h = document.getElementById("channel");
        var s = document.getElementById("subchannel");
        var result = 'Year: '+y.options[y.selectedIndex].text + ' Campaign: ' + c.options[c.selectedIndex].text + ' Channel: ' + h.options[h.selectedIndex].text + ' Sub-channel: ' + s.options[s.selectedIndex].text;

        document.getElementById("result").innerHTML = result;
      }

    function GetSelectedOrderId(){
        var country = document.getElementById("country");

        var results = 'R221FS000' + country.options[country.selectedIndex].value + '0'

        document.getElementById("results").innerHTML = results;
      }
