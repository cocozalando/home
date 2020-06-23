function getSubChannel(){

            var list1 = document.getElementById('channel');
            var list2 = document.getElementById('subchannel');
            var list1SelectedValue = list1.options[list1.selectedIndex].value;

            if (list1SelectedValue=='001')
            {
                list2.options.length=0;

                list2.options[1] = new Option('AFFILIATE', '01');
            }

            else if (list1SelectedValue=='002')
            {

                list2.options.length=0;

                list2.options[1] = new Option('BRAND CAMPAIGN', '01');


            }

            else if (list1SelectedValue=='003')
            {

                list2.options.length=0;

                list2.options[1] = new Option('BROCKEN TRACKING', '01');


            }

            else if (list1SelectedValue=='004')
            {

                list2.options.length=0;

                list2.options[1] = new Option('CINEMA', '01');


            }

            else if (list1SelectedValue=='005')
            {

                list2.options.length=0;

                list2.options[1] = new Option('COMPARISON', '01');


            }

            else if (list1SelectedValue=='006')
            {

                list2.options.length=0;

                list2.options[1] = new Option('BOT', '01');


            }

            else if (list1SelectedValue=='007')
            {

                list2.options.length=0;

                list2.options[1] = new Option('CRM', '01');
                list2.options[2] = new Option('Instant Messages', '03');
                list2.options[3] = new Option('Online', '05');
                list2.options[4] = new Option('Push Notification', '06');
                list2.options[5] = new Option('UNDEFINED', '02');
                list2.options[6] = new Option('N/A', '04');

            }

            else if (list1SelectedValue=='008')
            {

                list2.options.length=0;

                list2.options[1] = new Option('DIRECT TYPE-IN', '01');


            }

            else if (list1SelectedValue=='009')
            {

                list2.options.length=0;

                list2.options[2] = new Option('CONSUMER', '02');
                list2.options[3] = new Option('PARTNER', '03');
                list2.options[1] = new Option('EVENTS/CONSUMER', '01');


            }

            else if (list1SelectedValue=='010')
            {

                list2.options.length=0;

                list2.options[1] = new Option('B2B', '01');
                list2.options[2] = new Option('B2C', '02');
                list2.options[3] = new Option('RETAIL', '03');
                list2.options[3] = new Option('GIFTCARD', '04');


            }

            else if (list1SelectedValue=='011')
            {

                list2.options.length=0;

                list2.options[1] = new Option('INFLUENCEUR COLLABORATION', '01');
                list2.options[2] = new Option('PRODUCTION', '02');


            }

            else if (list1SelectedValue=='015')
            {

                list2.options.length=0;

                list2.options[1] = new Option('MARKET RESEARCH', '01');


            }

            else if (list1SelectedValue=='016')
            {

                list2.options.length=0;

                list2.options[3] = new Option('MEDIA COLLABORATION', '01');
                list2.options[5] = new Option('COLLABORY', '02');

            }

            else if (list1SelectedValue=='017')
            {

                list2.options.length=0;

                list2.options[1] = new Option('No Suchannel', '01');


            }

            else if (list1SelectedValue=='018')
            {

                list2.options.length=0;

                list2.options[1] = new Option('PROGRAMMATIC', '02');
                list2.options[2] = new Option('ONLINE VIDEOS', '03');
                list2.options[3] = new Option('DIRECT DEALS', '04');
                list2.options[4] = new Option('N/A', '01');

            }

            else if (list1SelectedValue=='019')
            {

                list2.options.length=0;

                list2.options[1] = new Option('OTHER REFERRALS', '01');


            }

            else if (list1SelectedValue=='020')
            {

                list2.options.length=0;


                list2.options[2] = new Option('Classic', '02');
                list2.options[3] = new Option('Digital', '03');
                list2.options[4] = new Option('Specials', '04');
                list2.options[1] = new Option('OOH', '01');

            }

            else if (list1SelectedValue=='022')
            {

                list2.options.length=0;

                list2.options[1] = new Option('PR', '01');
            }

            else if (list1SelectedValue=='023')
            {

                list2.options.length=0;

                list2.options[1] = new Option('PRINT', '01');
            }

            else if (list1SelectedValue=='024')
            {

                list2.options.length=0;

                list2.options[1] = new Option('CAMPAIGNS', '01');
                list2.options[2] = new Option('SOCIAL MEDIA', '02');
                list2.options[3] = new Option('CONTENT', '03');
                list2.options[4] = new Option('zSTUDIOS', '04');
                list2.options[5] = new Option('MARKETS LOCAL', '05');

            }

            else if (list1SelectedValue=='025')
            {

                list2.options.length=0;

                list2.options[1] = new Option('RADIO', '01');
            }

            else if (list1SelectedValue=='026')
            {

                list2.options.length=0;

                list2.options[1] = new Option('BRAND', '01');
                list2.options[2] = new Option('NON-BRAND', '03');
                list2.options[3] = new Option('N/A', '02');


            }

            else if (list1SelectedValue=='027')
            {

                list2.options.length=0;

                list2.options[1] = new Option('BRAND', '01');
                list2.options[2] = new Option('NON-BRAND', '03');
                list2.options[3] = new Option('NON PROVIDED', '04');
                list2.options[3] = new Option('SEO', '02');


            }

            else if (list1SelectedValue=='028')
            {

                list2.options.length=0;

                list2.options[1] = new Option('REACH', '01');
                list2.options[2] = new Option('RETARGET', '03');
                list2.options[2] = new Option('SoMe PAID', '05');
                list2.options[2] = new Option('PUSH', '04');
                list2.options[3] = new Option('N/A', '02');

            }

            else if (list1SelectedValue=='029')
            {

                list2.options.length=0;

                list2.options[2] = new Option('GLOBAL', '02');
                list2.options[3] = new Option('LOCAL', '03');
                list2.options[1] = new Option('GLOBAL / LOCAL', '01');

            }

            else if (list1SelectedValue=='030')
            {

                list2.options.length=0;

                list2.options[1] = new Option('OWNED', '01');

            }

            else if (list1SelectedValue=='031')
            {

                list2.options.length=0;

                list2.options[1] = new Option('SPECIAL', '01');

            }

            else if (list1SelectedValue=='032')
            {

                list2.options.length=0;

                list2.options[1] = new Option('CLASSIC', '02');
                list2.options[2] = new Option('DIGITAL', '03');
                list2.options[3] = new Option('SPONSORED', '04');
                list2.options[3] = new Option('TV', '01');

            }


}
