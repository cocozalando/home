function getSubChannel(){

            var list1 = document.getElementById('channel');
            var list2 = document.getElementById('subchannel');
            var list1SelectedValue = list1.options[list1.selectedIndex].value;

            if (list1SelectedValue=='001')
            {
                list2.options.length=0;

                list2.options[1] = new Option('affiliate', '01');
            }
            

            else if (list1SelectedValue=='004')
            {

                list2.options.length=0;

                list2.options[1] = new Option('cinema', '01');


            }



            else if (list1SelectedValue=='007')
            {

                list2.options.length=0;
                list2.options[2] = new Option('crm', '01');

             
                
            }

      
            else if (list1SelectedValue=='009')
            {

                list2.options.length=0;

                list2.options[2] = new Option('consumer', '02');
                list2.options[3] = new Option('partner', '03');
                list2.options[4] = new Option('cast-celebrities', '04');
           


            }

            else if (list1SelectedValue=='010')
            {

                list2.options.length=0;

                list2.options[2] = new Option('b2b', '01');
                list2.options[3] = new Option('b2c', '02');
                list2.options[4] = new Option('retail', '03');


            }

            else if (list1SelectedValue=='011')
            {

                list2.options.length=0;

                list2.options[1] = new Option('influencer collaboration', '01');
                list2.options[2] = new Option('production', '02');
                list2.options[3] = new Option('agency fee', '03');


            }

            else if (list1SelectedValue=='015')
            {

                list2.options.length=0;

                list2.options[1] = new Option('market research', '01');


            }

            else if (list1SelectedValue=='016')
            {

                list2.options.length=0;

                list2.options[3] = new Option('media collaboration', '01');

            }

       
            else if (list1SelectedValue=='018')
            {

                list2.options.length=0;

                list2.options[1] = new Option('programmatic', '02');
                list2.options[2] = new Option('reach videos', '04');
                list2.options[3] = new Option('direct deals', '05');
        

            }


            else if (list1SelectedValue=='020')
            {

                list2.options.length=0;


                list2.options[2] = new Option('classic', '02');
                list2.options[3] = new Option('digital', '03');
                list2.options[4] = new Option('specials', '04');
            }

            else if (list1SelectedValue=='022')
            {

                list2.options.length=0;

                list2.options[1] = new Option('pr', '01');
                list2.options[2] = new Option('agency fee', '02');
                list2.options[3] = new Option('cast-celebrities', '03');
            }

            else if (list1SelectedValue=='023')
            {

                list2.options.length=0;

                list2.options[1] = new Option('print', '01');
            }

            else if (list1SelectedValue=='024')
            {

                list2.options.length=0;

                list2.options[1] = new Option('campaigns', '01');
                list2.options[2] = new Option('social media', '02');
                list2.options[3] = new Option('content', '03');
                list2.options[4] = new Option('zstudios', '04');
                list2.options[5] = new Option('markets local', '05');
                list2.options[6] = new Option('agency fee', '06');
                list2.options[7] = new Option('cast-celebrities', '07');
                list2.options[8] = new Option('music', '08');

            }

            else if (list1SelectedValue=='025')
            {

                list2.options.length=0;

                list2.options[1] = new Option('radio', '01');
            }


            else if (list1SelectedValue=='027')
            {

                list2.options.length=0;

                list2.options[1] = new Option('seo', '02');       
            }

            else if (list1SelectedValue=='028')
            {

                list2.options.length=0;

                list2.options[1] = new Option('reach (personalized marketing)', '01');
                list2.options[2] = new Option('retarget (personalized marketing', '03');
                list2.options[3] = new Option('push (markets)', '04');


            }

            else if (list1SelectedValue=='029')
            {

                list2.options.length=0;

                list2.options[2] = new Option('global', '02');
                list2.options[3] = new Option('local', '03');
                list2.options[5] = new Option('agency fee', '05');

            }
            
             else if (list1SelectedValue=='026')
            {

                list2.options.length=0;

                list2.options[2] = new Option('brand (personalized marketing)', '01');
                list2.options[3] = new Option('reach (personalized marketing)', '04');
                list2.options[4] = new Option('non-brand (personalized marketing)', '03');


            }


            else if (list1SelectedValue=='032')
            {

                list2.options.length=0;

                list2.options[2] = new Option('classic', '02');
                list2.options[3] = new Option('digital', '03');
                list2.options[4] = new Option('sponsored', '04');

            }


}
