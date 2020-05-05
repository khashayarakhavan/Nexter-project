// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component , useState } from 'react';
import { reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state= { showFormReview: false};
    // const [showFormReview, setShowFormReview] = useState(false);
    renderContent() {
        if (this.state.showFormReview) { return <SurveyFormReview onBack={() => this.setState({ showFormReview: false }) } />;}
        return (<SurveyForm onSurveySubmit={() => this.setState( { showFormReview: true } ) } />  )
    }
    
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
}) (SurveyNew);