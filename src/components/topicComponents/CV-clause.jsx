import FormInput from "./FormInput"

export default function CvClause() {
    return (
    <div className="CvClause">
            <FormInput fieldID='cvClause' fieldCaption='CV Clause' type='text' placeholder="I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament's and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC." />
    </div>
    )
}