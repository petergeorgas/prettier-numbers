import {PrettyNumberOptions} from "./types"

const commaify = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * 
 * Formats a number as a string based on optional arguments
 * For example, `1412` becomes `"1,412"`. `124512` can become `"124.5 K"`, etc.
 * 
 * Currently supports trillions place, mainly because I don't know what comes afterwards.
 * 
 * @param num A finite, safe integer to be formatted.
 * @param options Optional arguments used to customize the formatting.
 * @returns A "pretty" formatted string version of `num`.
 */
export const prettyNumber = (num: number, options? : PrettyNumberOptions) : string => {

    if(!Number.isFinite(num))
        throw new TypeError(`Expected a finite number. Got ${typeof num}: ${num} instead`);
    
    if(!Number.isSafeInteger(num))
        throw new TypeError(`Expected a safe integer. Got ${num} instead.`)

    var pretty_number: string; 

    // If options were specified
    if(options) {

        if(options.abbreviate_suffix) { // If abbreviate_suffix is true, we don't have to worry about commas.
            
            var decimal_places: number; 

            if(options.decimal_places) {
                decimal_places = options.decimal_places;
            } else {
                decimal_places = 1; 
            }

            if(num >= 1E12)
                pretty_number = `${(num/1E12).toFixed(decimal_places)}T`;
            else if(num >= 1E9)
                pretty_number = `${(num/1E9).toFixed(decimal_places)}B`;
            else if(num >= 1E6)
                pretty_number = `${(num/1E6).toFixed(decimal_places)}M`;
            else if(num >= 1E3)
                pretty_number = `${(num/1E3).toFixed(decimal_places)}K`;
            else 
                pretty_number = num.toString();

        } else { // If we aren't abbreviating the suffix, just add commas in the right spot. 
            pretty_number = commaify(num); 
        }
    } else { // If options were not specified, just output the "commaified" version of the number.
        pretty_number = commaify(num);
    }

    return pretty_number; 
};

export default prettyNumber;
