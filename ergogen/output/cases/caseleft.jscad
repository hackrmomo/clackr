function _left_scaled_extrude_1_outline_fn(){
    return new CSG.Path2D([[-11,-11],[31.9,-11]]).appendArc([32.45,-10.45],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([32.45,-2.9667]).appendArc([33,-2.4167],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([53.35,-2.4167]).appendPoint([53.35,-2.40845]).appendPoint([73.1386683,-2.40845]).appendArc([73.2341748,-2.4168057],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([93.6860092,-6.0230159]).appendArc([93.7786138,-6.0478293],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([113.2935274,-13.1506769]).appendArc([113.3804163,-13.1911938],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([131.8992159,-23.8830279]).appendArc([132.6505299,-23.6817139],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([143.1005299,-5.581783]).appendArc([143.1617,-5.1901174],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([143.1617,104.95705]).appendArc([142.6117,105.50705],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([95.7,105.50705]).appendArc([95.15,106.05705],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([95.15,108.1003]).appendArc([94.6,108.6503],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([74.8,108.6503]).appendArc([74.25,109.2003],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([74.25,113.33905]).appendArc([73.7,113.88905],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([51.7,113.88905]).appendArc([51.15,113.33905],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([51.15,109.2003]).appendArc([50.6,108.6503],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([30.8,108.6503]).appendArc([30.25,108.1003],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([30.25,95.37]).appendArc([29.7,94.82],{"radius":0.55,"clockwise":true,"large":false}).appendPoint([-11,94.82]).appendArc([-11.55,94.27],{"radius":0.55,"clockwise":false,"large":false}).appendPoint([-11.55,-10.45]).appendArc([-11,-11],{"radius":0.55,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function left_extrude_1_outline_fn(){
    return new CSG.Path2D([[-10,-10],[29,-10]]).appendArc([29.5,-9.5],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([29.5,-2.697]).appendArc([30,-2.197],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([48.5,-2.197]).appendPoint([48.5,-2.1895]).appendPoint([66.4896984,-2.1895]).appendArc([66.5765225,-2.1970961],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([85.1690993,-5.475469]).appendArc([85.2532853,-5.4980266],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([102.9941158,-11.9551608]).appendArc([103.0731057,-11.9919944],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([119.9083781,-21.7118435]).appendArc([120.5913908,-21.5288308],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([130.0913908,-5.0743482]).appendArc([130.147,-4.7182886],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([130.147,95.4155]).appendArc([129.647,95.9155],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([87,95.9155]).appendArc([86.5,96.4155],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([86.5,98.273]).appendArc([86,98.773],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([68,98.773]).appendArc([67.5,99.273],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([67.5,103.0355]).appendArc([67,103.5355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47,103.5355]).appendArc([46.5,103.0355],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([46.5,99.273]).appendArc([46,98.773],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([28,98.773]).appendArc([27.5,98.273],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([27.5,86.7]).appendArc([27,86.2],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([-10,86.2]).appendArc([-10.5,85.7],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([-10.5,-9.5]).appendArc([-10,-10],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function caseleft_case_fn() {
                    

                // creating part 0 of case caseleft
                let caseleft__part_0 = _left_scaled_extrude_1_outline_fn();

                // make sure that rotations are relative
                let caseleft__part_0_bounds = caseleft__part_0.getBounds();
                let caseleft__part_0_x = caseleft__part_0_bounds[0].x + (caseleft__part_0_bounds[1].x - caseleft__part_0_bounds[0].x) / 2
                let caseleft__part_0_y = caseleft__part_0_bounds[0].y + (caseleft__part_0_bounds[1].y - caseleft__part_0_bounds[0].y) / 2
                caseleft__part_0 = translate([-caseleft__part_0_x, -caseleft__part_0_y, 0], caseleft__part_0);
                caseleft__part_0 = rotate([0,0,0], caseleft__part_0);
                caseleft__part_0 = translate([caseleft__part_0_x, caseleft__part_0_y, 0], caseleft__part_0);

                caseleft__part_0 = translate([0,0,1.5], caseleft__part_0);
                let result = caseleft__part_0;
                
            

                // creating part 1 of case caseleft
                let caseleft__part_1 = left_extrude_1_outline_fn();

                // make sure that rotations are relative
                let caseleft__part_1_bounds = caseleft__part_1.getBounds();
                let caseleft__part_1_x = caseleft__part_1_bounds[0].x + (caseleft__part_1_bounds[1].x - caseleft__part_1_bounds[0].x) / 2
                let caseleft__part_1_y = caseleft__part_1_bounds[0].y + (caseleft__part_1_bounds[1].y - caseleft__part_1_bounds[0].y) / 2
                caseleft__part_1 = translate([-caseleft__part_1_x, -caseleft__part_1_y, 0], caseleft__part_1);
                caseleft__part_1 = rotate([0,0,0], caseleft__part_1);
                caseleft__part_1 = translate([caseleft__part_1_x, caseleft__part_1_y, 0], caseleft__part_1);

                caseleft__part_1 = translate([0,0,1.5], caseleft__part_1);
                result = result.subtract(caseleft__part_1);
                
            

                // creating part 2 of case caseleft
                let caseleft__part_2 = left_extrude_1_outline_fn();

                // make sure that rotations are relative
                let caseleft__part_2_bounds = caseleft__part_2.getBounds();
                let caseleft__part_2_x = caseleft__part_2_bounds[0].x + (caseleft__part_2_bounds[1].x - caseleft__part_2_bounds[0].x) / 2
                let caseleft__part_2_y = caseleft__part_2_bounds[0].y + (caseleft__part_2_bounds[1].y - caseleft__part_2_bounds[0].y) / 2
                caseleft__part_2 = translate([-caseleft__part_2_x, -caseleft__part_2_y, 0], caseleft__part_2);
                caseleft__part_2 = rotate([0,0,0], caseleft__part_2);
                caseleft__part_2 = translate([caseleft__part_2_x, caseleft__part_2_y, 0], caseleft__part_2);

                caseleft__part_2 = translate([0,0,0], caseleft__part_2);
                result = result.union(caseleft__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return caseleft_case_fn();
            }

        