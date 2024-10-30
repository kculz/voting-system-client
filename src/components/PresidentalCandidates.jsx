import React, { useEffect, useState } from 'react'
import { useGetPresCandidatesQuery } from '../redux/slices/candidates/candidateSlice';
import { useVoteMutation } from '../redux/slices/votes/voteSlice';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PresidentalCandidates = () => {
    const [candidates, setCandidates] = useState([]);
    const { data, isError, isLoading, error } = useGetPresCandidatesQuery();
    const [vote, { isError: isVotingError, error: votingError, isLoading: isVotingLoading }] = useVoteMutation();

    useEffect(() => {
        if (data) {
            console.log(data);
            setCandidates(data.data);
        }
    }, [data]);

    const handleVote = async (candidate_id) => {
        try {
            const res = await vote(candidate_id).unwrap();
            if (!res.success) {
                toast.warn(res.msg);
            } else {
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.data?.err || err?.data?.msg || err?.data?.error || err?.message);
        }
    };

    return (
        <div className="">
            {isLoading ? 'Loading...' : isError && (
                <p className="text-red-400">
                    <span className="text-red-800">Error:</span> {error.data.msg}
                </p>
            )}
            {isVotingLoading ? 'Voting' : isVotingError && (
                <p className="text-red-400">
                    <span className="text-red-800">Error:</span> {votingError.data.msg}
                </p>
            )}
            <div className="grid grid-cols-2 place-content-center place-items-center px-10">
                {candidates.map((candidate) => (
                    <Card
                        key={candidate.id}
                        className="max-w-sm"
                    >
                        <div className="h-48 overflow-hidden flex justify-center items-center">
                            <img
                                src={candidate.avator}
                                alt={candidate.User.fullname}
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <p>Candidate Name: {candidate.User.fullname}</p>
                        <p>Candidate Party: {candidate.party}</p>
                        <a href="#">
                            <p className="text-black font-semibold text-lg">
                                My Objectives are:
                                <br />
                                <ul className="text-sm text-gray-600 ml-3">
                                    <li>{candidate.objectives}</li>
                                </ul>
                            </p>
                        </a>
                        <div className="flex items-center justify-between">
                            <p className="text-3xl font-bold text-gray-900">
                                Votes: <span className="text-gray-700">{candidate.votes}</span>
                            </p>
                            <Link
                                onClick={() => handleVote(candidate.id)}
                                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                {isVotingLoading ? 'Voting' : 'Vote'}
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PresidentalCandidates;
