/* eslint-disable indent */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditing(event.target.checked);
    }
    return (
        <div className="EditMode">
            <div>
                <Form.Check
                    type="switch"
                    id="is-editMode-check"
                    label={isEditing ? "Edit Mode" : "Non-edit Mode"}
                    checked={isEditing}
                    onChange={updateEditing}
                />
            </div>
            <div>
                {isEditing ? (
                    <div>
                        <Form.Group controlId="editingForm">
                            <Form.Control
                                type="string"
                                value={name}
                                placeholder="Enter name"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Form.Group>

                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div>
                {name}
                {isStudent ? " is a student" : " is not a student"}.
            </div>
        </div>
    );
}
