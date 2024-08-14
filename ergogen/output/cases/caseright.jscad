function _right_scaled_extrude_1_outline_fn(){
    return new CSG.Path2D([[307.665873,-11],[350.565873,-11]]).appendArc([351.115873,-10.45],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([351.115873,94.27]).appendArc([350.565873,94.82],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([309.865873,94.82]).appendArc([309.315873,95.37],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([309.315873,108.1003]).appendArc([308.765873,108.6503],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([288.965873,108.6503]).appendArc([288.415873,109.2003],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([288.415873,113.33905]).appendArc([287.865873,113.88905],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([265.865873,113.88905]).appendArc([265.315873,113.33905],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([265.315873,109.2003]).appendArc([264.765873,108.6503],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([244.965873,108.6503]).appendArc([244.415873,108.1003],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([244.415873,106.05705]).appendArc([243.865873,105.50705],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([196.954173,105.50705]).appendArc([196.404173,104.95705],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([196.404173,-5.1901175]).appendArc([196.4653431,-5.581783],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([206.9153431,-23.6817139]).appendArc([207.6666571,-23.8830279],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([226.1854567,-13.1911939]).appendArc([226.2723456,-13.1506769],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([245.7872593,-6.0478292]).appendArc([245.8798638,-6.0230159],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([266.3316983,-2.4168057]).appendArc([266.4272048,-2.40845],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([286.215873,-2.40845]).appendPoint([286.215873,-2.4167]).appendPoint([306.565873,-2.4167]).appendArc([307.115873,-2.9667],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([307.115873,-10.45]).appendArc([307.665873,-11],{"radius":0.55,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function right_extrude_1_outline_fn(){
    return new CSG.Path2D([[279.6962482,-10],[318.6962482,-10]]).appendArc([319.1962482,-9.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([319.1962482,85.7]).appendArc([318.6962482,86.2],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([281.6962482,86.2]).appendArc([281.1962482,86.7],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([281.1962482,98.273]).appendArc([280.6962482,98.773],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([262.6962482,98.773]).appendArc([262.1962482,99.273],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([262.1962482,103.0355]).appendArc([261.6962482,103.5355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([241.6962482,103.5355]).appendArc([241.1962482,103.0355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([241.1962482,99.273]).appendArc([240.6962482,98.773],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([222.6962482,98.773]).appendArc([222.1962482,98.273],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.1962482,96.4155]).appendArc([221.6962482,95.9155],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([179.0492482,95.9155]).appendArc([178.5492482,95.4155],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([178.5492482,-4.7182886]).appendArc([178.6048574,-5.0743482],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([188.1048574,-21.5288308]).appendArc([188.7878701,-21.7118435],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.6231425,-11.9919944]).appendArc([205.7021324,-11.9551608],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([223.442963,-5.4980266]).appendArc([223.5271489,-5.475469],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([242.1197257,-2.1970961]).appendArc([242.2065498,-2.1895],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([260.1962482,-2.1895]).appendPoint([260.1962482,-2.197]).appendPoint([278.6962482,-2.197]).appendArc([279.1962482,-2.697],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([279.1962482,-9.5]).appendArc([279.6962482,-10],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function caseright_case_fn() {
                    

                // creating part 0 of case caseright
                let caseright__part_0 = _right_scaled_extrude_1_outline_fn();

                // make sure that rotations are relative
                let caseright__part_0_bounds = caseright__part_0.getBounds();
                let caseright__part_0_x = caseright__part_0_bounds[0].x + (caseright__part_0_bounds[1].x - caseright__part_0_bounds[0].x) / 2
                let caseright__part_0_y = caseright__part_0_bounds[0].y + (caseright__part_0_bounds[1].y - caseright__part_0_bounds[0].y) / 2
                caseright__part_0 = translate([-caseright__part_0_x, -caseright__part_0_y, 0], caseright__part_0);
                caseright__part_0 = rotate([0,0,0], caseright__part_0);
                caseright__part_0 = translate([caseright__part_0_x, caseright__part_0_y, 0], caseright__part_0);

                caseright__part_0 = translate([0,0,1.5], caseright__part_0);
                let result = caseright__part_0;
                
            

                // creating part 1 of case caseright
                let caseright__part_1 = right_extrude_1_outline_fn();

                // make sure that rotations are relative
                let caseright__part_1_bounds = caseright__part_1.getBounds();
                let caseright__part_1_x = caseright__part_1_bounds[0].x + (caseright__part_1_bounds[1].x - caseright__part_1_bounds[0].x) / 2
                let caseright__part_1_y = caseright__part_1_bounds[0].y + (caseright__part_1_bounds[1].y - caseright__part_1_bounds[0].y) / 2
                caseright__part_1 = translate([-caseright__part_1_x, -caseright__part_1_y, 0], caseright__part_1);
                caseright__part_1 = rotate([0,0,0], caseright__part_1);
                caseright__part_1 = translate([caseright__part_1_x, caseright__part_1_y, 0], caseright__part_1);

                caseright__part_1 = translate([0,0,1.5], caseright__part_1);
                result = result.subtract(caseright__part_1);
                
            

                // creating part 2 of case caseright
                let caseright__part_2 = right_extrude_1_outline_fn();

                // make sure that rotations are relative
                let caseright__part_2_bounds = caseright__part_2.getBounds();
                let caseright__part_2_x = caseright__part_2_bounds[0].x + (caseright__part_2_bounds[1].x - caseright__part_2_bounds[0].x) / 2
                let caseright__part_2_y = caseright__part_2_bounds[0].y + (caseright__part_2_bounds[1].y - caseright__part_2_bounds[0].y) / 2
                caseright__part_2 = translate([-caseright__part_2_x, -caseright__part_2_y, 0], caseright__part_2);
                caseright__part_2 = rotate([0,0,0], caseright__part_2);
                caseright__part_2 = translate([caseright__part_2_x, caseright__part_2_y, 0], caseright__part_2);

                caseright__part_2 = translate([0,0,0], caseright__part_2);
                result = result.union(caseright__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return caseright_case_fn();
            }

        